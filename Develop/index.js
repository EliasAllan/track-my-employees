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
      // formattedResult.unshift([("id","first_name" ,"last_name","role_id","manager_id")]);
      console.log(formattedResult);
      console.log(table(formattedResult));
      mainMenu();
    }
  )
}

const viewAllRoles = () => {
  return connection.query(
    // read from pilots
    "SELECT * FROM `role`",
    (err, result) => {
      if(err) console.error(err);
      console.log(result)
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      // formattedResult.unshift([("id","first_name" ,"last_name","role_id","manager_id")]);
      console.log(formattedResult);
      console.log(table(formattedResult));
      mainMenu();
    }
  )
}

const viewAllEmp = () => {
  return connection.query(
    // read from pilots
    "SELECT * FROM employee",
    (err, result) => {
      if(err) console.error(err);
      console.log(result)
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      // formattedResult.unshift([("id","first_name" ,"last_name","role_id","manager_id")]);
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
      type: '',
      name: '',
      message: ""
    },
  ]).then((data) => {
    // employeeArr.push(new Engineer(data.engName, data.engId, data.engEmail, data.engGit))
    // console.log(employeeArr);
    mainMenu();
  })
}

const addEmployee = () => {
  inquirer
  .prompt([
    {
      type: '',
      name: '',
      message: ""
    },
  ])
  .then((data) => {
    // employeeArr.push(new Engineer(data.engName, data.engId, data.engEmail, data.engGit))
    // console.log(employeeArr);
    mainMenu();
  })
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