package com.training.spring;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;
import lombok.NoArgsConstructor;

// getters and setters, empty constructor via lombok
@Data
@NoArgsConstructor
public class Person {
    private String firstName;
    private String lastName;
    private int age;
    
    @Autowired
    private Car car;

// OBSOLETE via lombok.NoArgsConstructor
//    public Person() {
//        super();
//    }
    
    public Person(String firstName, String lastName, int age) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
// OBSOLETE via lombok.Data
//    public String getFirstName() {
//        return firstName;
//    }
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//    public String getLastName() {
//        return lastName;
//    }
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//    public int getAge() {
//        return age;
//    }
//    public void setAge(int age) {
//        this.age = age;
//    }
//    
//    public Car getCar() {
//        return car;
//    }
//
//    public void setCar(Car car) {
//        this.car = car;
//    }

    @Override
    public String toString() {
        return "Person [firstName=" + firstName + ", lastName=" + lastName
                + ", age=" + age + "]";
    }
    
    public String getPersonDetails() {
        return this.toString() + "\n" + this.car.getCarDetails();
    }
}
