package com.training.web.controller;

import java.io.IOException;
import java.io.PrintWriter;

import com.training.web.service.LoginService;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HomeServlet
 */
@WebServlet("/home")
public class HomeServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;
    LoginService service = new LoginService();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeServlet() {
        super();
    }
    

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
        rd.forward(request, response);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher rd;
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        boolean valid = service.validate(username, password);
        request.setAttribute("user", username);

        if (valid == true) {
            rd = request.getRequestDispatcher("home.jsp");            
        } else {
            rd = request.getRequestDispatcher("badLogin.jsp");
        }
        rd.forward(request, response);
    }

}
