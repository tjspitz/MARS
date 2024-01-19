package com.training.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.training.springboot.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long>{

    public Post findByTitle(String title);
}
