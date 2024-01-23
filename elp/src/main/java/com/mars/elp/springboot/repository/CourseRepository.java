package com.mars.elp.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mars.elp.springboot.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
