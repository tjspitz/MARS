package com.training.springmvc.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Product {

    private int id;
    private String name;
    private String description;
    private String category;
    private int price;
    private int stock;
    
}
