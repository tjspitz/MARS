package com.training.hibernate.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.training.hibernate.entity.Student;
import com.training.hibernate.util.HibernateUtil;

public class StudentDao {

    public void saveStudent(Student student) {
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        transaction = session.beginTransaction();
        
        session.persist(student);
        transaction.commit();
        
    }
    
    public List<Student> getStudents() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        return session.createQuery("from Student", Student.class).list();
    }
}
