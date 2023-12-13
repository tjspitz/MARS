package com.returnship.training;

import java.util.Scanner;

public class CourseSearch {
    private static String[] courses = new String[0];
    
    public static void storeCourses() {
        Scanner sc = new Scanner(System.in);
        
        while (true) {
            System.out.println("Please enter a course name to store...");
            System.out.println("or enter 'EXIT' (in all caps) to finish.");
            String course = sc.next();
            
            if (course.equals("EXIT")) {
                break;
            }
            
            String[] newCourses = new String[courses.length + 1];
            
            for (int i = 0; i < newCourses.length - 1; i ++) {
                newCourses[i] = courses[i];                    
            }
            newCourses[newCourses.length - 1] = course;
            courses = newCourses;
        }
        System.out.println("There are " + courses.length + " courses stored. Exiting...");
        if (courses.length > 0) {
            searchCourses();
        } else {
            System.out.println("Goodbye!");
        }
    }
    
    public static void searchCourses() {
        Scanner sc = new Scanner(System.in);
        
        while (true) {
            System.out.println("Please enter a course name to retrieve...");
            System.out.println("or enter 'EXIT' (in all caps) to finish.");
            String course = sc.next();
            
            if (course.equals("EXIT")) {
                break;
            }
            
            for (int i = 0; i < courses.length; i ++) {
                if (courses[i].equals(course)) {
                    System.out.println(course + " is available!");
                    break;
                }
                if (i == courses.length - 1 && !courses[i].equals(course)) {
                    System.out.println(course + " is NOT available!");
                }
            }
        }
        sc.close();
        System.out.println("Goodbye!");
    }
}
