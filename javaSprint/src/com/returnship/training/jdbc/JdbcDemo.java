package com.returnship.training.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcDemo {

    public static void main(String[] args) {
        Connection con = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/mars_sept";
            String user = "root";
            String pword = "";

            con = DriverManager.getConnection(url, user, pword);
            // if (con != null) {
                // System.out.println("Connection succeeded...");
                // con.close();
            // } else {
                // System.out.println("Connection error...");
            // }

            // query string stub
            String selectQuery = "SELECT * FROM products";
            ResultSet products = null;

            // hard-coded query, stub only
            Statement stmt = con.createStatement();
            products = stmt.executeQuery(selectQuery);

            // iterate thru the result set (all the rows fetched y the query string)
            // for each row,
                // print the id (col 1) and the name (col 2),
                // and the description (col 3)
            while (products.next()) {
                System.out.println(products.getInt(1) + ": " + products.getString(2));
                System.out.println(products.getString(3) + "\n");
                // all three products
            }

            // use a prepared statement for dynamic querying
            PreparedStatement pstmt = con.prepareStatement(selectQuery + " where id=?");
            pstmt.setInt(1, 2);
            products = pstmt.executeQuery();

            while (products.next()) {
                System.out.println(products.getInt(1) + ": " + products.getString(2));
                System.out.println(products.getString(3) + "\n");
                // 2: shoes
                // awesome sneakers for your awesome feet
            }

            String insertQuery = "INSERT INTO products "
                    + "(name, description, category, price, stock) "
                    + "VALUES(?, ?, ?, ?, ?)";
            PreparedStatement pstmt2 = con.prepareStatement(insertQuery);
            pstmt2.setString(1, "t-shirt");
            pstmt2.setString(2, "a shirt that is roughly shaped like the letter T");
            pstmt2.setString(3, "shirts");
            pstmt2.setInt(4, 22);
            pstmt2.setInt(5, 40);

            int i = pstmt2.executeUpdate();
            System.out.println(i + " records successfully inserted!");

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                con.close();
                System.out.println("Connection closed...");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
