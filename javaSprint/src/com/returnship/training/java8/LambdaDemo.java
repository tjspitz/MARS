package com.returnship.training.java8;

import java.util.function.Predicate;

public class LambdaDemo {

    public static void main(String[] args) {
        // basically a JS arrow function, bound to the variable (with proper FI type)
        FunctionalInterface obj = (m, n) -> m + n;
        System.out.println("Sum of 22 and 28 is: " + obj.sum(22, 28));

        Predicate<Integer> pred = x -> x % 2 == 0;
        if (pred.test(34) == true) {
            System.out.println("The arg you passed is even!");
        } else {
            System.out.println("The arg you passed is odd!");
        }
    }

}
