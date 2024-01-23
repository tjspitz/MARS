package com.mars.elp.springboot.service;

import java.util.List;

import com.mars.elp.springboot.entity.Feedback;

public interface FeedbackService {

    public List<Feedback> getFeedback();
    public Feedback getFeedbackById(int id);
    public Feedback postFeedbackByCourseId(int courseId, Feedback feedback);
    public void putFeedbackById(int id, Feedback feedback);
    public void deleteFeedbackById(int id);
    
    // ==================== UTILITY ====================
    public List<Feedback> postManyFeedback(List<Feedback> feedback);
}
