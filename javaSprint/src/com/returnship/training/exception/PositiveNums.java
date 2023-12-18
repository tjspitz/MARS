package com.returnship.training.exception;

import java.util.Scanner;

public class PositiveNums {
    private static String msg = "Thanks for playing!";

    public static void playGame() {
        Scanner sc = new Scanner(System.in);
        int[] nums = new int[10];
        int num = 0;

        System.out.println("Welcome! Please enter POSITIVE numbers...");

        try {
            for (int i = 0; i < nums.length; i++) {
                System.out
                        .println("Provide a value for entry #" + (i + 1) + ":");
                num = sc.nextInt();

                if (num < 0) {
                    String errMsg = "\"Negative numbers are not allowed, and "
                            + num + " is a negative number!\"";
                    throw new NegativeNumberInputException(errMsg);
                }
                nums[i] = num;
            }
            System.out.println("Awesome sauce! Your numbers are:");
            for (int i = 0; i < nums.length; i++) {
                System.out.println("Entry #" + (i + 1) + ": " + nums[i]);
            }
        } catch (NegativeNumberInputException e) {
            System.out.println("Oh noes! The following error has ocurred:");
            System.out.println(e.getMessage());
            e.printStackTrace();
            msg = "Better luck next time!";
        } finally {
            sc.close();
            System.out.println(msg);
        }
    }
}
