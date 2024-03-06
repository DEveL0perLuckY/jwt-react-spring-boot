package com.example.jwtauth.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jwtauth.domain.LoginReq;
import com.example.jwtauth.domain.User;
import com.example.jwtauth.myservice.AuthenticationResponse;
import com.example.jwtauth.myservice.AuthenticationService;
import com.example.jwtauth.repos.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RequestMapping(value = "/api/", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthenticationController {

    @Autowired
    AuthenticationService authService;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody LoginReq request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @GetMapping("/logout")
    public ResponseEntity<AuthenticationResponse> logout(HttpServletRequest request, HttpServletResponse response) {
        String authHeader = request.getHeader("Authorization");
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.badRequest()
                        .body(new AuthenticationResponse(null, "Invalid or missing Authorization header"));
            }
            String token = authHeader.substring(7);
            Optional<User> user = userRepository.findByToken(token);

            if (user.isPresent()) {
                User loggedInUser = user.get();
                loggedInUser.setToken(null);
                userRepository.save(loggedInUser);
                return ResponseEntity.ok(new AuthenticationResponse(null, "Logout successfully"));
            } else {
                return ResponseEntity.ok(new AuthenticationResponse(null, "User already logged out"));
            }
        } catch (Exception e) {
            // Handle other exceptions here
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new AuthenticationResponse(null, "An error occurred during logout"));
        }
    }
}
