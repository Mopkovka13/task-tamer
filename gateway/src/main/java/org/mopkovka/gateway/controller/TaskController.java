package org.mopkovka.gateway.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/task")
public class TaskController {
    @GetMapping("/user-info")
    public String getUserInfo(Authentication authentication) {
        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();

        // Получаем ID пользователя (например, из поля "sub")
        String userId = oauth2User.getAttribute("sub");  // 'sub' - это стандартное поле ID в OpenID Connect

        return "User ID: " + userId;
    }
}