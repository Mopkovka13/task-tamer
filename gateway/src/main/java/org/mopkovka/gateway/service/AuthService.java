package org.mopkovka.gateway.service;

import org.mopkovka.gateway.web.auth.dto.RefreshTokenRequest;
import org.mopkovka.gateway.web.auth.dto.RefreshTokenResponse;
import org.mopkovka.gateway.web.auth.dto.SignInRequest;
import org.mopkovka.gateway.web.auth.dto.SignInResponse;

import javax.naming.AuthenticationException;

public interface AuthService {
    SignInResponse signIn(SignInRequest request) throws AuthenticationException;
    RefreshTokenResponse refreshToken(RefreshTokenRequest request) throws AuthenticationException;
}
