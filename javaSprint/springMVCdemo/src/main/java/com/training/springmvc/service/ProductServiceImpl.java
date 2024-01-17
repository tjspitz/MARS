package com.training.springmvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.springmvc.dao.ProductDAO;
import com.training.springmvc.model.Product;

@Service
public class ProductServiceImpl implements ProductService {
    
    @Autowired
    private ProductDAO productDao;
    
    @Override
    public List<Product> getAll() {
        return productDao.getAll();
    }

    @Override
    public Product getOneById(int id) {
        return productDao.getOneById(id);
    }

    @Override
    public boolean createOne(Product product) {
        return productDao.createOne(product);
    }

    @Override
    public boolean updateOneById(int id, Product product) {
        return productDao.updateOneById(id, product);
    }

    @Override
    public boolean deleteOneById(int id) {
        return productDao.deleteOneById(id);
    }

}
