package com.mars.elp.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mars.elp.springboot.entity.Course;
import com.mars.elp.springboot.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    
    @Autowired CourseService service;
    
    @GetMapping("") // All course details fetched [X]
    public ResponseEntity<List<Course>> getCourses() {
        List<Course> courses = service.getCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }
    
    @GetMapping("/id") // a particular course is fetched [X]
    public ResponseEntity<Course> getCourseById(@RequestParam int id) {
        return new ResponseEntity<> (service.getCourseById(id), HttpStatus.OK);
    }
    
    @PostMapping("") // a new Course is created [X]
    public ResponseEntity<Course> postCourse(@RequestBody Course course) {
        Course newCourse = service.postCourse(course);
        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
    }
    
    @PutMapping("/id") // Course is updated [X]
    public ResponseEntity<Course> putCourseById(@RequestParam int id, @RequestBody Course course) {
        service.putCourseById(id, course);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @PutMapping("/enroll") // enroll to a particular course [X]
    public ResponseEntity<Course> putUserInCourseById(@RequestParam int userId, @RequestParam int courseId) {
        service.putUserInCourseById(userId, courseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("/id") // Course is deleted [X]
    public ResponseEntity<Course> deleteUserById(@RequestParam int id) {
        service.deleteCourseById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // ==================== UTILITY ====================
    @PostMapping("/utility")
    public ResponseEntity<List<Course>> postManyCourses(@RequestBody List<Course> courses) {
        List<Course> manyCourses = service.postManyCourses(courses);
        return new ResponseEntity<>(manyCourses, HttpStatus.OK);
    }
}
