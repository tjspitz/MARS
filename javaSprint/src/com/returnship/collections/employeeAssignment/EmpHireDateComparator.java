package com.returnship.collections;

import java.util.Comparator;

public class EmpHireDateComparator implements Comparator<Employee> {

    @Override
    public int compare(Employee o1, Employee o2) {
        return o1.getHireDate().compareTo(o2.getHireDate());
    }

}
