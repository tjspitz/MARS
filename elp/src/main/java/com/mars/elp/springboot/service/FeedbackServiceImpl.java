package com.mars.elp.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mars.elp.springboot.entity.Course;
import com.mars.elp.springboot.entity.Feedback;
import com.mars.elp.springboot.repository.CourseRepository;
import com.mars.elp.springboot.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    
    @Autowired FeedbackRepository feedbackRepo;
    @Autowired CourseRepository courseRepo;
    
    @Override
    public List<Feedback> getFeedback() {
        return feedbackRepo.findAll();
    }

    @Override
    public Feedback getFeedbackById(int id) {
        Optional<Feedback> feedback = feedbackRepo.findById(id);
        return feedback.isPresent() ? feedback.get() : null;
    }

    @Override
    public Feedback postFeedbackByCourseId(int courseId, Feedback feedback) {
        Optional<Course> course = courseRepo.findById(courseId);
        
        if (course.isPresent()) {
            Course courseGettingFeedback = course.get();
            List<Feedback> coursesFeedback = courseGettingFeedback.getFeedback();
                        
            coursesFeedback.add(feedback);
            courseGettingFeedback.setFeedback(coursesFeedback);
            feedback.setCourse(courseGettingFeedback);
            
            courseRepo.save(courseGettingFeedback);
        } else {
            System.out.println("Could not add feedback to courseId=" + courseId + ".");
            System.out.println("Saving in the netherworld...");
        }
        return feedbackRepo.save(feedback);
    }

    @Override
    public void putFeedbackById(int id, Feedback feedback) {
        Optional<Feedback> preUpdateFeedback = feedbackRepo.findById(id);

        if (preUpdateFeedback.isPresent()) {
            Feedback postUpdateFeedback = preUpdateFeedback.get();
            postUpdateFeedback.setMessage(feedback.getMessage());
            postUpdateFeedback.setFlagged(feedback.getFlagged());
            feedbackRepo.save(postUpdateFeedback);
        } else {
            System.out.println("Feedback not found; cannot update.");
        } 
    }

    @Override
    public void deleteFeedbackById(int id) {
        Optional<Feedback> feedback = feedbackRepo.findById(id);
        if (feedback.isPresent()) {
            feedbackRepo.deleteById(id);
        } else {
            System.out.println("Feedback not found; cannot delete.");
        }
    }

    // ==================== UTILITY ====================
    @Override
    public List<Feedback> postManyFeedback(List<Feedback> feedback) {
        // TODO Auto-generated method stub
        return null;
    }

}
