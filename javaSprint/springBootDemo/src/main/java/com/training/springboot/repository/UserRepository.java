package com.training.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.training.springboot.entity.User;

// bare interface declaration that extends the JpaRepo
// provide the Table we're dealing with, and the TYPE of table's PK
public interface UserRepository extends JpaRepository<User, Integer>{

    public User findByFirstName(String name);
}
