# Employee Tracker

## Description

The Employee Tracker is a command-line application designed to manage a company's employee database. It allows users to view and manage departments, roles, and employees, providing an interface for non-developers to interact with and modify the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run the Employee Tracker project, follow these steps:

## Usage

- View all departments: Displays a list of all departments in the company.
- View all roles: Shows all job roles, their salaries, and their respective departments.
- View all employees: Lists all employees along with their roles, salaries, departments, and managers.
- Add a department: Allows you to create a new department.
- Add a role: Prompts for role name, salary, and department ID to add a new role.
- Add an employee: Prompts for employee details (first name, last name, role, and manager) to add a new employee.
- Update an employee role: Enables you to change an employee's role in the company.

![alt text](assets/images/video.gif)
 
   - DOWNLOAD VIDEO: [Demo Video](assets/images/Video-file.webm)

## Credits

- Project built by Tai. Special thanks to the following resources for guidance:
  - [Inquirer.js documentation](https://www.npmjs.com/package/inquirer)
  - [PostgreSQL documentation](https://www.postgresql.org/docs/)
  - [dotenv package](https://www.npmjs.com/package/dotenv)

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Badges: 
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

- Manage departments, roles, and employees.
- View, add, and update employees and roles.
- Command-line interface for interacting with the database.

## TEST

To run tests, use the following command:
npm test



```bash
1. Clone the repository:
   git clone https://github.com/Justbeingtai/Employee-Tracker.git

2. Navigate to the project directory:
   cd Employee-Tracker

3. Install dependencies:
   Install the required npm packages using:
   npm install

4. Set up PostgreSQL:
   - Ensure PostgreSQL is installed and running on your system.
   - Create a new database using the following command in PostgreSQL:
     CREATE DATABASE employee_tracker_db;

5. Run the SQL schema:
   Execute the SQL script to set up the required tables:
   psql -U postgres -d employee_tracker_db -f db/schema.sql

6. Seed the database (optional):
   If you'd like to pre-populate the database with sample data, run:
   psql -U postgres -d employee_tracker_db -f db/seeds.sql

7. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables with your PostgreSQL details:
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_NAME=employee_tracker_db
   DB_HOST=localhost
   DB_PORT=5432

8. Run the application:
   Finally, start the application using:
   node server.js
