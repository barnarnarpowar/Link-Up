package com.toot.link_up.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class FriendListController {

    @GetMapping("/friendlist")
    public String showFriendList(Model model) {
        // Sample friend list; replace with data from a database
        List<String> friends = Arrays.asList("Alice", "Bob", "Charlie");
        model.addAttribute("friends", friends);
        return "friendlist";  // Renders the friendlist.html page
    }
}
