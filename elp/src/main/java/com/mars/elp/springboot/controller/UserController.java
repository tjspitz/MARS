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

import com.mars.elp.springboot.entity.User;
import com.mars.elp.springboot.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired UserService service;

    @GetMapping("") // all users fetched [X]
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = service.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    
    @GetMapping("/id") // a particular User is fetched by ID [X]
    public ResponseEntity<User> getUserById(@RequestParam int id) {
        return new ResponseEntity<> (service.getUserById(id), HttpStatus.OK);
    }
    
    @GetMapping("/name") // a particular User is fetched by LAST NAME [X]
    public ResponseEntity<User> getUserByLastName(@RequestParam String name) {
        return new ResponseEntity<> (service.getUserByLastName(name), HttpStatus.OK);
    }
    
    @PostMapping("") // a new User is created, with an Address association [X]
    public ResponseEntity<User> postUser(@RequestBody User user) {
        User newUser = service.postUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
    
    @PutMapping("") // User is updated [X]
    public ResponseEntity<User> putUserById(@RequestParam int id, @RequestBody User user) {
        service.putUserById(id, user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("/id") // User is deleted [X]
    public ResponseEntity<User> deleteUserById(@RequestParam int id) {
        service.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    // ==================== UTILITY ====================
    @PostMapping("/utility")
    public ResponseEntity<List<User>> postManyUsers(@RequestBody List<User> users) {
        List<User> manyUsers = service.postManyUsers(users);
        return new ResponseEntity<>(manyUsers, HttpStatus.OK);
    }
    
}
