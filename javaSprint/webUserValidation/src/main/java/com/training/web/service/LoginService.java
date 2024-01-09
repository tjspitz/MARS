package com.training.web.service;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.training.web.config.AppConfig;
import com.training.web.dao.LoginDAO;
import com.training.web.model.User;

public class LoginService {

    public boolean validate(String username, String password) {
        
        boolean valid = false;
        
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        LoginDAO userDao = context.getBean(LoginDAO.class);
        List<User> users = userDao.getAll();
        
        for (User user: users) {
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                valid = true;
                break;
            }
        }
        ((AbstractApplicationContext) context).close();
        return valid;
    }
}
