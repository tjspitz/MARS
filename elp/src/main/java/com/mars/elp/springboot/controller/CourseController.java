package com.mars.elp.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mars.elp.springboot.entity.Course;
import com.mars.elp.springboot.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    
    @Autowired CourseService service;
    
    @GetMapping("") // All course details fetched
    public ResponseEntity<List<Course>> getCourses() {
        List<Course> courses = service.getCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }
    
    @GetMapping("/{id}") // a particular course is fetched
    public ResponseEntity<Course> getCourseById(@PathVariable(name = "id") int id) {
        return new ResponseEntity<> (service.getCourseById(id), HttpStatus.OK);
    }
    
    @PostMapping("") // a new Course is created
    public ResponseEntity<Course> postCourse(@RequestBody Course course) {
        Course newCourse = service.postCourse(course);
        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}") // Course is updated
    public ResponseEntity<Course> putCourseById(@RequestBody Course course) {
        service.putCourse(course);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @PutMapping("/enroll/{id}") // enroll to a particular course - USER id
    public ResponseEntity<Course> putUserInCourseById(@PathVariable(name = "id") int id) {
        service.putUserInCourseById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}") // Course is deleted
    public ResponseEntity<Course> deleteUserById(@PathVariable(name = "id") int id) {
        service.deleteCourseById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    // A feedback has been given - COURSE id 

    // ==================== UTILITY ====================
    @PostMapping("/utility")
    public ResponseEntity<List<Course>> postManyCourses(@RequestBody List<Course> courses) {
        List<Course> manyCourses = service.postManyCourses(courses);
        return new ResponseEntity<>(manyCourses, HttpStatus.OK);
    }
}
