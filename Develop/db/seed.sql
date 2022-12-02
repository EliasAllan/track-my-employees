USE employee_tracker_db;
-- data
INSERT INTO department
-- columns should match the values below
(id,name)
VALUES 
("1","Management"),
("2","Security"),
("3","Transport"),
("4","Legal");

INSERT INTO `role`
-- columns for role should match the values below
(id,title,salary,department_id)
VALUES 
("1","Team Manager", "40000","1"),
("2","Manager", "40000","1"),
("3","Bodyguard", "40000","2"),
("4","Driver", "50000","3");


INSERT INTO employee
-- columns should match the values below
(id,first_name, last_name,role_id,manager_id)
VALUES 
("1", "Bob","Belcher","1",null),
("2", "Lee","Spirit","2","1"),
("3", "Smith","Bourne","3","2"),
("4", "Morpheus","Osbourne","4","2");