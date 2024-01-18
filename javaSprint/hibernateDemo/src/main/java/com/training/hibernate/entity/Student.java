package com.training.hibernate.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // mapped w/ a db table
@Table(name="student") // specify said table
@NoArgsConstructor
@Data
public class Student {

    // db table col annotations/cols
    @Id // specifies primary key
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="stud_id")
    private int id;
    
    @Column(name="first_name")
    private String firstName;
    
    @Column(name="last_name")
    private String lastName;
    
    @Column(name="email")
    private String email;
    
    // specify the args constructor since Id will be autogenerated
    public Student(String firstName, String lastName, String email) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    
    
}
