package com.returnship.training.abstractPractice;

public class AccountFactory {
    public static Account getAccount(String type, int acctNo, double balance, double min, Customer cust) {
        if (type.equalsIgnoreCase("savings")) {
            return new SavingsAccount(acctNo, balance, min, cust);
        }
        // could add more conditions if we felt like it...
        return new CheckingAccount(acctNo, balance, min, cust);
    }
}
