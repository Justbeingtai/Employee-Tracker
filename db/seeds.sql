-- Departments
INSERT INTO department (name) VALUES ('Engineering'), ('Sales'), ('Finance');

-- Roles
INSERT INTO role (title, salary, department_id) 
VALUES 
('Software Engineer', 80000, 1), 
('Sales Lead', 60000, 2), 
('Accountant', 70000, 3);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tai', 'Ho', 1, NULL),  -- Manager
('Diem', 'Ly', 2, 1),   -- Employee reporting to John
('Tyler', 'Calvert', 3, NULL); -- Manager
