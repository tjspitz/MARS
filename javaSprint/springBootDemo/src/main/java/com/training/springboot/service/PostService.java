package com.training.springboot.service;

import java.util.List;

import com.training.springboot.entity.Post;

public interface PostService {

    public List<Post> getPosts();
    public Post getPostById(long id);
    public Post getPostByTitle(String title);
    public Post postPost (Post post);
    public void putPostById(long id, Post post);
    public void deletePostById(long id);
    
}
