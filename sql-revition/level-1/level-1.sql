/*'
Show all employees.
SELECT * FROM `Employees`;
--------------------------
Show only employee names.
SELECT NAME FROM `Employees`;
--------------------------------
Find employees whose salary is greater than 50000.
SELECT * FROM `Employees` WHERE salary > 50000;
--------------------------------------------
Find employees from Chennai.
SELECT * FROM `Employees` WHERE city = 'Chennai';
-----------------------------------------------
Find employees aged between 22 and 30.
SELECT * FROM `Employees` WHERE age BETWEEN 22 AND 30
------------------------------------------------
Show employees in HR department.
SELECT * FROM `Employees` WHERE department = 'HR';
---------------------------------------------------
Show employees not in IT department.
SELECT * FROM `Employees` WHERE department !=  'IT'
---------------------------------------------------
Find employees whose name starts with A.
SELECT * FROM `Employees` WHERE name LIKE 'A%';
--------------------------------------------
Find employees whose name ends with n.
SELECT * FROM `Employees` WHERE name LIKE '%n';
---------------------------------------------
Find employees whose city contains "pur"
SELECT * FROM `Employees` WHERE city LIKE "%pur%"
---------------------------------------------------
*/

