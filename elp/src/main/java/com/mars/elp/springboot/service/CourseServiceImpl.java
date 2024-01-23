package com.mars.elp.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mars.elp.springboot.entity.Course;
import com.mars.elp.springboot.entity.User;
import com.mars.elp.springboot.repository.CourseRepository;
import com.mars.elp.springboot.repository.UserRepository;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseRepository courseRepo;
    @Autowired
    UserRepository userRepo;
    
    @Override
    public List<Course> getCourses() { // All course details fetched 
        return courseRepo.findAll();
    }

    @Override
    public Course getCourseById(int id) { // A particular course is fetched
        Optional<Course> course = courseRepo.findById(id);
        return course.isPresent() ? course.get() : null;
    }

    @Override
    public Course postCourse(Course course) { // A new Course is created 
        return courseRepo.save(course);
    }

    @Override
    public void putCourseById(int id, Course course) { // Course is updated
        Optional<Course> preUpdateCourse = courseRepo.findById(id);
        
        if (preUpdateCourse.isPresent()) {
            Course postUpdateCourse = preUpdateCourse.get();
            postUpdateCourse.setName(course.getName());
            postUpdateCourse.setResource(course.getResource());
            postUpdateCourse.setFee(course.getFee());
            postUpdateCourse.setDescription(course.getDescription());
            
            courseRepo.save(postUpdateCourse);
        } else {
            System.out.println("Course not found; cannot update.");
        }
    }
    
    @Override
    public void putUserInCourseById(int userId, int courseId) { // Enroll to a particular course
        Optional<User> user = userRepo.findById(userId);
        Optional<Course> course = courseRepo.findById(courseId);
        
        if (user.isPresent() && course.isPresent()) {
            User enrolledUser = user.get();
            Course updatedCourse = course.get();

            List<Course> usersCourses = enrolledUser.getCourses();
            List<User> coursesUsers = updatedCourse.getUsers(); 
            
            usersCourses.add(updatedCourse);
            coursesUsers.add(enrolledUser);
            
            enrolledUser.setCourses(usersCourses);
            updatedCourse.setUsers(coursesUsers);
            

            userRepo.save(enrolledUser);
            courseRepo.save(updatedCourse);

        } else {
            System.out.println("Could not enroll userId=" + userId + " into courseId=" + courseId);
        }
        
    }

    @Override
    public void deleteCourseById(int id) { // Course is deleted 
        Optional<Course> course = courseRepo.findById(id);
        if (course.isPresent()) {
            courseRepo.deleteById(id);
        } else {
            System.out.println("Post not found; cannot delete.");
        }
    }

    // A feedback has been given
    
    // ==================== UTILITY ====================
    @Override
    public List<Course> postManyCourses(List<Course> courses) {
        return courseRepo.saveAll(courses);
    }
    
}
