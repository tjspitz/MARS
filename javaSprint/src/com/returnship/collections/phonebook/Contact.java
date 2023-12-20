package com.returnship.collections.phonebook;

public class Contact {
    private String name;
    private long phoneNumber;
    private String email;
    private String organization;
    
    public Contact() {
        super();
    }

    public Contact(String name, long phoneNumber, String email,
            String organization) {
        super();
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.organization = organization;
    }

    public String getName() {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    @Override
    public String toString() {
        return "Contact [name=" + name + ", phoneNumber=" + phoneNumber
                + ", email=" + email + ", organization=" + organization + "]";
    }
    
    
}
