package com.training.web.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@ComponentScan("com.training.web")
@PropertySource("classpath:database.properties")
public class AppConfig {

    @Autowired
    Environment env;
    
    @Bean
    DataSource dataSource() {
        DriverManagerDataSource dmds = new DriverManagerDataSource();     
        dmds.setUrl(env.getProperty("url"));
        dmds.setUsername(env.getProperty("username"));
        dmds.setPassword(env.getProperty("pword"));
        dmds.setDriverClassName(env.getProperty("driver"));
        return dmds;
    }
    

}