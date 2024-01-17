<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Details</title>
</head>
<body>
    <header>
        <h1>Product Details</h1>
    </header>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th colspan=2>Actions</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${productDetails}" var="product">
                <c:set value="${product.getId()}" var="id" />
                <c:set value="${product.getName()}" var="name" />
                <c:set value="${product.getDescription()}" var="desc" />
                <c:set value="${product.getCategory()}" var="cat" />
                <c:set value="${product.getPrice()}" var="price" />
                <c:set value="${product.getStock()}" var="stock" />
                
                <tr>
                    <td><c:out value="${id}"/></td>
                    <td><c:out value="${name}"/></td>
                    <td><c:out value="${desc}"/></td>
                    <td><c:out value="${cat}"/></td>
                    <td><c:out value="${price}"/></td>
                    <td><c:out value="${stock}"/></td>
                    <td>
                        <a href="<c:url value="/products/edit/${id}" />">
                            Edit
                        </a>
                    </td>
                    <td>
                        <a href="<c:url value="/products/delete/${id}" />">
                            Delete
                        </a>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <hr>
    <a href="/springMVCdemo/products/add">Add a new product!</a>
</body>
</html>
