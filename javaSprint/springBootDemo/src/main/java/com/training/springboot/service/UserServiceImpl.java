package com.training.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.springboot.entity.User;
import com.training.springboot.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repository;
    
    @Override
    public List<User> getUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(int id) {
        // 'Optional' = "we're going to return the thing we want, or nothing at all"
        Optional<User> user = repository.findById(id);
        
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }
    
    @Override
    public User getUserByFirstName(String name) {
        return repository.findByFirstName(name);
    }
    
    @Override
    public User postUser(User user) {
        return repository.save(user);
    }

    @Override
    public void putUserById(int id, User user) {
        Optional<User> preUpdateUser = repository.findById(id);
        
        if (preUpdateUser.isPresent()) {
            User postUpdateUser = preUpdateUser.get();
            postUpdateUser.setFirstName(user.getFirstName());
            postUpdateUser.setLastName(user.getLastName());
            postUpdateUser.setAge(user.getAge());
            postUpdateUser.setGender(user.getGender());
            
            repository.save(postUpdateUser);
        } else {
            System.out.println("User not found; cannot update.");
        }
    }

    @Override
    public void deleteUserById(int id) {
        Optional<User> user = repository.findById(id);
        
        if (user.isPresent()) {
            repository.deleteById(id);            
        } else {
            System.out.println("User not found; cannot delete.");
        }
    }



}
