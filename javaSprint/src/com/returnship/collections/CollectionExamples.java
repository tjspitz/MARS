package com.returnship.collections;

import java.util.Set;
import java.util.TreeSet;
import java.util.HashSet;
import java.util.Iterator;

// Collection framework
// group of objects which is dynamic (i.e. size)
public class CollectionExamples {
    public static void examples() {
        System.out.println("Welcome to Collection examples...");

        int[] numbers = new int[10]; // boooo limitations

        // declare the <type> of vals in your Set (generics)
        Set<Integer> rollNums = new HashSet<Integer>();

        // can construct object representations of primitives in Java
        // (kind of like JS)
        // called 'AutoBoxing'
        rollNums.add(101);
        // rollNums.add("blargh"); // declared the Set to have integers, much
        // sadness
        rollNums.add(102);

        Iterator<Integer> iter = rollNums.iterator();
        while (iter.hasNext()) {
            int curNum = iter.next();
            System.out.println("Next in collection: " + curNum);
        }

        // can also iterate w/ 'enhanced for loop'
        // aka this doens't need the .iterator()
        System.out.println("Doing the same thing with enhanced for loop...");
        for (int num : rollNums) {
            System.out.println("Next in collection: " + num);
        }

        // TreeSet will sort in ascending order
        Set<String> names = new TreeSet<String>();
        names.add("Billy");
        names.add("Bob");
        names.add("Badoozles");

        for (String name : names) {
            System.out.println("Next name is: " + name);
        }

        // TreeSet cannot handle sorting these objects
            // doesn't know which field to sort by, unless...
            // we implement the <Comparable> interface on the Student class
        System.out.println(
                "Sets can hold objects, like the ones constructed by our Student class...");
        Set<Student> students = new HashSet<Student>();
        // BUT, a HashSet will 'accidentally' create duplicates
            // since it is based upon Hash Id
        students.add(new Student("Steve", 45, "B-", 101));
        students.add(new Student("Snarfy", 12, "A", 102));
        students.add(new Student("Jankers", 14, "D+", 103));
        students.add(new Student("Oopal", 112, "C", 104));
        // but wait, we overrode .hashCode() and .equals()...
            // so the following should NOT be added
            // and only one "Steve" should be present
        students.add(new Student("Steve", 45, "B-", 101));

        for (Student student : students) {
            // printing the Object (student) => calls .toSring()
                // since we provided a .compareTo() override, it works
            System.out.println("Current student: " + student);
        }

        System.out.println("Now with TreeSet...");
        // a TreeSet will not create duplicates in the way HashSet does
            // but Student does not implement Comparable, so now...
            // TreeSet needs a Comparator instantiated
            // TreeSet<className> must be same or child of Set<className>
                // (change it between Name, Grade, Id)
        Set<Student> moreStudents = new TreeSet<Student>(new NameComparator());
        moreStudents.add(new Student("Steve", 45, "B-", 101));
        moreStudents.add(new Student("Snarfy", 12, "A", 102));
        moreStudents.add(new Student("Jankers", 14, "D+", 103));
        moreStudents.add(new Student("Oopal", 112, "C", 104));

        System.out.println("Sorted by name...");
        for (Student student : moreStudents) {
            System.out.println("Current student: " + student);
        }
    }
}
