package com.training.springmvc.dao;

import java.util.List;

import com.training.springmvc.model.Product;

public interface ProductDAO {

    List<Product> getAll();
    Product getOneById(int id);
    boolean createOne(Product product);
    boolean updateOneDescById(String desc, int id);
    boolean updateOnePriceById(int price, int id);
    boolean updateOneStockById(int stock, int id);
    // could add more updates by name
        // or update by taking an entire product
    boolean deleteOneById(int id);
    
}
