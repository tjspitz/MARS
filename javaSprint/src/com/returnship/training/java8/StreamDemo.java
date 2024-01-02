package com.returnship.training.java8;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

// Stream API - continuous processing of a collection (more efficiently)
    // Intermediate (can be multiple) operations
    // Terminal (end Stream) operation (only 1)
    // Method reference - obj::method

public class StreamDemo {

    public static void main(String[] args) {
        // examples();
        exercise();

    }
    
    public static void examples() {
        // meh...
        // List<Integer> numbers = new ArrayList<>();
        // numbers.add(23);
        
        // nice
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        // streamify the list of numbers and do stuff to them
        Stream<Integer> numberStream = numbers.stream();
        numberStream
            .filter((x) -> x % 2 != 0)
            .map((x) -> x * x)
            .forEach((x) -> System.out.println("Squared odd num: " + x));
        numberStream.close();
        
        System.out.println("\nOriginal 'numbers' are not mutated:");
        for (int num: numbers) {
            System.out.println(num);
        }
        
        // find the max value (num) in the 'numbers' list
        int maxNum = 
                numbers
                    .stream()
                    .max(Comparator.comparing(Integer::valueOf))
                    .get();
        System.out.println("\nMax num in the original list: " + maxNum);
        
        // put the values into a new list after operations
        Stream<Integer> anotherNumStream = numbers.stream();
        List<Integer> squaredOdds = anotherNumStream
            .filter((x) -> x % 2 != 0)
            .map((x) -> x * x)
            .collect(Collectors.toList());
        anotherNumStream.close();
        
        System.out.println("\nSquared odd nums:");
        for (int num: squaredOdds) {
            System.out.println(num);
        }
        
        // make a stream of integers w/o using a source list
        System.out.println("\nSome more numbers from a different Stream...");
        Stream<Integer> streamOfNums = Stream.of(11, 12, 13, 14, 15);
        streamOfNums.forEach((num) -> System.out.println(num));
        
        System.out.println("\nParallel streaming reduces time, but doesn't preserve order:");
        numbers.parallelStream().forEach(System.out::println);

    }
    
    public static void exercise() {
    // create a stream of strings
        // filter out all names that start with a particular letter
        // add a common last name to all the names
        // sort names and display the result
        
        Stream<String> names = Stream.of("Emma", "Liam", "Olivia", 
                "Noah", "Ava", "Isabella", "Sophia", "Jackson", "Mia", 
                "Lucas", "Harper", "Ethan", "Aiden", "Evelyn", "Abigail", 
                "Benjamin", "Amelia", "Mason", "Ella", "Alexander");
        
        System.out.println("Here's a nice list of names...");
        names
            .filter((name) -> name.startsWith("E"))
            .map((name) -> name += " Spiffypants")
            .sorted()
            .forEach((name) -> System.out.println(name));
    }

}
