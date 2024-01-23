package com.mars.elp.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mars.elp.springboot.entity.Address;
import com.mars.elp.springboot.entity.User;
import com.mars.elp.springboot.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired UserRepository repository;
    
    @Override
    public List<User> getUsers() { // all users fetched
        return repository.findAll();
    }

    @Override
    public User getUserById(int id) { // a particular User is fetched by ID
        Optional<User> user = repository.findById(id);
        return user.isPresent() ? user.get() : null;
    }

    @Override
    public User getUserByLastName(String lastName) { // a particular User is fetched by LAST NAME
        Optional<User> user = repository.findByLastName(lastName);
        return user.isPresent() ? user.get() : null;
    }

    @Override
    public User postUser(User user) { // a new User is created, with an Address association
        return repository.save(user);
    }

    @Override
    public void putUserById(User user) {
        Optional<User> preUpdateUser = repository.findById(user.getId());

        if (preUpdateUser.isPresent()) {
            User postUpdateUser = preUpdateUser.get();
            Address postUpdateAddress = postUpdateUser.getAddress();
            
            postUpdateUser.setFirstName(user.getFirstName());
            postUpdateUser.setLastName(user.getLastName());
            // change registration date? maybe later
            postUpdateUser.setPhone(user.getPhone());
            postUpdateUser.setPhoto(user.getPhoto());
            postUpdateUser.setEmail(user.getEmail());
            // change password? maybe later
            
            postUpdateAddress.setStreet(user.getAddress().getStreet());
            postUpdateAddress.setCity(user.getAddress().getCity());
            
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

    // ==================== UTILITY ====================
    @Override
    public List<User> postManyUsers(List<User> users) {
        return repository.saveAll(users);
    }

}
