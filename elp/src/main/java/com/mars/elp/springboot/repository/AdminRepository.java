package com.mars.elp.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mars.elp.springboot.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    public Admin findByLastName(String name);
}
