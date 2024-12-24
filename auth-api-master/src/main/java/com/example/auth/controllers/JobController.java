package com.example.auth.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.auth.domain.job.Job;
import com.example.auth.domain.job.JobDTO;
import com.example.auth.services.JobService;

@RestController
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job job) {
        Job createdJob = jobService.createJob(job);
        return ResponseEntity.ok(createdJob);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable Integer id, @RequestBody Job job) {
        Job updatedJob = jobService.updateJob(id, job);
        return ResponseEntity.ok(updatedJob);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Integer id) {
    	Job job = jobService.findById(id).get();
    	job.setIsActive(false);
        jobService.updateJob(id,job);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Job>> listJobs() {
        List<Job> jobs = jobService.getAllJobs();
        return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Job> findById(@PathVariable Integer id) {
    	Optional<Job> job = jobService.findById(id);
    	if(job.isPresent()) return ResponseEntity.ok(job.get());
        
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/user/{id}")
    public ResponseEntity<List<JobDTO>> findByUser(@PathVariable Integer id) {
            List<JobDTO> jobs = jobService.getAllJobsUser(id);
            return ResponseEntity.ok(jobs);
    }
    
    @GetMapping("/adm/{id}")
    public ResponseEntity<Job> findByAdmCreator(@PathVariable Integer id) {
    	Optional<Job> job = jobService.findById(id);
    	if(job.isPresent()) return ResponseEntity.ok(job.get());
        
        return ResponseEntity.noContent().build();
    }
}

