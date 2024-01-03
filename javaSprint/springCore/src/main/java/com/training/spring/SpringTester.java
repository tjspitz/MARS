package com.training.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringTester {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
        
        Person p1 = (Person) context.getBean("person");
        Person p2 = (Person) context.getBean("person");
        p2.setFirstName("Horatio");
        
        System.out.println(p1.getPersonDetails());
        System.out.println(p2.getPersonDetails());
        
        ((ClassPathXmlApplicationContext) context).close();
    }

}
