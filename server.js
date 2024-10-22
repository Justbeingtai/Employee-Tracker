const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees, addDepartment } = require('./lib/queries');

const menu = () => {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update employee role',
      'Exit'
    ]
  }).then(answer => {
    switch (answer.action) {
      case 'View all departments':
        viewDepartments().then(menu);
        break;
      case 'View all roles':
        viewRoles().then(menu);
        break;
      case 'View all employees':
        viewEmployees().then(menu);
        break;
      case 'Add a department':
        inquirer.prompt({
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:'
        }).then(answer => {
          addDepartment(answer.departmentName).then(menu);
        });
        break;
      // Add cases for adding roles, employees, updating roles
      case 'Exit':
        process.exit();
    }
  });
};

menu();
