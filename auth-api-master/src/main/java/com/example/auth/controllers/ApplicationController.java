package com.example.auth.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.auth.domain.application.Application;
import com.example.auth.domain.job.Job;
import com.example.auth.services.ApplicationService;
import com.example.auth.services.JobService;

@RestController
@RequestMapping("/applications")
public class ApplicationController {
	
	 	@Autowired
	    private ApplicationService applicationService;
	 	
	 	@Autowired
	 	JobService jobService;

	    @PostMapping
	    public ResponseEntity<Application> applyForJob(@RequestBody Application application) {
	        Application createdApplication = applicationService.createApplication(application);
	        return ResponseEntity.ok(createdApplication); 
	    }

	    @GetMapping("/user/{userId}")
	    public ResponseEntity<List<Job>> listUserApplications(@PathVariable Integer userId) {
	        List<Application> userApplications = applicationService.getApplicationsByUserId(userId);
	        List<Job> jobs = userApplications.stream().map(application -> jobService.findById(application.getJobId()).get()).toList();
	        return ResponseEntity.ok(jobs);
	    }

	    @GetMapping("/{jobId}")
	    public ResponseEntity<List<Application>> listJobApplications(@PathVariable Integer jobId) {
	        List<Application> jobApplications = applicationService.getApplicationsByJobId(jobId);
	        return ResponseEntity.ok(jobApplications);
	    }
	    
	    @PutMapping
	    public ResponseEntity<Application> updateApplication(@RequestBody Application application) {
	        Application createdApplication = applicationService.update(application);
	        return ResponseEntity.ok(createdApplication); 
	    }
	    
	    @DeleteMapping("/{appId}") 
	    public ResponseEntity<Void> deleteApplication(@PathVariable Integer appId) {
	        applicationService.deleteApplication(appId);
	        return ResponseEntity.noContent().build();
	    }
}
