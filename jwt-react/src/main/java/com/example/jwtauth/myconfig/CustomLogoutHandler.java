package com.example.jwtauth.myconfig;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import com.example.jwtauth.domain.User;
import com.example.jwtauth.repos.UserRepository;

@Configuration
public class CustomLogoutHandler implements LogoutHandler {

    @Autowired
    UserRepository userRepository;

    @Override
    public void logout(HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        String token = authHeader.substring(7);
        Optional<User> user = userRepository.findByToken(token);
        // Token storedToken = tokenRepository.findByToken(token).orElse(null);
        System.out.println("logout");
        if (user.isPresent()) {
            User loggedInUser = user.get();
            loggedInUser.setToken(null);
            userRepository.save(loggedInUser);

            // Set the response status and message for successful logout
            response.setStatus(HttpServletResponse.SC_OK);
            try {
                response.getWriter().write("Logout successfully");
            } catch (IOException e) {
                e.printStackTrace(); // Handle the exception appropriately
            }
        } else {
            // Set the response status and message for user already logged out
            response.setStatus(HttpServletResponse.SC_OK);
            try {
                response.getWriter().write("User already logged out");
            } catch (IOException e) {
                e.printStackTrace(); // Handle the exception appropriately
            }
        }
    }
}