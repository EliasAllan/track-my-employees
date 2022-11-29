USE employee_tracker_db;

-- data
INSERT INTO department
-- columns should match the values below
(id,first_name, last_name,role_id,manager_id)
VALUES 
("1", "Lee", "Spirit","11","111"),
("2", "Bob", "Belcher","22","222"),
("3", "Smith", "Bourne","33","333");

INSERT INTO employee
-- columns should match the values below
(id,name)
VALUES 
("1", "Lee"),
("2", "Bob"),
("3", "Smith");

INSERT INTO department
-- columns should match the values below
(id,first_name, last_name,role_id,manager_id)
VALUES 
("1", "Lee", "Spirit","11","111"),
("2", "Bob", "Belcher","22","222"),
("3", "Smith", "Bourne","33","333");

SELECT * FROM department;