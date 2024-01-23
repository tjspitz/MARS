package com.mars.elp.springboot.service;

import java.util.List;

import com.mars.elp.springboot.entity.User;

public interface UserService {

    public List<User> getUsers();
    public User getUserById(int id);
    public User getUserByLastName(String name);
    public User postUser(User user);
    public void putUserById(int id, User user);
    public void deleteUserById(int id);
    
    // ==================== UTILITY ====================
    public List<User> postManyUsers(List<User> users);
}
