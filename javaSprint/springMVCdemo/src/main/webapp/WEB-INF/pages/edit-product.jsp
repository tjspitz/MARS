<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html xmlns:th="https://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <c:set value="${product.getId()}" var="id" />
    <c:set value="${product.getName()}" var="name" />
    <c:set value="${product.getDescription()}" var="desc" />
    <c:set value="${product.getCategory()}" var="cat" />
    <c:set value="${product.getPrice()}" var="price" />
    <c:set value="${product.getStock()}" var="stock" />

    <h1>Editing ${name}...</h1>    
    <form
        action="/springMVCdemo/products/edit/${id}" 
        th:action="@{/springMVCdemo/products/edit/${id}}" 
        th:object="@{newProduct}"
        method="POST"
    >
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${id}</td>
                    <td>
                        <input 
                            name="name" 
                            type="text" 
                            value="${name}"
                            th:field="{newProduct.name}" 
                        />
                    </td>
                    <td>
                        <input 
                            name="description" 
                            type="text" 
                            value="${desc}"
                            th:field={newProduct.description} 
                        />
                    </td>
                    <td>
                        <input 
                            name="category" 
                            type="text" 
                            value="${cat}"
                            th:field={newProduct.category} 
                        />
                    </td>
                    <td>
                        <input 
                            name="price" 
                            type="number" 
                            value="${price}"
                            th:field={newProduct.price} 
                        />
                    </td>
                    <td>
                        <input 
                            name="stock" 
                            type="number" 
                            value="${stock}" 
                            th:field={newProduct.stock}        
                        />
                    </td>
                </tr>            
            </tbody>
        </table>
        <hr>
        
        <input type="submit" value="Submit Changes" />
        <br>
        <a href="/springMVCdemo/products" >Exit without saving</a>
    </form>
</body>
</html>