package com.training.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.springboot.entity.User;

@RestController // -Controller + -ResponseBody
@RequestMapping("/home")
public class HomeController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello from Spring Boot!";
    }
    
    @GetMapping("/users")
    public ResponseEntity<List<User>> users() {
        // just sending a dummy list w/ 200 code
        List<User> users = new ArrayList<User>();
        users.add(new User("Orlando", "Ferlipperson", 32, 'M'));
        users.add(new User("Shirley", "Slipperson", 65, 'F'));
        users.add(new User("Gilda", "Noberts", 54, 'F'));
        users.add(new User("Jean", "Jeanerson", 22, 'F'));
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
