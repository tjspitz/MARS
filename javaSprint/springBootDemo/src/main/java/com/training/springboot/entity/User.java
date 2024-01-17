package com.training.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // "hi, I want this to become a table in mySQL"
// -Table would allow to specify a table name )other than the Class' name)
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String firstName;
    private String lastName;
    private int age;
    private char gender;
    
    public User(String firstName, String lastName, int age, char gender) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    
    
}
