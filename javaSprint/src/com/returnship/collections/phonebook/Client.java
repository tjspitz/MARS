package com.returnship.collections.phonebook;

import java.util.List;
import java.util.Scanner;

public class Client {
    
    private static Phonebook phonebook = new Phonebook();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        takeIO(sc);
        sc.close();
    }
    
    private static void takeIO(Scanner sc) {
        System.out.println(
                "Menu"
                + "\n1) Add Contact"
                + "\n2) Display All"
                + "\n3) Search by phone number"
                + "\n4) Remove a Contact"
                + "\n5) Exit");
        System.out.println("Please enter a number (1-5) to indicate your choice");
        int choice = Integer.parseInt(sc.nextLine());
        
        if (choice == 1) {
            System.out.println(addContact(phonebook, sc));
            
        } else if (choice == 2) {
            System.out.println(displayAll(phonebook));
            
        } else if (choice == 3) {
            System.out.println(findOne(phonebook, sc));
            
        } else if (choice == 4) {
            System.out.println(deleteOne(phonebook, sc));
            
        } else if (choice == 5) {
            System.out.println("Goodbye!");
        } else {
            System.out.println("Invalid entry.");
        }
        
        if (choice != 5) {
            System.out.println("Access the phonebook again? (y/n)");
            String contChoice = sc.nextLine();
            
            if (contChoice.equalsIgnoreCase("y")) {
                takeIO(sc);
            }
            System.out.println("Goodbye!");            
        }
    }
    
    private static String addContact(Phonebook phonebook, Scanner sc) {
        Contact newContact = new Contact();
        System.out.println("Please enter new name:");
        String name = sc.nextLine();
        newContact.setName(name);
        
        System.out.println("Please enter new phone number:");
        long number = Long.parseLong(sc.nextLine());
        newContact.setPhoneNumber(number);

        System.out.println("Please enter new email address:");
        String email = sc.nextLine();
        newContact.setEmail(email);
        
        System.out.println("Please enter new organization name:");
        String org = sc.nextLine();
        newContact.setOrganization(org);
        
        phonebook.addContact(newContact);
        return "Added new contact: " + newContact;
    }
    
    private static String displayAll(Phonebook phonebook) {
        String allContacts = "Here are all available contacts:";
        List<Contact >contacts = phonebook.getAll();
        for (Contact contact: contacts) {
            allContacts += "\n" + contact;
        }
        return allContacts;
    }

    private static String findOne(Phonebook phonebook, Scanner sc) {
        System.out.println("Please enter a phone number to search for (no hyphens)");
        long number = Long.parseLong(sc.nextLine());
        
        Contact contact = phonebook.getOne(number);
        return "Here is the matching contact:\n" + contact;
    }
    
    private static String deleteOne(Phonebook phonebook, Scanner sc) {
        System.out.println("Please enter a phone number to search & delete the contact (no hyphens)");
        long number = Long.parseLong(sc.nextLine());
        
        Contact contact = phonebook.getOne(number);
        boolean success = phonebook.deleteContact(number);
        
        if (success == true) {
            return "Successfully deleted contact:\n" + contact;
        } else {
           return "No contact found in the phonebook matching:\n" + number;
        }
    }
}
