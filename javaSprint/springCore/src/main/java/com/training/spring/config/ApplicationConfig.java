package com.training.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.training.spring.Car;
import com.training.spring.Person;

// "hi Spring, this is a config file"
@Configuration
public class ApplicationConfig {

//  "hi Spring, this is a Bean object"
    @Bean
    public Person person() {
        // can instantiate w/ empty or params constructors
        Person p = new Person("Bilbo", "Baggins", 110);
        p.setCar(new Car());
        return p;
    }
    
    @Bean
    public Car car() {
        return new Car("Honda", "Civic", 1982);
    }

}
