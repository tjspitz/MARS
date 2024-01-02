package com.returnship.collections;

import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

// Nodes, pointers, and things
// will it be same, similar or different to JS LLs?
// better than ArrayList when adding & deleting
public class LinkedListExamples {
    
    public static void examples() {
        // Cannot access by [index] on a LL... has .get(index) though
        List<String> names = new LinkedList<>();
        names.add("Slippy");
        names.add("Pippy");
        names.add("Tippy");
        names.add("Zippy");
        names.add("Lippy");
        names.add("Dippy");
        
        System.out.println("Names in the Linked List 'names':");
        for (String name: names) {
            System.out.println(name);
        }
        
        
        // doubly-linked list (double-ended queue)
        Deque<Integer> numbers = new LinkedList<>();
        numbers.add(2);
        numbers.addFirst(1);
        numbers.addLast(3);
        numbers.addFirst(0);
        numbers.addLast(4);
        
        System.out.println("\nNumbers in the Linked List 'numbers':" + numbers);
        System.out.println("Size:" + numbers.size());
        
        numbers.removeFirst();
        numbers.removeLast();
        
        System.out.println("\nUpdated numbers in the Linked List 'numbers':" + numbers);
        System.out.println("Updated size:" + numbers.size());
        
        // .offer(), .offerFirst(), .offerLast() seem useful for queues
            // in which there is a capacity restriction (i.e. giant datasets)
            // since it will never throw, but just return 'false' if there is no space left
            // whereas 'add' will throw if there is no capacity left
        
        // Maps
        Map<String, Integer> animals = new HashMap<>();
        animals.put("cat", 1);
        animals.put("dog", 2);
        animals.put("tiger", 3);
        animals.put("zebra", 4);
        
        System.out.println("\nSize of 'animals':" + animals.size());
        // containsKey(), containsValue(), get(), remove(), etc
        if(animals.containsKey("cat")) {
            System.out.println("Hooray, 'cat' is in the animals Map! "
                    + "Its value is" + animals.get("cat") + " !");
        }
        
        // iterating thru a Map
        System.out.println("\nIterating thru the 'animals' Map:");
        for (Map.Entry<String, Integer> entry: animals.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
    
    public static void employeeMap() {
        /*
         * Create a collection of Employees and store them as Map having empId as key. 
         * Get an empId from the user and if it exists in the collection, 
         * return the department name in which the employee works.
         */
        
        Map<Integer, String> employees = new HashMap<>();
        Scanner sc = new Scanner(System.in);
        
        int[] ids = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        String[] depts = { "cashier", "stocker", "janitor", "cashier", "stocker", "janitor", "cashier", "stocker", "janitor", "manager" };
        for (int i = 0; i < ids.length; i ++) {
            employees.put(ids[i], depts[i]);
        }
        
        System.out.println("Please enter an employee id to retrieve their department name:");;
        int id = sc.nextInt();
        String dept = employees.get(id);
        
        if (dept == null) {
            System.out.println("Employee with id " + id + " was not found...");
        } else {
            System.out.println("Employee with id " + id + " is in the " + dept + " department.");
        }
        sc.close();
    }
}
