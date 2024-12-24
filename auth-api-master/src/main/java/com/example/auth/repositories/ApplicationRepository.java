package com.example.auth.repositories;

import com.example.auth.domain.application.Application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
	
    List<Application> findByUserId(Integer userId);
    List<Application> findByJobId(Integer jobId);
}
