package com.mars.elp.springboot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class Address {

    @JsonIgnore
    @OneToOne(mappedBy = "address")
    User user;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String street;
    private String city;


    public Address(String street, String city) {
        super();
        this.street = street;
        this.city = city;
    }
    
}
