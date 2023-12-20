package com.returnship.collections;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Arrays;

public class ListExamples {

    public static void examples() {
        // Lists do not prevent duplicates
        List<Integer> nums = new ArrayList<>();
        nums.add(10);
        nums.add(11);
        nums.add(12);
        nums.add(10); // works
        nums.add(13);
        nums.add(14);
        nums.add(15);

        // using .get(i)
        System.out.println("Number at index 3: " + nums.get(3));

        System.out.println("\nHere are all the numbers:");
        for (int num : nums) {
            System.out.println(num);
        }

        List<Student> students = new ArrayList<>();
        students.add(new Student("Steve", 45, "B-", 101));
        students.add(new Student("Snarfy", 12, "A", 102));
        students.add(new Student("Jankers", 14, "D+", 103));
        students.add(new Student("Oopal", 112, "C", 104));
        students.add(new Student("Steve", 45, "B-", 101)); // duplicate is allowed

        System.out.println("\nHere are all the students:");
        for (Student student : students) {
            System.out.println(student);
        }

        // Arrays.asList() method does the same work to create a List that above does
        List<Student> students2 = Arrays.asList(
                new Student("Steve", 45, "B-", 101),
                new Student("Snarfy", 12, "A", 102),
                new Student("Jankers", 14, "D+", 103),
                new Student("Oopal", 112, "C", 104),
                new Student("Steve", 45, "B-", 101));

        System.out.println(
                "\nDifferent approach, same result, for creating a list: ");
        for (Student student : students2) {
            System.out.println(student);
        }

        // sorting Lists - mutates the List
        Collections.sort(students, new NameComparator());
        System.out.println("\nHere are all the students, sorted by name:");
        for (Student student : students) {
            System.out.println(student);
        }

        Collections.sort(students, new IdComparator());
        System.out.println("\nHere are all the students, sorted by ID:");
        for (Student student : students) {
            System.out.println(student);
        }

    }

}
