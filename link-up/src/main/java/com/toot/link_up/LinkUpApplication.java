package com.toot.link_up;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@SpringBootApplication
//@RunWith(SpringJUnit4ClassRunner.class)
@EntityScan("com.toot.link_up.model")  // Scans the model package for entities
@EnableJpaRepositories(basePackages = "com.toot.link_up.repositories")  // Scans the repository package for JPA repositories
public class LinkUpApplication {
    public static void main(String[] args) {
        SpringApplication.run(LinkUpApplication.class, args);
    }
}
