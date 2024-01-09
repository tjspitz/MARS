<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- scriptlet, aka write some java, ditch the ${name},
	   and write <%-- <% =name %> --%> -->
    <%-- <% String name = (String) request.getAttribute("name"); %> --%>
    <h1>Hello to ${name}, from the home.jsp file...</h1>
    <p>Your credentials are ${isValid}. Please ${isValidMsg}.</p>
</body>
</html>

<!-- Scriptlet --> <%-- <% ... %> --%>
<!-- Declaration --> <%-- <%!... %> --%>
<!-- Expression --> <%-- <%=... %> --%>
<!-- implicit jsp objects -->