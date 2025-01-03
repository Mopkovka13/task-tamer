package org.mopkovka.gateway.web.auth.dto;

import jakarta.validation.constraints.NotNull;

public record RefreshTokenRequest (
    @NotNull(message = "Refresh token must be not null!")
    String refreshToken
) {}
