package com.returnship.training;

import java.util.Random;
import java.util.Scanner;

public class Counter {
  private static Scanner sc = new Scanner(System.in);
  private static byte luckyNum = makeRandomByte();
  private static short guessesLeft = 255;
  private static boolean winner = false;

  public static void playGame() {
    if (guessesLeft == 255) {
      System.out.println(counterGreeting());
    }
    while (winner == false) {
      // System.out.println(luckyNum);
      byte scVal = sc.nextByte();
      System.out.println("Input value is : " + scVal);
      System.out.println(checkInput(scVal));
    }
    sc.close();
  }

  private static String counterGreeting() {
    return "Welcome to the 'Guess My Byte' game! Please guess a number between -128 and 127.";
  }

  private static byte makeRandomByte() {
        Random random = new Random();
        byte lower = -128;
        byte upper = 127;
        short randomByte = (short) (random.nextInt(upper - lower) + lower);
        return (byte) randomByte;
  }

  private static String checkInput(byte num) {
    int guessDiff = Math.abs(num - luckyNum);
    if (num == luckyNum) {
      winner = true;
      return "Holy cannoli, Batman! You guessed it! The lucky number is indeed " + luckyNum + "!";
    } else if (guessesLeft < 245) {
      return "Still incorrect... here's a hint: your last guess was only off by " + guessDiff + "!";
    }
    else if (guessesLeft < 1) {
      return "Oh dear, you've run out of guesses. Kudos on guessing 255 times, though!";
    } else {
      guessesLeft -= 1;
      return "Tough luck, Robin, that's incorrect! Don't worry, though, you still have " + guessesLeft + " guesses!";
    }
  }
}
