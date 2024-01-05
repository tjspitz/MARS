package com.mars.springjdbc.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

// map the db result set (query return) into a nicely formatted object
public class ProductMapper implements RowMapper<Product>{

    @Override
    public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
        Product product = new Product();
        // rs.get[Thing] can also get by row's col num
        product.setId(rs.getInt("id"));
        product.setName(rs.getString("name"));
        product.setDescription(rs.getString("description"));
        product.setCategory(rs.getString("category"));
        product.setPrice(rs.getInt("price"));
        product.setStock(rs.getInt("stock"));
        
        return product;
    }

    
}
