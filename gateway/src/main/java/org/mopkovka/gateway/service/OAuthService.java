package org.mopkovka.gateway.service;

import org.mopkovka.gateway.web.auth.dto.OAuthTokenRequest;
import org.mopkovka.gateway.web.auth.dto.OAuthTokenResponse;

import javax.naming.AuthenticationException;

public interface OAuthService {
    OAuthTokenResponse googleToken (OAuthTokenRequest request) throws AuthenticationException;
}
