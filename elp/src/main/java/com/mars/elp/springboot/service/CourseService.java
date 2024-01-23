package com.mars.elp.springboot.service;

import java.util.List;

import com.mars.elp.springboot.entity.Course;

public interface CourseService {
    
    public List<Course> getCourses(); // All course details fetched 
    public Course getCourseById(int id); // A particular course is fetched 
    public Course postCourse(Course course); // A new Course is created 
    public void putCourseById(int id, Course course); // Course is updated
    public void putUserInCourseById(int userId, int courseId); // Enroll to a particular course
    public void deleteCourseById(int id); // Course is deleted 
    // A feedback has been given - COURSE id
    
    // ==================== UTILITY ====================
    public List<Course> postManyCourses(List<Course> courses);
}
