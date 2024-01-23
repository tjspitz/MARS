package com.mars.elp.springboot.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String type;
    private String firstName;
    private String lastName;
    private Date registrationDate;
    private String phone;
    private String photo;
    private String email;
    private String password;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_id", referencedColumnName = "id")
    private Address address;
    
    // @JsonManagedReference // <-- why does POSTing break w/ this?
    @ManyToMany
    private List<Course> courses = new ArrayList<>();

    public User(String type, String firstName, String lastName, Date registrationDate, String phone, String photo,
            String email, String password, Address address) {
        super();
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.registrationDate = registrationDate;
        this.phone = phone;
        this.photo = photo;
        this.email = email;
        this.password = password;
        this.address = address;
    }
    
}
