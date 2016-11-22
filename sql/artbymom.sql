CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  description VARCHAR,
  thumbnail VARCHAR
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE project_categories (
    project_id INTEGER,
    category_id INTEGER
);