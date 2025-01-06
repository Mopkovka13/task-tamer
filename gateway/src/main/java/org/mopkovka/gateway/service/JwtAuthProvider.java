package org.mopkovka.gateway.service;

import org.mopkovka.gateway.web.auth.dto.*;

import java.io.IOException;

public interface JwtAuthProvider {
    SignInResponse getAccessToken(SignInRequest request) throws IOException;
    RefreshTokenResponse refreshAccessToken(RefreshTokenRequest request) throws IOException;
    OAuthTokenResponse oauth2googleToken(OAuthTokenRequest request) throws IOException;
}
