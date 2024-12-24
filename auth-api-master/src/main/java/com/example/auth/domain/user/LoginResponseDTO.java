package com.example.auth.domain.user;

public record LoginResponseDTO(String token,String username, Integer id, String role) {
}
