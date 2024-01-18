package com.training.springboot.service;

import java.util.List;

import com.training.springboot.entity.User;

public interface UserService {

    public List<User> getUsers();
    public User getUserById(int id);
    public User getUserByFirstName(String name);
    public User postUser(User user);
    public void putUserById(int id, User user);
    public void deleteUserById(int id);
    
}
