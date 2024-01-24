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

import com.mars.elp.springboot.entity.Feedback;
import com.mars.elp.springboot.service.CourseService;
import com.mars.elp.springboot.service.FeedbackService;

@RestController
@RequestMapping("/api/courses/feedback")
public class FeedbackController {

    @Autowired FeedbackService feedbackService;
    @Autowired CourseService courseService;

    @GetMapping("") // all Feedback fetched [X]
    public ResponseEntity<List<Feedback>> getAllFeedback() {
        List<Feedback> allFeedback = feedbackService.getFeedback();
        return new ResponseEntity<>(allFeedback, HttpStatus.OK);
    }
    
    @GetMapping("/id") // a particular Feedback is fetched by ID [X]
    public ResponseEntity<Feedback> getFeedbackById(@RequestParam int id) {
        return new ResponseEntity<> (feedbackService.getFeedbackById(id), HttpStatus.OK);
    }
    
    
    @PostMapping("/id") // a feedback has been given - COURSE id [X]
    public ResponseEntity<Feedback> postFeedbackByCourseId(@RequestParam int courseId, @RequestBody Feedback feedback) {
        Feedback newFeedback = feedbackService.postFeedbackByCourseId(courseId, feedback);
        return new ResponseEntity<>(newFeedback, HttpStatus.CREATED);
    }
    
    @PutMapping("/id") // feedback is updated [X]
    public ResponseEntity<Feedback> putFeedbackById(@RequestParam int id, @RequestBody Feedback feedback) {
        feedbackService.putFeedbackById(id, feedback);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("/id") // feedback is deleted [X]
    public ResponseEntity<Feedback> deleteFeedbackById(@RequestParam int id) {
        feedbackService.deleteFeedbackById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
