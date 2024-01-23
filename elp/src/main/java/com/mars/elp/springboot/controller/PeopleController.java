package com.mars.elp.springboot.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mars.elp.springboot.entity.Admin;
import com.mars.elp.springboot.entity.User;
import com.mars.elp.springboot.service.AdminService;
import com.mars.elp.springboot.service.UserService;

@RestController
@RequestMapping("/api/people")
public class PeopleController {

    @Autowired AdminService adminService;
    @Autowired UserService userService;
    
    // ==================== ADMINS ====================
    @GetMapping("/admins") // all admin fetched
    public ResponseEntity<List<Admin>> getAdmins() {
        List<Admin> admins = adminService.getAdmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }
    
 // ==================== USERS ====================
    @GetMapping("/users") // all users fetched [X]
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    
    @GetMapping("/users/id") // a particular User is fetched by ID [X]
    public ResponseEntity<User> getUserById(@RequestParam int id) {
        return new ResponseEntity<> (userService.getUserById(id), HttpStatus.OK);
    }
    
    @GetMapping("/users/name") // a particular User is fetched by LAST NAME [X]
    public ResponseEntity<User> getUserByLastName(@RequestParam String name) {
        return new ResponseEntity<> (userService.getUserByLastName(name), HttpStatus.OK);
    }
    
    @PostMapping("/users") // a new User is created, with an Address association [X]
    public ResponseEntity<User> postUser(@RequestBody User course) {
        User newUser = userService.postUser(course);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
    
    @PutMapping("/users/{id}") // User is updated [X]
    public ResponseEntity<User> putUserById(@RequestBody User user) {
        userService.putUserById(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping("/users/{id}") // User is deleted [X]
    public ResponseEntity<User> deleteUserById(@PathVariable(name = "id") int id) {
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    // ==================== UTILITY ====================
    @PostMapping("/users/utility")
    public ResponseEntity<List<User>> postManyUsers(@RequestBody List<User> users) {
        List<User> manyUsers = userService.postManyUsers(users);
        return new ResponseEntity<>(manyUsers, HttpStatus.OK);
    }
    
}
