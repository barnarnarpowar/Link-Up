package com.toot.link_up.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

@Controller
public class ChatController {

    @GetMapping("/chat")
    public String showChatBox(@RequestParam String friend, Model model) {
        model.addAttribute("friend", friend);
        return "chatbox";  // Renders the chatbox.html page
    }
}
