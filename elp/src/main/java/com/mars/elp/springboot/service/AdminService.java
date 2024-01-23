package com.mars.elp.springboot.service;

import java.util.List;

import com.mars.elp.springboot.entity.Admin;

public interface AdminService {

    public List<Admin> getAdmins();
    public Admin getAdminById(int id);
    public Admin getAdminByLastName(String name);
    public Admin postAdmin(Admin user);
    public void putAdminById(int id, Admin user);
    public void deleteAdminById(int id);
}
