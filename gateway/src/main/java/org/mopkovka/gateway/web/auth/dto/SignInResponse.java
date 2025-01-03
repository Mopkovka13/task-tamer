package org.mopkovka.gateway.web.auth.dto;

import lombok.Builder;

@Builder
public record SignInResponse(
        String accessToken,
        String refreshToken,
        Long expiresIn
) { }
