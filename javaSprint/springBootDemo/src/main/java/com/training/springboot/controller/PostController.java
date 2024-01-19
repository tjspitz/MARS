package com.training.springboot.controller;

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

import com.training.springboot.entity.Post;
import com.training.springboot.service.PostService;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostService service;
    
    @GetMapping("")
    public ResponseEntity<List<Post>> getPosts() {
        List<Post> posts = service.getPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable(name = "id") long id) {
        return new ResponseEntity<> (service.getPostById(id), HttpStatus.OK);
    }
    
    @GetMapping("/title/{title}")
    public ResponseEntity<Post> getPostByTitle(@PathVariable(name = "title") String title) {
        return new ResponseEntity<> (service.getPostByTitle(title), HttpStatus.OK);
    }
    
    @PostMapping("")
    public ResponseEntity<Post> postPost(@RequestBody Post post) {
        Post newPost = service.postPost(post);
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }
    
    @PutMapping("/id/{id}")
    public ResponseEntity<Post> putPostById(@PathVariable(name = "id") long id, @RequestBody Post post) {
        service.putPostById(id, post);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("/id/{id}")
    public ResponseEntity<Post> deletePostById(@PathVariable(name = "id") long id) {
        service.deletePostById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
