package com.toot.link_up.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "forward:/index.html"; // Serve the static index.html directly
    }

    @GetMapping("/home")
    public String home() {
        return "forward:/index.html"; // Optionally, serve the same static index.html for /home
    }
}
