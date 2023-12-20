package com.returnship.collections.phonebook;

import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

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
            try {
                System.out.println(addContact(phonebook, sc));
            } catch (AddContactException e) {
                e.printStackTrace();
            }
            
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
    
    private static String addContact(Phonebook phonebook, Scanner sc) throws AddContactException {
        Contact newContact = new Contact();
        try {
            System.out.println("Please enter new name:");
            String name = sc.nextLine();
            if (verifyText(name, "name") == false) {
                throw new NameInputException("Only letters, spaces, and hyphens are allowed for name entries.");
            }
            newContact.setName(name);
            
            System.out.println("Please enter new phone number:");
            long number = Long.parseLong(sc.nextLine());
            if (verifyNum(number) == false) {
                throw new NumberInputException("Phone number must contain ten digits.");
            }
            newContact.setPhoneNumber(number);
            
            System.out.println("Please enter new email address:");
            String email = sc.nextLine();
            if (verifyText(email, "email") == false) {
                throw new EmailInputException("Email address must contain only letters and numbers, "
                        + "must include a single \"@\" and a single \".\", "
                        + "and may contain underscores (_).");
            }
            newContact.setEmail(email);
            
            System.out.println("Please enter new organization name:");
            String org = sc.nextLine();
            if (verifyText(org, "org") == false) {
                throw new OrgInputException("Organization name cannot contain vertical whitespace.");
            }
            newContact.setOrganization(org);
            
            phonebook.addContact(newContact);
            return "Added new contact:\n" + newContact;
            
        } catch (AddContactException e ) {
            return "Failed to add new contact...\n" + e.getMessage();
        }
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
    
    private static boolean verifyText(String entry, String type) {
        Pattern pattern = null;
        boolean flag = false;
        
        if (type.equals("name")) {
            pattern = Pattern.compile("[a-zA-Z- ]+");
        }
        if (type.equals("email")) {
            pattern = Pattern.compile("^[a-zA-Z0-9_]*@[a-zA-Z0-9_]*\\.[a-zA-Z]*$");
        }
        if (type.equals("org")) {
            pattern = Pattern.compile("[^\\n\\x0B\\f\\r\\x85\\u2028\\u2029]+");
        }
        flag = pattern.matcher(entry).matches();
        return flag;
    }
    
    private static boolean verifyNum(long entry) {
        return entry > 999_999_999L && entry < 10_000_000_000L;
    }
}
