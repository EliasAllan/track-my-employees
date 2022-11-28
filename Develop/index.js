const inquirer = require("inquirer");


    inquirer
      .prompt([
        {
          type: 'Input',
          name: 'engName',
          message: "What is the engineer's name ?"
        },
        {
          type: 'Input',
          name: 'engId',
          message: "What is the engineer's ID ?"
        },
        {
          type: 'Input',
          name: 'engEmail',
          message: "What is the engineer's email ?"
        },
        {
          type: 'Input',
          name: 'engGit',
          message: "What is the engineer's GitHub username ?"
        },
        
      ]).then((data) => {
        // employeeArr.push(new Engineer(data.engName, data.engId, data.engEmail, data.engGit))
        // console.log(employeeArr);
        // mainMenu();
      })
  