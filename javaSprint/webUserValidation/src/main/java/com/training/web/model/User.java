package com.training.web.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString // auto toString() override
public class User {

    private int id;
    private String username;
    private String password;
}
