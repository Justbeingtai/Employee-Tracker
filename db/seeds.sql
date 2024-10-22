-- Insert Departments
INSERT INTO department (name) VALUES 
  ('Engineering'),
  ('Sales'),
  ('Finance');

-- Insert Roles
INSERT INTO role (title, salary, department_id) VALUES 
  ('Software Engineer', 80000, 1),
  ('Sales Lead', 60000, 2),
  ('Accountant', 70000, 3);

-- Insert Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
  ('John', 'Doe', 1, NULL), 
  ('Jane', 'Smith', 2, 1), 
  ('Alice', 'Johnson', 3, NULL);
