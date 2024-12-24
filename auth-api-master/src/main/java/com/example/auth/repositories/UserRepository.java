package com.example.auth.repositories;

import com.example.auth.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User, Integer> {
    UserDetails findByLogin(String login);
    User findUserByLogin(String login);
    
}
