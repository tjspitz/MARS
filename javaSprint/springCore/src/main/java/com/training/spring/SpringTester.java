package com.training.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.training.spring.config.ApplicationConfig;

public class SpringTester {

    public static void main(String[] args) {
//      via the xml configuration file
//        ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
//        Person p1 = (Person) context.getBean("person");
//        Person p2 = (Person) context.getBean("person");
//        p2.setFirstName("Horatio");
//        
//        System.out.println(p1.getPersonDetails());
//        System.out.println(p2.getPersonDetails());
//        
//        ((ClassPathXmlApplicationContext) context).close();
        
//        via the java config class file
        ApplicationContext context = new AnnotationConfigApplicationContext(ApplicationConfig.class);
        Person p1 = context.getBean(Person.class);
        Person p2 = context.getBean(Person.class);
        p2.setFirstName("Horatio");
        p2.getCar().setMake("Cheverolet");
        p2.getCar().setModel("Equinox");
        
        System.out.println(p1.getPersonDetails());
        System.out.println(p2.getPersonDetails());
        
        ((AnnotationConfigApplicationContext) context).close();
    }

}
