/*
Level 3: Aggregate Functions (21–30)
Count total employees.
SELECT COUNT(*) AS employee_count FROM `Employees`;
--------------------------------------------
Count employees in IT.
SELECT COUNT(*) FROM `Employees` WHERE department = 'IT';
-------------------------------------------------------
Find average salary.
SELECT AVG(salary)  FROM `Employees`;
----------------------------------
Find maximum salary.
SELECT MAX(salary)  FROM `Employees`;
----------------------------------
Find minimum salary.
SELECT Min(salary)  FROM `Employees`;
----------------------------------
Find total salary paid.
SELECT SUM(salary) FROM `Employees`;
-----------------------------------
Find average salary in HR.
SELECT AVG(salary) as HR_AVG_SALARY FROM `Employees` WHERE department = 'HR';
--------------------------------------------------------------------------
Find maximum age.
SELECT MAX(age) FROM `Employees`;
-----------------------------------------
Count employees in each city.
SELECT city,COUNT(city) FROM `Employees` GROUP BY city ;
------------------------------------------------
Find total salary department-wise.
SELECT department,SUM(salary) FROM `Employees` GROUP BY department;
*/

