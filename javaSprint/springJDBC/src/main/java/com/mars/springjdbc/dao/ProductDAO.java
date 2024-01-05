package com.mars.springjdbc.dao;

import java.util.List;

import com.mars.springjdbc.model.Product;

public interface ProductDAO {

    Product getOneById(int id);
    List<Product> getAll();
    boolean deleteOneById(int id);
    boolean updateOne(int id);
    boolean createOne(Product product);
}
