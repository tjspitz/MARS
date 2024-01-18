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

import com.training.springboot.entity.User;
import com.training.springboot.service.UserService;

@RestController // -Controller + -ResponseBody
@RequestMapping("/home")
public class HomeController {
    
    @Autowired
    UserService service;

    @GetMapping("/greet")
    public String greet() {
        return "Hello from Spring Boot!";
    }
    
    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = service.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    
    @GetMapping("/user/id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(name = "id") int id) {
        return new ResponseEntity<> (service.getUserById(id), HttpStatus.OK);
    }
    
    @GetMapping("user/name/{name}")
    public ResponseEntity<User> getUserByFirstName(@PathVariable(name = "name") String name) {
        return new ResponseEntity<> (service.getUserByFirstName(name), HttpStatus.OK);
    }
    
    @PostMapping("/user")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        User newUser = service.postUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
    
    @PutMapping("/user/{id}")
    public ResponseEntity<User> putUserById(@PathVariable(name = "id") int id, @RequestBody User user) {
        service.putUserById(id, user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("user/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable(name = "id") int id) {
        service.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
