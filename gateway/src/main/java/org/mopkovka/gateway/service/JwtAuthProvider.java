package org.mopkovka.gateway.service;

import org.mopkovka.gateway.web.auth.dto.RefreshTokenRequest;
import org.mopkovka.gateway.web.auth.dto.RefreshTokenResponse;
import org.mopkovka.gateway.web.auth.dto.SignInRequest;
import org.mopkovka.gateway.web.auth.dto.SignInResponse;

import java.io.IOException;

public interface JwtAuthProvider {
    SignInResponse getAccessToken(SignInRequest request) throws IOException;
    RefreshTokenResponse refreshAccessToken(RefreshTokenRequest request) throws IOException;
}
