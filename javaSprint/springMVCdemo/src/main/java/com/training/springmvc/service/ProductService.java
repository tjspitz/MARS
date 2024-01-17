package com.training.springmvc.service;

import java.util.List;

import com.training.springmvc.model.Product;

public interface ProductService {

    public List<Product> getAll();
    public Product getOneById(int id);
    public boolean createOne(Product product);
    public boolean updateOneById(int id, Product product);
    // could add more updates by name
        // or update by taking an entire product
    
    // perhaps we do not want the ability to delete a product from the UI
        // this would be an example of when layers differ 
        // e.g. ProductService Interface vs. ProductDAO Interface
            // (and their implementations)
    public boolean deleteOneById(int id);
}
