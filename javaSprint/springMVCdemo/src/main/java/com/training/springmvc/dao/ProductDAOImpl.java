package com.training.springmvc.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.training.springmvc.model.Product;
import com.training.springmvc.model.ProductMapper;

@Repository // <-- "specific component" that is the DAO layer - more specific
public class ProductDAOImpl implements ProductDAO {

    JdbcTemplate jdbcTemplate;
    
    // sql complete statements
    private final String SQL_GET_ALL = "SELECT * FROM products";
    private final String SQL_CREATE_PRODUCT = "INSERT INTO products "
            + "(name, description, category, price, stock) "
            + "VALUES(?, ?, ?, ?, ?)";
    
    // sql stubs
    private final String SQL_GET_ONE_STUB = "SELECT * FROM products ";
    private final String SQL_UPDATE_ONE_STUB = "UPDATE products SET ";
    private final String SQL_DELETE_ONE_STUB = "DELETE FROM products ";

    // sql stub extenders
    private final String UPDATE_ALL = "name=?, description=?, category=?, price=?, stock=? ";
    private final String UPDATE_DESC = "description=? WHERE ";
    private final String UPDATE_PRICE = "price=? ";
    private final String UPDATE_STOCK = "stock=? ";
    private final String BY_ID = "WHERE id=?";
//    private final String BY_NAME = "name=?";

    // java.mysql.Types
    private final int[] intArg = { 4 }; // INTEGER
    private final int[] stringArg = { 12 }; // VARCHAR (no such thing as 'STRING')

    @Autowired
    public ProductDAOImpl(DataSource ds) {
        jdbcTemplate = new JdbcTemplate(ds);
    }

    @Override
    public List<Product> getAll() {
        return jdbcTemplate.query(SQL_GET_ALL, new ProductMapper());
    }

    @Override
    public Product getOneById(int id) {
        String sql = SQL_GET_ONE_STUB + BY_ID;
        return jdbcTemplate
                   .query(sql, new Object[] { id }, intArg, new ProductMapper())
                   .get(0);
    }

    @Override
    public boolean createOne(Product product) {
        return jdbcTemplate.update(SQL_CREATE_PRODUCT, product.getName(),
                product.getDescription(), product.getCategory(),
                product.getPrice(), product.getStock()) > 0;
    }

    @Override
    public boolean updateOneById(int id, Product product) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_ALL + BY_ID;
        Object[] args = new Object[] { 
                product.getName(), product.getDescription(), product.getCategory(), 
                product.getPrice(), product.getStock(), id 
            };
        
        int[] argTypes = { 
                stringArg[0], stringArg[0], stringArg[0], 
                intArg[0], intArg[0], intArg[0] 
            };
        
        
        return jdbcTemplate.update(sql, args, argTypes) > 0;
    }
    
    @Override
    public boolean updateOneStockById(int stock, int id) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_STOCK + BY_ID;
        int[] argTypes = { intArg[0], intArg[0] };
        return jdbcTemplate.update(sql, new Object[] { stock, id }, argTypes) > 0;
    }

    @Override
    public boolean updateOnePriceById(int price, int id) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_PRICE + BY_ID;
        int[] argTypes = { intArg[0], intArg[0] };
        return jdbcTemplate.update(sql, new Object[] { price, id }, argTypes) > 0;
    }

    @Override
    public boolean updateOneDescById(String desc, int id) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_DESC + BY_ID;
        int[] argTypes = { stringArg[0], intArg[0] };
        return jdbcTemplate.update(sql, new Object[] { desc, id }, argTypes) > 0;
    }

    @Override
    public boolean deleteOneById(int id) {
        String sql = SQL_DELETE_ONE_STUB + BY_ID;
        return jdbcTemplate.update(sql, new Object[] { id }, intArg) > 0;
    }


}
