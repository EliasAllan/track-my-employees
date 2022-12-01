USE employee_tracker_db;
-- data
INSERT INTO department
-- columns should match the values below
(id,name)
VALUES 
("1","Legal"),
("2","Security"),
("3","Transport");

INSERT INTO `role`
-- columns for role should match the values below
(id,title,salary,department_id)
VALUES 
("1","Driver", "40000","1"),
("2","Bodyguard", "40000","2"),
("3","Teacher", "50000","3");


INSERT INTO employee
-- columns should match the values below
(id,first_name, last_name,role_id,manager_id)
VALUES 
("1", "Lee", "Spirit","1","1"),
("2", "Bob", "Belcher","2","2"),
("3", "Smith", "Bourne","3","3");