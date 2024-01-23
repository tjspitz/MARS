package com.mars.elp.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mars.elp.springboot.entity.Course;
import com.mars.elp.springboot.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseRepository repository;
    
    @Override
    public List<Course> getCourses() { // All course details fetched 
        return repository.findAll();
    }

    @Override
    public Course getCourseById(int id) { // A particular course is fetched
        Optional<Course> course = repository.findById(id);
        return course.isPresent() ? course.get() : null;
    }

    @Override
    public Course postCourse(Course course) { // A new Course is created 
        return repository.save(course);
    }

    @Override
    public void putCourse(Course course) { // Course is updated
        Optional<Course> preUpdateCourse = repository.findById(course.getId());
        
        if (preUpdateCourse.isPresent()) {
            Course postUpdateCourse = preUpdateCourse.get();
            postUpdateCourse.setName(course.getName());
            postUpdateCourse.setResource(course.getResource());
            postUpdateCourse.setFee(course.getFee());
            postUpdateCourse.setDescription(course.getDescription());
            
            repository.save(postUpdateCourse);
        } else {
            System.out.println("Course not found; cannot update.");
        }
    }
    
    @Override
    public void putUserInCourseById(int userId) { // Enroll to a particular course - USER id
        // TODO Auto-generated method stub

    }

    @Override
    public void deleteCourseById(int id) { // Course is deleted 
        Optional<Course> course = repository.findById(id);
        if (course.isPresent()) {
            repository.deleteById(id);
        } else {
            System.out.println("Post not found; cannot delete.");
        }
    }

    // A feedback has been given
    
    // ==================== UTILITY ====================
    @Override
    public List<Course> postManyCourses(List<Course> courses) {
        return repository.saveAll(courses);
    }
    
}
