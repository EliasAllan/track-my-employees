DROP DATABASE IF EXISTS employee_tracker_db;
-- Creates the "employees_db" database --
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

-- Add employee table --
CREATE TABLE department(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
);

-- Add role table --
CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- Add department table --
CREATE TABLE employee(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);

-- SELECT * FROM role
-- SELECT * FROM employee
-- SELECT * FROM department