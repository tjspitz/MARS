package com.training.web.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.training.web.model.User;
import com.training.web.model.UserMapper;

@Component
public class LoginDAOImpl implements LoginDAO {

    JdbcTemplate jdbcTemplate;

    // sql statements
    private final String SQL_GET_ALL = "SELECT * FROM users";
    private final String SQL_CREATE_USER = "INSERT INTO users "
            + "(username, password) VALUES(?, ?)";
    // sql stubs
    private final String SQL_GET_ONE_STUB = "SELECT * FROM users WHERE ";
    private final String SQL_UPDATE_ONE_STUB = "UPDATE users SET password=? WHERE ";
    private final String SQL_DELETE_ONE_STUB = "DELETE FROM users WHERE ";

    // sql stub extenders
    private final String BY_ID = "id=?";

    // java.mysql.Types
    private final int[] intArgType = { 4 }; // INTEGER
    private final int[] stringArgType = { 12 }; // VARCHAR
    
    @Autowired
    public LoginDAOImpl(DataSource ds) {
        jdbcTemplate = new JdbcTemplate(ds);
    }

    @Override
    public List<User> getAll() {
        return jdbcTemplate.query(SQL_GET_ALL, new UserMapper());
    }

    @Override
    public User getOneById(int id) {
        String sql = SQL_GET_ONE_STUB + BY_ID;
        return jdbcTemplate
                   .query(sql, new Object[] { id }, intArgType, new UserMapper())
                   .get(0);
    }

    @Override
    public boolean createOne(User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        int[] argTypes = { stringArgType[0], stringArgType[0] };
        
        return jdbcTemplate.update(SQL_CREATE_USER, 
                new Object[] { username, password }, 
                argTypes) > 0;
    }

    @Override
    public boolean updateOnePasswordById(String password, int id) {
        String sql = SQL_UPDATE_ONE_STUB + BY_ID;
        int[] argTypes = { stringArgType[0], intArgType[0] };
        return jdbcTemplate.update(sql, new Object[] { password, id }, argTypes) > 0;
    }

    @Override
    public boolean deleteOneById(int id) {
        String sql = SQL_DELETE_ONE_STUB + BY_ID;
        return jdbcTemplate.update(sql, new Object[] { id }, intArgType) > 0;
    }


}
