package com.toot.link_up.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class APIController {
    public ResponseEntity<String> getData() {
        return ResponseEntity.ok("Hello from Spring Boot!");
}
}