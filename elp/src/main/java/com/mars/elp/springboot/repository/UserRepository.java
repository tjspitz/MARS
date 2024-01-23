package com.mars.elp.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mars.elp.springboot.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    
    public Optional<User> findByLastName(String name);
}
