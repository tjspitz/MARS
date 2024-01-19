package com.training.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.springboot.entity.Post;
import com.training.springboot.repository.PostRepository;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository repository;
    
    @Override
    public List<Post> getPosts() {
        return repository.findAll();
    }

    @Override
    public Post getPostById(long id) {
        Optional<Post> post = repository.findById(id);
        
        if (post.isPresent()) {
            return post.get();
        } else {
            return null;
        }
    }
    
    @Override
    public Post getPostByTitle(String title) {
        return repository.findByTitle(title);
    }
    
    @Override
    public Post postPost (Post post) {
        return repository.save(post);
    }
    
    @Override
    public void putPostById(long id, Post post) {
        Optional<Post> preUpdatePost = repository.findById(id);
        
        if (preUpdatePost.isPresent()) {
            Post postUpdatePost = preUpdatePost.get();
            postUpdatePost.setTitle(post.getTitle());
            postUpdatePost.setMessage(post.getMessage());
            
            repository.save(postUpdatePost);
        } else {
            System.out.println("Post not found; cannot update.");
        }
    }
    
    
    public void deletePostById(long id) {
        Optional<Post> post = repository.findById(id);
        
        if (post.isPresent()) {
            repository.deleteById(id);            
        } else {
            System.out.println("Post not found; cannot delete.");
        }
    }
    
}
