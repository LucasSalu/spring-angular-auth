package com.example.auth.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.auth.domain.application.Application;
import com.example.auth.domain.job.Job;
import com.example.auth.domain.job.JobDTO;
import com.example.auth.repositories.ApplicationRepository;
import com.example.auth.repositories.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository; 
    
    @Autowired
    private ApplicationRepository applicationRepository;

    
    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    
    public Job updateJob(Integer id, Job job) {
        Optional<Job> existingJob = jobRepository.findById(id);
        if (existingJob.isPresent()) {
            Job updatedJob = existingJob.get();
            updatedJob.setTitle(job.getTitle());
            updatedJob.setDescription(job.getDescription());
            updatedJob.setRequirements(job.getRequirements());
            return jobRepository.save(updatedJob);
        } else {
            throw new RuntimeException("Job not found with id: " + id);
        }
    }

    
    public void deleteJob(Integer id) {
        if (jobRepository.existsById(id)) {
            jobRepository.deleteById(id);
        } else {
            throw new RuntimeException("Job not found with id: " + id);
        }
    }

    public List<Job> getAllJobs() {
        return jobRepository.findByIsActiveTrue();
    }
    
    public List<JobDTO> getAllJobsUser(Integer userId) {
        List<Application> applications = applicationRepository.findByUserId(userId);

        // Converte as aplicações em DTOs de Job
        List<JobDTO> jobs = applications.stream()
            .map(apply -> {
                Job job = jobRepository.findById(apply.getJobId())
                    .orElseThrow(() -> new RuntimeException("Job not found with id: " + apply.getJobId()));
                
                return new JobDTO(
                    job.getId(),
                    job.getTitle(),
                    job.getDescription(),
                    job.getRequirements(),
                    job.getCreatedBy(),
                    job.getIsActive(),
                    apply.getStatus()
                );
            })
            .collect(Collectors.toList());

        return jobs;
    }

    public Optional<Job> findById(Integer id) {
        return jobRepository.findById(id);
    }
}