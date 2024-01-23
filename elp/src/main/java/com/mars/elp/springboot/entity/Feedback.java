package com.mars.elp.springboot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String message;
    private boolean flagged = false;
    
    @JsonIgnore
    @ManyToOne
    private Course course;
    
    public Feedback(String name, String email, String message) {
        super();
        this.name = name;
        this.email = email;
        this.message = message;
//        this.flagged = flagged;
    }
    
    public boolean getFlagged() {
        return this.flagged;
    }
    
    
}
