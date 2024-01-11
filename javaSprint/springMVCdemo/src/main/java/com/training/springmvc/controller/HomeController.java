package com.training.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//spring's MVC, no more Servlets
@Controller 
@RequestMapping("/") // kindasortalike @WebServlet
public class HomeController {

    // all your GETs will call this method
//    @RequestMapping(method=RequestMethod.GET)
    @GetMapping("/home")
    public String greet() {
        return "home";
    }
    
//    @RequestMapping(value="/etc", method=RequestMethod.GET)
    @GetMapping("/etc")
    public String display() {
        return "etc";
    }
}
