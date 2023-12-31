package com.returnship.collections.employeeAssignment;

import java.util.Set;
import java.util.TreeSet;
import java.util.HashSet;
import java.util.Date;

public class Client {
//  TreeSet will only add one employee per department if the Comparator is EmpDept
//      aka it will sort by and SEE departments, throwing away duplicate depts
//            extend the thinking to any Comparator & we need to be careful with which we use
//      UPDATE: refactor the Comparator to never return 0,
//          as this is the culprit for accidental removal    
    private static Set<Employee> allEmps = new TreeSet<Employee>(new EmpIdComparator());
    private static Set<Employee> owners = new TreeSet<Employee>(new EmpNameComparator());
    private static Set<Employee> managers = new TreeSet<Employee>(new EmpNameComparator());
    private static Set<Employee> cashiers = new TreeSet<Employee>(new EmpNameComparator());

//    private static Set<Employee> allEmps = new HashSet<Employee>();
//    private static Set<Employee> owners = new HashSet<Employee>();
//    private static Set<Employee> managers = new HashSet<Employee>();
//    private static Set<Employee> cashiers = new HashSet<Employee>();
    
    public static void main(String[] args) {
        seedAllEmployees();
        seedEmpCategory(owners, "owner");
        seedEmpCategory(managers, "manager");
        seedEmpCategory(cashiers, "cashier");
        
        System.out.println("Here are all the employees:");
        for (Employee emp: allEmps) {
            System.out.println(emp);
        }

        System.out.println("\nHere are the owners:");
        for (Employee emp: owners) {
            System.out.println(emp);
        }
        
        System.out.println("\nHere are the managers:");
        for (Employee emp: managers) {
            System.out.println(emp);
        }
        
        System.out.println("\nHere are the cashiers:");
        for (Employee emp: cashiers) {
            System.out.println(emp);
        }
    }
    
    private static void seedAllEmployees() {
        int[] ids = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        String[] names = {"Bob", "Bill", "Lenny", "Susie", "Harold", "Erin", "Pip", "Janice", "Hal", "Biff"};
        String[] departments = {"owner", "owner", "manager", "manager", "manager", "cashier", "cashier", "cashier", "cashier", "cashier"};
        Date hireDate = new Date();
        double[] salaries = {1000000.95, 1000000.95, 60500.75, 60500.75, 60500.75, 22000.10, 22000.10, 22000.10, 22000.10, 22000.10};
        
        for (int i = 0; i < ids.length; i ++) {
            Employee curEmp = 
                    new Employee(ids[i], names[i], departments[i], hireDate, salaries[i]);
            allEmps.add(curEmp);
        }
    }
    
    private static void seedEmpCategory(Set<Employee> empSet, String dept) {
        for (Employee emp: allEmps) {
            if (emp.getDepartment().equalsIgnoreCase(dept)) {
                empSet.add(emp);
            }
        }
    }
    
}
