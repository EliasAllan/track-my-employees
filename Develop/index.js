const inquirer = require("inquirer");
const connection = require("./db/connection")
const { table } = require('table');
// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: 'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee','update an employee role'
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

const viewDepart = () => {
  return connection.query(
    // read from pilots
    "SELECT * FROM department",
    (err, result) => {
      if(err) console.error(err);
      console.log(result)
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      formattedResult.unshift(["id","name"]);
      console.log(formattedResult);
      console.log(table(formattedResult));
      mainMenu();
    }
  )
}

const viewAllRoles = () => {
  return connection.query(
    // read from pilots
    "SELECT role.title,role.id,department.name,role.salary FROM role JOIN department ON department.id = role.department_id",
    (err, result) => {
      if(err) console.error(err);
      console.log(result)
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      formattedResult.unshift(["title","role id","department","salary"]);      console.log(formattedResult);
      console.log(table(formattedResult));
      mainMenu();
    }
  )
}

const viewAllEmp = () => {
  return connection.query(
    // read from pilots
    "SELECT employee.id,employee.first_name,employee.last_name,role.title,department.name,role.salary, CONCAT(manager.first_name, ' ', manager.last_name) FROM employee JOIN role  ON role.id = employee.role_id JOIN department  ON department.id = role.department_id LEFT JOIN employee manager ON manager.id = employee.manager_id;",
    // role.title,department.name,role.salary,employee.first_name FROM employee JOIN role ON department.id = role.department_id",
    (err, result) => {
      if(err) console.error(err);
      console.log(result)
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      formattedResult.unshift(["id","first name" ,"last name","role","department","salary","manager"]);
      console.log(formattedResult);
      console.log(table(formattedResult));
      mainMenu();
    }
  )
}

const addDepartment = () => {
  inquirer
  .prompt([
    {
      type: 'Input',
      name: 'name',
      message: "Enter department name"
    },
  ])
    .then( param => {
      connection.query(
      `INSERT INTO department SET ?`,
      [
        param
      ],
     
      function (err, result) {
        if (err) {
          console.log(err);
        }
        mainMenu();
      });
    });
    
}

const addRole = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the title ?"
    },
    {
      type: 'input',
      name: 'salary',
      message: "What is the salary ?"
    },
    {
      type: 'input',
      name: 'department_id',
      message: "What is the department id ?"
    },
  ])
  .then( param => {
    connection.query(
    `INSERT INTO role SET ?`,
    [
      param
    ],
   
    function (err, result) {
      if (err) {
        console.log(err);
      }
      mainMenu();
    });
  });
}

const addEmployee = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "add first name"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "add last name"
    },
    {
      type: 'input',
      name: 'role_id',
      message: "add role id"
    },
    {
      type: 'input',
      name: 'manager_id',
      message: "add manager id"
    },
  ])
  .then( param => {
    connection.query(
    `INSERT INTO employee SET ?`,
    [
      param
    ],
   
    function (err, result) {
      if (err) {
        console.log(err);
      }
      mainMenu();
    });
  });
}

const mainMenu = () => {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do ?',
      name: 'actions',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee','update an employee role']
    },
  ])

  .then((data) => {
    switch (data.actions) {
    
      case 'view all departments':
        viewDepart();
          break;
      case 'view all roles':
        viewAllRoles();
          break;
      case 'view all employees':
        viewAllEmp();
          break;
      case 'add a department':
        addDepartment();
          break;
      case 'add a role':
        addRole();
          break;
      case 'add an employee':
        addEmployee();
          break;
      default:
          exit();
    }
  });
}
    
  mainMenu();