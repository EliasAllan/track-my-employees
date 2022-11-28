DROP DATABASE IF EXISTS employee_tracker_db;
-- Creates the "employees_db" database --
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

-- Add employee table --
CREATE TABLE employee(
  `id` INT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL
);

-- Add role table --
CREATE TABLE `role`(
  `id` INT PRIMARY KEY,
  `title` VARCHAR(30) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT NOT NULL
);

-- Add department table --
CREATE TABLE department(
  `id` INT PRIMARY KEY,
  `first_name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `role_id` INT NOT NULL,
  `manager_id` INT NOT NULL
);

-- SELECT * FROM role
SELECT * FROM employee
-- SELECT * FROM department