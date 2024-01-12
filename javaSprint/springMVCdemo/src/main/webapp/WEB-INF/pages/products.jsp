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
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${productDetails}" var="product">
                <tr>
                    <td><c:out value="${product.getId()}"/></td>
                    <td><c:out value="${product.getName()}"/></td>
                    <td><c:out value="${product.getDescription()}"/></td>
                    <td><c:out value="${product.getCategory()}"/></td>
                    <td><c:out value="${product.getPrice()}"/></td>
                    <td><c:out value="${product.getStock()}"/></td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</body>
</html>
