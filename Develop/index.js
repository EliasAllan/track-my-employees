const inquirer = require("inquirer");

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: 'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee','update an employee role'



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
    // switch (data.addemployee) {
    
    //   case 'Add an engineer':
    //       addEng();
    //       break;
    //   case 'Add an intern':
    //       addInt();
    //       break;
    //   default:
    //       exit();
    // }
  });

    
  