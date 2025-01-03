package org.mopkovka.gateway.service.impl;

import lombok.RequiredArgsConstructor;
import org.mopkovka.gateway.service.AuthService;
import org.mopkovka.gateway.service.JwtAuthProvider;
import org.mopkovka.gateway.web.auth.dto.RefreshTokenRequest;
import org.mopkovka.gateway.web.auth.dto.RefreshTokenResponse;
import org.mopkovka.gateway.web.auth.dto.SignInRequest;
import org.mopkovka.gateway.web.auth.dto.SignInResponse;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final JwtAuthProvider jwtAuthProvider;

    /**
     * Authenticates a user and retrieves an access token.
     * @param request The sign-in request containing user credentials.
     * @return SignInResponse containing access token, refresh token, and expiration.
     */
    @Override
    public SignInResponse signIn(SignInRequest request) throws AuthenticationException {
        try {
            return jwtAuthProvider.getAccessToken(request);
        } catch (IOException e) {
            throw new AuthenticationException(
                    "An error occurred during user sign-in: " + e.getMessage()
            );
        } catch (Exception e) {
            throw new RuntimeException(
                    "An unexpected error occurred during user sign-in: " + e.getMessage(), e
            );
        }
    }

    /**
     * Refreshes an access token using a refresh token.
     * @param token The refresh token to exchange for a new access token.
     * @return New access token as a string.
     */
    @Override
    public RefreshTokenResponse refreshToken(RefreshTokenRequest request)
            throws AuthenticationException {
        try {
            return jwtAuthProvider.refreshAccessToken(request);
        } catch (IOException e) {
            throw new AuthenticationException(
                    "An error occurred during token refresh: " + e.getMessage()
            );
        } catch (Exception e) {
            throw new RuntimeException(
                    "An unexpected error occurred during token refresh: " + e.getMessage(), e
            );
        }
    }
}
