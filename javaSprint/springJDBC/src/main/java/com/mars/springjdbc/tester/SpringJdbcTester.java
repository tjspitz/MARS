package com.mars.springjdbc.tester;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.mars.springjdbc.config.AppConfig;
import com.mars.springjdbc.dao.ProductDAO;
import com.mars.springjdbc.model.Product;

public class SpringJdbcTester {

    public static void main(String[] args) {
        
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        ProductDAO productDao = context.getBean(ProductDAO.class);
        
        // provide a 'burner' id, as the db will give an auto-inc one by virtue of the prepared query in ProductDAOImpl
        Product product = new Product(-1, "mittens", "sikly smooth and toasty warm", "outerwear", 18, 37);
        boolean success = productDao.createOne(product);
        
        if (success == true) {
            System.out.println("New product added:\n" + product);
        } else {
            System.out.println("There was a problem adding " + product);
        }

    }

}
