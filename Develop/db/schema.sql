DROP DATABASE IF EXISTS employee_tracker_db;
-- Creates the "employees_db" database --
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

-- Add employee table --
CREATE TABLE department(
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

-- Add role table --
CREATE TABLE `role` (
  `id` INT ,
  `title` VARCHAR(30) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- Add department table --
CREATE TABLE employee(
  `id` INT ,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `role_id` INT,
  `manager_id` INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES `role`(id)
  ON DELETE SET NULL
  
);

-- SELECT * FROM role
-- SELECT * FROM employee
-- SELECT * FROM department