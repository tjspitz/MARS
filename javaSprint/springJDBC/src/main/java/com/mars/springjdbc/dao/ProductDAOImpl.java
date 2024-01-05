package com.mars.springjdbc.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.mars.springjdbc.model.Product;

@Component // auto-detect/recognize as a Bean
public class ProductDAOImpl implements ProductDAO{
    
    // need whenever SpringJdbc is present
    JdbcTemplate jdbcTemplate;
    
    private final String SQL_CREATE_PRODUCT=
            "INSERT INTO products (name, description, category, price, stock) "
            + "VALUES(?, ?, ?, ?, ?)";
    
    @Autowired
    public ProductDAOImpl(DataSource ds) {
        jdbcTemplate = new JdbcTemplate(ds);
    }

    @Override
    public Product getOneById(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Product> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean deleteOneById(int id) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean updateOne(int id) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean createOne(Product product) {
        return jdbcTemplate.update(
                SQL_CREATE_PRODUCT, 
                product.getName(),
                product.getDescription(),
                product.getCategory(),
                product.getPrice(),
                product.getStock()) 
                > 0; // .update() returns int, 'force' a boolean w/ this
    }

}
