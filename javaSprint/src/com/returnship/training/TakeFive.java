package com.returnship.training;

import java.util.Scanner;

public class TakeFive {
    // take 5 inputs (numbers) from the user and create an array of 5 elements
    // filter out all the even numbers and put them in a new array

    public static void playGame() {
        int[] userNums = new int[5];
        int limit = 0;
        int evenNumsLength = 0;
        int evenNumsIdx = 0;
        Scanner sc = new Scanner(System.in);

        System.out.println(greeting());

        // collect user's numbers & determine length of even nums arr
        while (limit < 5) {
            System.out.println("Please enter input #" + (limit + 1) + "...");
            int nextNum = sc.nextInt();

            if (nextNum % 2 == 0) {
                evenNumsLength ++;
            }

            userNums[limit] = nextNum;
            limit ++;
        }
        sc.close();

        // init an even nums arr of correct length
        int[] evenNums = new int[evenNumsLength];

        // print the original nums & add even nums to new arr
        System.out.println("Your inputs are: ");
        for (int i = 0; i < userNums.length; i ++) {
            System.out.println("Input #" + (i + 1) + ": " + userNums[i]);
            if (userNums[i] % 2 == 0) {
                evenNums[evenNumsIdx] = userNums[i];
                evenNumsIdx ++;
            }
        }

        // print arr of even nums
        System.out.println("Your even-numbered inputs are: ");
        for (int j = 0; j < evenNums.length; j ++) {
            System.out.println(evenNums[j]);
        }

        System.out.println(goodbye());
    }

    private static String greeting() {
        return "Welcome to the 'Take Five' game! Please enter a number...";
    }

    private static String goodbye() {
        return "Thanks for playing! Bye!";
    }
}
