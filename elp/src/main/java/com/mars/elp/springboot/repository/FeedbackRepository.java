package com.mars.elp.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mars.elp.springboot.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}
