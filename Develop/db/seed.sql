USE employee_tracker_db;

-- data
INSERT INTO employee
-- columns should match the values below
(id,first_name, last_name,role_id,manager_id)
VALUES 
("1", "Lee", "Spirit","11","111"),
("2", "Bob", "Belcher","22","222"),
("3", "Smith", "Bourne","33","333");

INSERT INTO department
-- columns should match the values below
(id,name)
VALUES 
("1","Legal"),
("2","Security"),
("3","Transport");

INSERT INTO `role`
-- columns should match the values below
(id,title,salary,department_id)
VALUES 
("1","Driver", "40000","1111"),
("2","Teacher", "40000","2222"),
("3","Security", "50000","3333");

