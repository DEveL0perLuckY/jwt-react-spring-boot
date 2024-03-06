package com.example.jwtauth.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginReq {
    private String userName;
    private String password;
}
