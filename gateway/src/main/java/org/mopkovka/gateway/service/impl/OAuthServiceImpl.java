package org.mopkovka.gateway.service.impl;

import lombok.RequiredArgsConstructor;
import org.mopkovka.gateway.service.JwtAuthProvider;
import org.mopkovka.gateway.service.OAuthService;
import org.mopkovka.gateway.web.auth.dto.OAuthTokenRequest;
import org.mopkovka.gateway.web.auth.dto.OAuthTokenResponse;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class OAuthServiceImpl implements OAuthService {
    private final JwtAuthProvider jwtAuthProvider;

    /**
     * Updating authentication token to access tokens.
     * @param request Authentication code.
     * @return SignInResponse containing access token, refresh token, and expiration.
     */
    @Override
    public OAuthTokenResponse googleToken(OAuthTokenRequest request) throws AuthenticationException {
        try {
            return jwtAuthProvider.oauth2googleToken(request);
        } catch (IOException e) {
            throw new AuthenticationException(
                    "An error occurred while exchanging authorization code: " + e.getMessage()
            );
        } catch (Exception e) {
            throw new RuntimeException(
                    "An unexpected occurred while exchanging authorization code: " + e.getMessage(), e
            );
        }
    }
}
