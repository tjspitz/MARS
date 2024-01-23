package com.mars.elp.springboot.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String name;
    private String resource;
    private Double fee;
    private String description;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "feedback_id", referencedColumnName = "id")
    private List<Feedback> feedback = new ArrayList<>();
    
    @ManyToMany
    private List<User> users = new ArrayList<>();

    public Course(String name, String resource, Double fee, String description) {
        super();
        this.name = name;
        this.resource = resource;
        this.fee = fee;
        this.description = description;
    }
    
}
