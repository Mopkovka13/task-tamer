package org.mopkovka.gateway.web.auth.dto;

import lombok.Builder;

@Builder
public record RefreshTokenResponse (
        String accessToken
) {}
