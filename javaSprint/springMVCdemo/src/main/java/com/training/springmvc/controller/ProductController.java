package com.training.springmvc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.training.springmvc.model.Product;
import com.training.springmvc.service.ProductService;

@Controller
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;
    
    // get all products (GET)
    @GetMapping({ "", "/" })
    public String getAllDetails(ModelMap map) {
        map.addAttribute("productDetails", productService.getAll());
        return "products";
    }
    
    // get one product (GET)
    @GetMapping("/{id}")
    // if we had a 'get by name' method in the DAO & Service...
        // we could apply this logic to fetch by product name
    public String getOneDetails(@PathVariable(name = "id") int id, ModelMap map) {
        List<Product> oneProduct = new ArrayList<Product>();
        oneProduct.add(productService.getOneById(id));
        map.addAttribute("productDetails", oneProduct);
        return "products";
    }
    
    // add a new product (POST)
    @GetMapping("/add")
    public String addProductPage() {
        return "add-product";
    }
    
    @PostMapping("/add")
    public String addProductSubmit(Product product) {
        // 'redirect:' to relative url keyword...
        if (productService.createOne(product)) {
            return "redirect:/products";
        } else {
            return "product-error";
        }
        
    }
    
    // edit a product (should be PUT)
    @GetMapping("/edit/{id}")
    public String editOnePage(@PathVariable(name = "id") int id, ModelMap map) {
        Product oneProduct = productService.getOneById(id);
        map.addAttribute("product", oneProduct);
        return "edit-product";
    }
    
    @PostMapping("/edit/{id}")
    public String editOneSubmit(@PathVariable(name = "id")int id, Product product) {
        if (productService.updateOneById(id, product)) {
            return "redirect:/products";
        } else {
            return "product-error";
        }
    }
    
    @GetMapping("/delete/{id}")
    public String deleteOneAndRedirect(@PathVariable(name = "id") int id) {
        if (productService.deleteOneById(id)) {
            return "redirect:/products";
        } else {
            return "product-error";
        }
    }
}

/*
  Why would we have a single product mapped to the same route as all the products?
  Because the .jsp file that exists expects List<Product>, so why not just...
  return a List<User> with a single element in it, and make use of the existing products.jsp
  rather than writing another page to handle a single product
*/