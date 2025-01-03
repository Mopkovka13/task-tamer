package org.mopkovka.gateway.web.auth.dto;

import jakarta.validation.constraints.NotNull;

public record SignInRequest(
        @NotNull(message = "Login must be not null!")
        String login,

        @NotNull(message = "Password must be not null!")
        String password
) { }
