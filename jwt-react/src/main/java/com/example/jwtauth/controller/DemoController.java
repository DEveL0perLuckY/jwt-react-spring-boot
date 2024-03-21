package com.example.jwtauth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RequestMapping(value = "/api/", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class DemoController {

    @GetMapping("/demo")
    public ResponseEntity<String> demo() {
        try {
            return ResponseEntity.ok("Hello from secured URL");
        } catch (Exception e) {
            // Handle other exceptions here
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while processing the request");
        }

    }

    @GetMapping("/admin_only")
    public ResponseEntity<String> adminOnly() {
        try {
            return ResponseEntity.ok("Hello from admin-only URL");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while processing the request");
        }
    }

}
