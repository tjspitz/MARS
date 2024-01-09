package com.training.web.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class SeedDb {

    private final JdbcTemplate jdbcTemplate;
    
    public void main(String[] args) {
        seedDatabase();
    }

    @Autowired
    public SeedDb(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    public void seedDatabase() {
        String dropTable = "DROP TABLE IF EXISTS users CASCADE;";
        String createTable = "CREATE TABLE users("
                    + "id INTEGER NOT NULL AUTO_INCREMENT, "
                    + "username VARCHAR(50) NOT NULL, "
                    + "password VARCHAR(50) NOT NULL, "
                    + "PRIMARY KEY(id)"
                + ");";
        String insertMany = "INSERT INTO users "
                + "(username, password) "
                + "VALUES "
                + "(bob, bobbseron), "
                + "(kat, katterson), "
                + "(bill, billerson), "
                + "(tom, tommerson), "
                + "(santa claus, hohoho);";
        
        jdbcTemplate.execute(dropTable);
        jdbcTemplate.execute(createTable);
        jdbcTemplate.execute(insertMany);
    }
    

}
/*
USE mars_sept;

-- create a product table with cols:
-- -- id(pk), username, password
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id INTEGER NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO users 
(username, password) 
VALUES 
(bob, bobbseron),
(kat, katterson),
(bill, billerson),
(tom, tommerson),
(santa claus, hohoho);

SELECT * FROM users;
*/
