package com.returnship.training.abstractPractice;

public abstract class Account {
    private Customer customer;
    private double balance;
    private int accountNumber;
    
    Account(int acctNo, double balance, Customer cust) {
        this.accountNumber = acctNo;
        this.balance = balance;
        this.customer = cust;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }
    
    public abstract boolean withdraw(double amount);
}
