package com.returnship.training.abstractPractice;

public class CheckingAccount extends Account {
    private double minBalance;

    public CheckingAccount(int acctNo, double balance, double min, Customer cust) {
        super(acctNo, balance, cust);
        this.minBalance = min;
    }

    public double getMinBalance() {
        return minBalance;
    }

    public void setMinBalance(double minBalance) {
        this.minBalance = minBalance;
    }

    @Override
    public boolean withdraw(double amount) {
        double remainder = this.getBalance() - amount;
        if (remainder > minBalance) {
            this.setBalance(remainder);
            return true;
        }
        return false;
    }
}
