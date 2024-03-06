package com.example.jwtauth.myservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.jwtauth.domain.LoginReq;
import com.example.jwtauth.domain.Role;
import com.example.jwtauth.domain.User;
import com.example.jwtauth.model.ConstantsId;
import com.example.jwtauth.repos.RoleRepository;
import com.example.jwtauth.repos.UserRepository;
import java.util.Arrays;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@SuppressWarnings("null")
public class AuthenticationService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JwtService jwtService;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    public AuthenticationResponse register(User request) {

        System.out.println(request.getUsername());
        System.out.println(request.getEmail());

        if (userRepository.findByUserName(request.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "User already exist by username");
        }
        Optional<Role> roleUser = roleRepository.findById(ConstantsId.ROLE_USER);

        Set<Role> roles = new HashSet<>();
        if (roleUser.isPresent()) {
            roles.add(roleUser.get());
        } else {
            Role admin = new Role();
            admin.setId(ConstantsId.ROLE_ADMIN);
            admin.setName("ROLE_ADMIN");

            Role user = new Role();
            user.setId(ConstantsId.ROLE_USER);
            user.setName("ROLE_USER");

            roleRepository.saveAll(Arrays.asList(admin, user));
            roles.add(admin);
            roles.add(user);
        }
        User user = new User();
        user.setUserName(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRoleId(roles);

        String jwt = jwtService.generateToken(user);

        user.setToken(jwt);
        userRepository.save(user);

        return new AuthenticationResponse(jwt, "User registration was successful");

    }

    public AuthenticationResponse authenticate(LoginReq request) {
        System.out.println("user name :" + request.getUserName());
        System.out.println("user password :" + request.getPassword());
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));

        User user = userRepository.findByUserName(request.getUserName()).orElseThrow();
        String jwt = jwtService.generateToken(user);

        user.setToken(jwt);
        userRepository.save(user);

        return new AuthenticationResponse(jwt, "User login was successful");

    }

}
