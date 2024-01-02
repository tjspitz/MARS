package com.returnship.training.java8;

// Varargs = variable args - can take a varying number of arguments
    // always comes at end of param list
public class VarArgsDemo {

    public static void main(String[] args) {
        show(100);
        show(12, 45);
        show(23, 56, 45);
    }

    // varargs still needs a type (int)
    // syntax to denote is (...)
    // provide a variable to reference the args (e.g. 'nums')
    public static void show(int... nums) {
        System.out.println("\nNumber of args: " + nums.length);
        System.out.println("Args are:");
        for (int num: nums) {
            System.out.println(num);
        }
    }
}
