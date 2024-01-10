<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- 1/10/24 - imports in a .jsp file -->
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.training.web.model.User" %>
<!-- get a lib so we don't have to use Scriptlets to make the table -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%-- <%@ taglib prefix="c" uri="jakarta.tags.core" %> --%>
<!-- ==== ==== ==== ==== ==== === -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Success</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Current session belongs to: ${user}</p>
    
    <!-- 1/10/24  - scriptlet generating a list of user info -->
    <!-- (removed for now) -->
    <!-- the no-scriptlet version... -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PASSWORD</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${users}" var="user">
                <tr>
                    <td><c:out value="${user.getId()}"/></td>
                    <td><c:out value="${user.getUsername()}"/></td>
                    <td><c:out value="${user.getPassword()}"/></td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <!-- ==== ==== ==== ==== ==== ==== -->
</body>
</html>
