const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees } = require('./lib/queries');

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
      // Add cases for adding departments, roles, employees, updating roles
      case 'Exit':
        process.exit();
    }
  });
};

menu();
