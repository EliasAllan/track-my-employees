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
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      // formattedResult.unshift([("id","first_name","last_name","role_id","manager_id")]);
      // console.log(formattedResult);
      console.log(table(formattedResult));
      mainMenu();
    }
  )
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
      // case 'Add an intern':
      //     addInt();
      //     break;
      // default:
      //     exit();
    }
  });
}
    
  mainMenu();