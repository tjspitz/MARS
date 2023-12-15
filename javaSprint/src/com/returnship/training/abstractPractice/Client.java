package com.returnship.training.abstractPractice;

import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // NOTE: .nextLine() can help ensure hitting 'enter' does not skip additional .next()s
        // Customer inputs
        System.out.println("Let's set up your account!");
        
        System.out.println("Please enter your Name:");
        String name = sc.nextLine();
        
        System.out.println("Please enter your email address:");
        String email = sc.next();
        
        System.out.println("Please enter an id number, we are too lazy to assign you one:");
        int id = sc.nextInt();
        
        Customer cust1 = new Customer(id, name, email);
        
        // Account inputs
        System.out.println("So far so good! Now some account details...");
        System.out.println("Please enter your account type:");
        String type = sc.next();
        
        System.out.println("Please enter your starting balance:");
        double balance = sc.nextDouble();
        
        System.out.println("Please enter your account number:");
        int accountNo = sc.nextInt();
        
        Account acct1 = AccountFactory.getAccount(type, id, balance, accountNo, cust1);
        
        // withdraw some money
        System.out.println("Excellent! Let's assume you want to withdraw some money.");
        System.out.println("You have $" + acct1.getBalance() + " available.");
        System.out.println("Please enter an amount to withdraw:");
        double amount = sc.nextDouble();
        sc.close();
        
        if (acct1.withdraw(amount)) {
            System.out.println("Awesome sauce! Your remaining balance is now $" + acct1.getBalance() + ".");
        } else {
            System.out.println("Oh noes, you cannot exceed your minimum balance!");
        }
    }
}
