<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns:th="https://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Add new Product</title>
</head>
<body>
    <h1>Add a new product</h1>
    <p>Please enter product details below</p>
    <hr>
    
    <form 
        action="/springMVCdemo/products/add" 
        th:action="@{/springMVCdemo/products/add}" 
        th:object="@{product}"
        method="post" 
    >   
        <label for="name">
            Product Name
            <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                th:field="{product.name}" 
            />            
        </label>
        <br>
        
        <label for="description">
            Product Description
            <input 
                name="description" 
                type="text" 
                placeholder="Description" 
                th:field={product.description} 
            />            
        </label>
        <br>
        
        <label for="category">
            Product Category
            <input 
                name="category" 
                type="text" 
                placeholder="Category" 
                th:field={product.category} 
            />            
        </label>
        <br>
        
        <label for="price">
            Price (per unit)
            $<input 
                name="price" 
                type="number" 
                th:field={product.price} 
            />            
        </label>
        <br>
        
        <label for="stock">
            Stock (total units)
            <input 
                name="stock" 
                type="number" 
                th:field={product.stock} 
            />            
        </label>
        <br>
        
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
    </form>
</body>
</html>
