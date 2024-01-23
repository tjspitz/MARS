package com.mars.elp.springboot.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String resource;
    private Double fee;
    private String description;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "course")
    private List<Feedback> feedback = new ArrayList<>();
    
    @JsonBackReference(value = "users")
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "students_courses",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users = new ArrayList<>();
    
    public Course(String name, String resource, Double fee, String description) {
        super();
        this.name = name;
        this.resource = resource;
        this.fee = fee;
        this.description = description;
    }
    
}
