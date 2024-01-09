<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Failure</title>
</head>
<body>
    <h1>Oh noes!</h1>
    <p>There was a problem logging you in...</p>
    <ul>
        <li>User named "${user}" might not have an account</li>
        <li>You may have entered an incorrect password for user named "${user}"</li>
    </ul>
    <a href="/webUserValidation">Try logging in again</a>
</body>
</html>