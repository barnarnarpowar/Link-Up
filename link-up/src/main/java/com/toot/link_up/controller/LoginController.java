package com.toot.link_up.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";  // Renders the login.html page
    }

    @PostMapping("/login")
    public String handleLogin(@RequestParam String username, @RequestParam String password) {
        // Add your authentication logic here
        if (username.equals("user") && password.equals("pass")) {
            return "redirect:/friendlist";  // Redirect to the friend list if successful
        }
        return "login";  // Stay on the login page if authentication fails
    }
}
