package com.mars.springjdbc.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.mars.springjdbc.model.Product;
import com.mars.springjdbc.model.ProductMapper;

@Component // auto-detect/recognize as a Bean
public class ProductDAOImpl implements ProductDAO {

    // need whenever SpringJdbc is present
    JdbcTemplate jdbcTemplate;

    private final String SQL_GET_ALL = "SELECT * FROM products";
    private final String SQL_GET_ONE_STUB = "SELECT * FROM products WHERE ";
    private final String SQL_CREATE_PRODUCT = "INSERT INTO products "
            + "(name, description, category, price, stock) "
            + "VALUES(?, ?, ?, ?, ?)";
    private final String SQL_UPDATE_ONE_STUB = "UPDATE products SET ";
    private final String SQL_DELETE_ONE_STUB = "DELETE FROM products WHERE ";

    // sql stub extenders
    private final String UPDATE_DESC = "description=? WHERE ";
    private final String UPDATE_PRICE = "price=? WHERE ";
    private final String UPDATE_STOCK = "stock=? WHERE ";
    private final String BY_ID = "id=?";
//    private final String BY_NAME = "name=?";

    // java.mysql.Types
    private final int[] intArgType = { 4 }; // INTEGER
    private final int[] stringArgType = { 12 }; // VARCHAR (no such thing as 'STRING')

    @Autowired
    public ProductDAOImpl(DataSource ds) {
        jdbcTemplate = new JdbcTemplate(ds);
    }

    @Override
    public List<Product> getAll() {
        // .queryForList() => typically used to retrieve a list of objects for
        // each row,
        // was trying to map the entire row to a single Product object
        // return jdbcTemplate.queryForList(SQL_GET_ALL, [all the col names[);
        // use .query() method with RowMapper to map the result set to a list of
        // objects
        return jdbcTemplate.query(SQL_GET_ALL, new ProductMapper());
    }

    @Override
    public Product getOneById(int id) {
        String sql = SQL_GET_ONE_STUB + BY_ID;

        // fun w/ new methods - more 'sanitized' way to query & pass in placeholder args
        // 1) sql statement w/ ? placeholder,
        // 2) id for the placeholder,
        // 3) sql type of the id arg
        // 4) RowMapper
        // get the only item in the List
        return jdbcTemplate
                   .query(sql, new Object[] { id }, intArgType, new ProductMapper())
                   .get(0);

    }

    @Override
    public boolean createOne(Product product) {
        return jdbcTemplate.update(SQL_CREATE_PRODUCT, product.getName(),
                product.getDescription(), product.getCategory(),
                product.getPrice(), product.getStock()) > 0;
        // .update() returns int, 'force' a boolean w/ this
    }

    @Override
    // could refactor to simply decrement the stock (upon a purchase)
    public boolean updateOneStockById(int stock, int id) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_STOCK + BY_ID;
        int[] argTypes = { intArgType[0], intArgType[0] };
        return jdbcTemplate.update(sql, new Object[] { stock, id }, argTypes) > 0;
    }

    @Override
    public boolean updateOnePriceById(int price, int id) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_PRICE + BY_ID;
        int[] argTypes = { intArgType[0], intArgType[0] };
        return jdbcTemplate.update(sql, new Object[] { price, id }, argTypes) > 0;
    }

    @Override
    public boolean updateOneDescById(String desc, int id) {
        String sql = SQL_UPDATE_ONE_STUB + UPDATE_DESC + BY_ID;
        int[] argTypes = { stringArgType[0], intArgType[0] };
        return jdbcTemplate.update(sql, new Object[] { desc, id }, argTypes) > 0;
    }

    @Override
    public boolean deleteOneById(int id) {
        String sql = SQL_DELETE_ONE_STUB + BY_ID;
        return jdbcTemplate.update(sql, new Object[] { id }, intArgType) > 0;
    }

}
