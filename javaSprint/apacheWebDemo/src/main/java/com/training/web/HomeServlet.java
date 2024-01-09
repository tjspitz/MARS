package com.training.web;

import java.io.IOException;
import java.io.PrintWriter;

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
    String msg;
    
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    // is always invoked
    public void init() {
        msg = "Hello";
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // bad V in MVC - manipulating the View right here
//        response.setContentType("text/html");
//        PrintWriter out = response.getWriter();
//        out.print("<html><body><h1>" + msg + " from Servlet...</h1></body></html>");
        
        // moving the V into home.jsp
            // setting a key name to retrieve the val in home.jsp
        request.setAttribute("name", msg);
        RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
        rd.forward(request, response);
        
        // using .sendRedirect() - appends .jsp to the url, though
            // use-case: static page
        response.sendRedirect("home.jsp");
        
//        response
//            .getWriter()
//            .append("Served at: ")
//            .append(request.getContextPath());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userValid = "Captain Spaghettipants";
        String passwordValid = "yargh";
        
        // get the form values from the login form at root url
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String isValid = "valid";
        String isValidMsg;
        
        if (username.equals(userValid) && password.equals(passwordValid)) {
            isValidMsg = "enjoy using this brilliantly designed UI";
        } else {
            isValid = "not " + isValid;
            isValidMsg = "try logging in again so you can access super-awesome content";
        }
        
        // set them into the .jsp like we did in doGet()
        request.setAttribute("name", username);
        request.setAttribute("password", username);
        request.setAttribute("isValid", isValid);
        request.setAttribute("isValidMsg", isValidMsg);
        
        
        RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
        
        rd.forward(request, response);
    }

}
