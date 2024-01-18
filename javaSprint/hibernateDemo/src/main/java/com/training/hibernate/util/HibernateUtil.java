package com.training.hibernate.util;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;

import com.training.hibernate.entity.Student;

public class HibernateUtil {

    // all transactions run in a Session Factory
    private static SessionFactory sessionFactory;
    
    public static SessionFactory getSessionFactory() {
        // call in the DAO layer
        if (sessionFactory == null) {
            Configuration conf = new Configuration();
            Properties props = new Properties();
            
            props.put(Environment.DRIVER, "com.mysql.cj.jdbc.Driver");
            props.put(Environment.URL, "jdbc:mysql://localhost:3306/mars_sept");
            props.put(Environment.USER, "root");
            props.put(Environment.PASS, "");
            props.put(Environment.SHOW_SQL, "true"); // log the SQL to the console
            
            conf.setProperties(props);
            conf.addAnnotatedClass(Student.class);
            
            ServiceRegistry registry = 
                new StandardServiceRegistryBuilder()
                    .applySettings(conf.getProperties())
                    .build();
            
            sessionFactory = conf.buildSessionFactory(registry);
        }
        return sessionFactory;
    }
}
