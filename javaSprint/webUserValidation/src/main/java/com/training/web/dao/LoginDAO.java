package com.training.web.dao;

import java.util.List;

import com.training.web.model.User;

public interface LoginDAO {

    List<User> getAll();
    User getOneById(int id);
    boolean createOne(User user);
    boolean updateOnePasswordById(String password, int id);
    boolean deleteOneById(int id);
}
