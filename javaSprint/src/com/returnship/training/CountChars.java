package com.returnship.training;

import java.util.Scanner;

public class CountChars {
    // Count the number of repeating characters in a given string 
    // if the string is "Hello" output should be : H-1, e-1, l-2, o-1
    
    public static void getAndSetIO() {
        System.out.println("Please enter a word to see its character count...");
        Scanner sc = new Scanner(System.in);
        String input = sc.next();
        sc.close();
        
        String countedChars = countChars(input);
        System.out.println(countedChars);
        System.out.println("Thanks for counting with me!");
    }
    
    // init a result String that will get reassigned SO MANY TIMES
    // init a char arr for each char, of length = string length
    // init a char arr for 'checked' chars
    // init a current count num to 1
    // iterate thru string, setting each el into char arr
    // iterate thru each char in an arr of chars
        // if current is already in the 'checked' arr
            // skip this iteration
        // nest a loop that checks current against each following char
            // if current is same as nested current
                // increment the current char count
        // add current char to the 'checked' arr
        // print combo of current char, hyphen, and current char count
        // reset current char count (for next iteration)
    // return the string, less the final 2 chars (", ")
    
    private static String countChars(String str) {
        String result = new String("");
        char[] chars = new char[str.length()];
        char[] checkedChars = new char[str.length()];
        byte curCount = 1;
        
        for (int i = 0; i < str.length(); i ++) {
            chars[i] = str.charAt(i);
        }
        
        Outer: for (int j = 0; j < chars.length; j ++) {
            for (char c: checkedChars) {
                if (c == chars[j]) {
                    continue Outer;
                }
            }
            for (int k = j + 1; k < chars.length; k ++) {
                if (chars[j] == chars[k]) {
                    curCount ++;
                }
            }
            checkedChars[j] = chars[j];
            result = result + chars[j] + "-" + curCount + ", ";
            curCount = 1;
        }
        return result.substring(0, result.length() - 2);
    }
}
