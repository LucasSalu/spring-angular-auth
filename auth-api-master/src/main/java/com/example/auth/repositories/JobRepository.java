package com.example.auth.repositories;

import com.example.auth.domain.job.Job;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Integer> {
	
	List<Job> findByIsActiveTrue();
}
