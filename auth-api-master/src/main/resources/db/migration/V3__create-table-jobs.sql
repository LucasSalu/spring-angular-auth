CREATE TABLE jobs (
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    created_by INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (created_by) REFERENCES users (id)
);