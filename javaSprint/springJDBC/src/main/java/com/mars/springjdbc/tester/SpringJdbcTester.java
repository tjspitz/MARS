package com.mars.springjdbc.tester;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.mars.springjdbc.config.AppConfig;
import com.mars.springjdbc.dao.ProductDAO;
import com.mars.springjdbc.model.Product;

public class SpringJdbcTester {

    public static void main(String[] args) {

        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        ProductDAO productDao = context.getBean(ProductDAO.class);

        // GET ALL
        List<Product> products = productDao.getAll();
        System.out.println("All rows in the 'products' table:");
        for (Product product: products) {
            System.out.println(product);
        }

        // GET ONE
        try {
            // valid ids = 1 - 5
            Product product = productDao.getOneById(3);
            // fail demo
            // Product product = productDao.getOneById(12);
            System.out.println("Found this product:\n" + product);
            
        } catch (IndexOutOfBoundsException e) {
            System.out.println("No product found at that id...");
            e.printStackTrace();
        }

        // CREATE ONE
        // provide a 'burner' id, as the db will give an auto-inc one 
            // by virtue of the prepared query in ProductDAOImpl
            // could always refactor the constructor, too...
        Product product = new Product(-1, "mittens", "sikly smooth and toasty warm", "outerwear", 18, 37);
        boolean success = productDao.createOne(product);
        
        if (success == true) {
            System.out.println("New product added:\n" + product);
        } else {
            System.out.println("There was a problem adding " + product);
        }

        // UPDATE ONE
        // could also do it similar to createOne(), with some refactoring
            // but then our updateOne() would have to fetch a product in order to update it
        // by description
        System.out.println("Pre-update:");
        System.out.println(productDao.getOneById(1));
        
        System.out.println("\nUpdating...");
        System.out.println(productDao.updateOneDescById("soft, fluffy, and diamond-encrusted", 1));
        
        System.out.println("\nPost-update:");
        System.out.println(productDao.getOneById(1));
        
        System.out.println("\nResetting item...");
        productDao.updateOneDescById("soft, fluffy, and made for you", 1);
        // by price
        System.out.println("Pre-update:");
        System.out.println(productDao.getOneById(1));
        
        System.out.println("\nUpdating...");
        System.out.println(productDao.updateOnePriceById(75, 1));
        
        System.out.println("\nPost-update:");
        System.out.println(productDao.getOneById(1));
        
        System.out.println("\nResetting item...");
        productDao.updateOnePriceById(32, 1);
        // by stock
        System.out.println("Pre-update:");
        System.out.println(productDao.getOneById(1));
        
        System.out.println("\nUpdating...");
        System.out.println(productDao.updateOneStockById(99, 1));
        
        System.out.println("\nPost-update:");
        System.out.println(productDao.getOneById(1));
        
        System.out.println("\nResetting item...");
        productDao.updateOneStockById(100, 1);

        // DELETE ONE
        // make sure lines 44-51 are not commented out, for desired behavior
        System.out.println(productDao.deleteOneById(6)); // true
        System.out.println(productDao.deleteOneById(6)); // false

        ((AbstractApplicationContext) context).close();
    }
}
