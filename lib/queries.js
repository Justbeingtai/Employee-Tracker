const { Pool } = require('pg');
require('dotenv').config();  // Load environment variables

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// View all departments
const viewDepartments = async () => {
  const result = await pool.query('SELECT * FROM department');
  console.table(result.rows);
};

// View all roles
const viewRoles = async () => {
  const result = await pool.query('SELECT * FROM role');
  console.table(result.rows);
};

// View all employees
const viewEmployees = async () => {
  const result = await pool.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, 
    department.name AS department, role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id;
  `);
  console.table(result.rows);
};

// Add a new department
const addDepartment = async (departmentName) => {
  try {
    await pool.query('INSERT INTO department (name) VALUES ($1)', [departmentName]);
    console.log(`Added department: ${departmentName}`);
  } catch (err) {
    console.error(`Error adding department: ${err.message}`);
  }
};

// Add a new role
const addRole = async (title, salary, departmentId) => {
  try {
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    console.log(`Added role: ${title}`);
  } catch (err) {
    console.error(`Error adding role: ${err.message}`);
  }
};

// Add a new employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
    console.log(`Added employee: ${firstName} ${lastName}`);
  } catch (err) {
    console.error(`Error adding employee: ${err.message}`);
  }
};

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee };
