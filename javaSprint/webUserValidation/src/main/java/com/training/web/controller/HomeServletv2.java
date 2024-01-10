package com.training.web.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.training.web.config.AppConfig;
import com.training.web.dao.LoginDAO;
import com.training.web.model.User;
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
public class HomeServletv2 extends HttpServlet {
    
    private static final long serialVersionUID = 1L;

    // ==== 1/10/24 ==== 
    List<User> users;

    
    LoginService service = new LoginService();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeServletv2() {
        super();
    }
    
    // ==== 1/10/24 ====
    public void init() {
        // TO-DO: finish building an array of user info
            // use the User & UserMapper, perhaps

        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        LoginDAO userDao = context.getBean(LoginDAO.class);
        users = userDao.getAll();
        
        ((AbstractApplicationContext) context).close();

    }
    // ==== ======= ====
    
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
        String path = request.getContextPath();
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        boolean valid = service.validate(username, password);
        
        request.setAttribute("user", username);
        
        // ==== 1/10/24 ====
        request.setAttribute("users", users);
        // ==== ======= ====

        if (valid) {
            rd = request.getRequestDispatcher("home.jsp");
//            response.sendRedirect(path + "/home");
            rd.forward(request, response);
        } else {
//            rd = request.getRequestDispatcher("badLogin.jsp");
            response.sendRedirect(path + "/badLogin");
        }
    }
}
