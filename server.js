const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee } = require('./lib/queries');

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
      case 'Add a role':
        inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter the name of the role:'
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
          },
          {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for this role:'
          }
        ]).then(answers => {
          addRole(answers.title, answers.salary, answers.departmentId).then(menu);
        });
        break;
      case 'Add an employee':
        inquirer.prompt([
          {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee:'
          },
          {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee:'
          },
          {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee:'
          },
          {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID for the employee (or leave blank if none):',
            default: null
          }
        ]).then(answers => {
          const managerId = answers.managerId || null;  // Handle case if no manager is provided
          addEmployee(answers.firstName, answers.lastName, answers.roleId, managerId).then(menu);
        });
        break;
      case 'Exit':
        process.exit();
    }
  });
};

menu();
