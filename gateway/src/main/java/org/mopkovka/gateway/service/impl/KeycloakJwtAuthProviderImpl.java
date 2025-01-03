package org.mopkovka.gateway.service.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.mopkovka.gateway.service.JwtAuthProvider;
import org.mopkovka.gateway.web.auth.dto.RefreshTokenRequest;
import org.mopkovka.gateway.web.auth.dto.RefreshTokenResponse;
import org.mopkovka.gateway.web.auth.dto.SignInRequest;
import org.mopkovka.gateway.web.auth.dto.SignInResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class KeycloakJwtAuthProviderImpl implements JwtAuthProvider {
    @Value("${jwt.auth.keycloak.client-url}")
    private String clientUrl;

    @Value("${jwt.auth.keycloak.client-id}")
    private String clientId;

    @Value("${jwt.auth.keycloak.client-secret}")
    private String clientSecret;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final RestTemplate restTemplate = new RestTemplate();
    private final HttpHeaders headers = new HttpHeaders();
    private final String tokenEndpoint = "token";

    /**
     *
     * @param request
     * @return
     */
    @Override
    public SignInResponse getAccessToken(SignInRequest request) throws IOException {
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);
        body.add("grant_type", "password");
        body.add("username", request.login());
        body.add("password", request.password());

        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    clientUrl + tokenEndpoint,
                    HttpMethod.POST,
                    new HttpEntity<>(body, headers),
                    String.class
            );

            if (!response.getStatusCode().is2xxSuccessful()) {
                throw new IOException("Failed to retrieve access token: " + response.getStatusCode());
            }

            String responseBody = response.getBody();
            if (responseBody == null) {
                throw new IOException("Empty response body");
            }

            JsonNode jsonNode = objectMapper.readTree(responseBody);

            return SignInResponse.builder()
                    .accessToken(jsonNode.get("access_token").asText())
                    .refreshToken(jsonNode.get("refresh_token").asText())
                    .expiresIn(jsonNode.get("expires_in").asLong())
                    .build();
        } catch (HttpClientErrorException e) {
            throw new IOException("Client error occurred while retrieving access token: " + e.getMessage(), e);
        } catch (HttpServerErrorException e) {
            throw new IOException("Server error occurred while retrieving access token: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new IOException("An unexpected error occurred while retrieving access token: " + e.getMessage(), e);
        }
    }

    @Override
    public RefreshTokenResponse refreshAccessToken(RefreshTokenRequest request) throws IOException {
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);
        body.add("grant_type", "refresh_token");
        body.add("refresh_token", request.refreshToken());

        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    clientUrl + tokenEndpoint,
                    HttpMethod.POST,
                    new HttpEntity<>(body, headers),
                    String.class
            );

            if (!response.getStatusCode().is2xxSuccessful()) {
                throw new IOException("Failed to refresh access token: " + response.getStatusCode());
            }

            String responseBody = response.getBody();
            if (responseBody == null) {
                throw new IOException("Empty response body");
            }

            JsonNode jsonNode = objectMapper.readTree(responseBody);

            return RefreshTokenResponse
                    .builder()
                    .accessToken(jsonNode.get("access_token").asText())
                    .build();
        } catch (HttpClientErrorException e) {
            throw new IOException("Client error occurred while refreshing access token: " + e.getMessage(), e);
        } catch (HttpServerErrorException e) {
            throw new IOException("Server error occurred while refreshing access token: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new IOException("An unexpected error occurred while refreshing access token: " + e.getMessage(), e);
        }
    }
}
