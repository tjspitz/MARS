package com.training.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//spring's MVC, no more Servlets
@Controller 
@RequestMapping("/home") // kindasortalike @WebServlet
public class HomeController {

    // all your GETs will call this method
//    @RequestMapping(method=RequestMethod.GET)
    @GetMapping
    public String getHome() {
        return "home";
    }
    
    @GetMapping("/etc")
    public String getHomeEtc() {
        return "etc";
    }
}
