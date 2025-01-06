package org.mopkovka.gateway.web.auth.dto;

import lombok.Builder;

@Builder
public record OAuthTokenResponse (
        String accessToken,
        String refreshToken,
        Long expiresIn
) {}