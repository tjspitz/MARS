package com.training.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/* Annotations are 'bundled' in SpringBootAplication
 * -Configuration
 * -EnableWebMvc
 * -ComponentScan(basePackages="com.xxxxx.xxxxx")
 */
@SpringBootApplication
public class SpringBootDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDemoApplication.class, args);
	}

}
