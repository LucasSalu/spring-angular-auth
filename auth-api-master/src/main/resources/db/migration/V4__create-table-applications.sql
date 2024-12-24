CREATE TABLE applications (
    id SERIAL PRIMARY KEY,  
    user_id INTEGER NOT NULL,
    job_id INTEGER NOT NULL,
    application_date TEXT NOT NULL,
    status TEXT DEFAULT 'Pending' NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (job_id) REFERENCES jobs (id)
);