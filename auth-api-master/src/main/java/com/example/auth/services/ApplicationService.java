package com.example.auth.services;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.auth.domain.application.Application;
import com.example.auth.repositories.ApplicationRepository;

@Service
public class ApplicationService{

    @Autowired
    private ApplicationRepository applicationRepository;

    
    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }
    
    public Application update(Application application) {
        return applicationRepository.saveAndFlush(application);
    }

    
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    
    public Optional<Application> getApplicationById(Integer id) {
        return applicationRepository.findById(id);
    }

    
    public List<Application> getApplicationsByUserId(Integer userId) {
        return applicationRepository.findByUserId(userId);
    }

    
    public List<Application> getApplicationsByJobId(Integer jobId) {
        return applicationRepository.findByJobId(jobId);
    }

    
    public void deleteApplication(Integer id) {
        if (applicationRepository.existsById(id)) {
            applicationRepository.deleteById(id);
        } else {
            throw new RuntimeException("Application not found with id: " + id);
        }
    }
}
