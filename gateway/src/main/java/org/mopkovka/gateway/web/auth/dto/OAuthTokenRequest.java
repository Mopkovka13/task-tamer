package org.mopkovka.gateway.web.auth.dto;

import jakarta.validation.constraints.NotNull;

public record OAuthTokenRequest (
        @NotNull(message = "Access token must be not null!")
        String accessToken
) {}

