package com.returnship.collections.phonebook;

import java.util.ArrayList;
import java.util.List;

//simulate phonebook where you can add, update, delete, view all, and view one
    // contains a collection of Contacts ("has a")
public class Phonebook {
    private List<Contact> contacts = new ArrayList<>();

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }
    
    public Contact getOne(long phoneNumber) {
        for (Contact contact: contacts) {
            if (contact.getPhoneNumber() == phoneNumber) {
                return contact;
            }
        }
        return null;
    }
    
    public List<Contact> getAll() {
        return contacts;
    }
    
    
    public void addContact(Contact newContact) {
        contacts.add(newContact);
    }
    
//    public void updateContact(String name, Contact updateContact) {
//        for (Contact contact: contacts) {
//            if (contact.getName() == name) {
//                
//            }
//        }
//    }
    
    public boolean deleteContact(long phoneNumber) {
         for (Contact contact: contacts) {
             if(contact.getPhoneNumber() == phoneNumber) {
                 contacts.remove(contact);
                 return true;
             }
         }
        return false;
    }
}
