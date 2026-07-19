
/*
Sort employees by salary ascending.
SELECT * FROM `Employees` ORDER BY salary ASC;
-----------------------------------------------
Sort employees by salary descending.
SELECT * FROM `Employees` ORDER BY salary DESC;
--------------------------------------------
Show top 5 highest paid employees.
SELECT * FROM `Employees` ORDER BY salary DESC LIMIT 5;
-----------------------------------------------------
Show youngest employee.
SELECT * FROM `Employees` ORDER BY age ASC  LIMIT 1;
----------------------------------------------------
Show oldest employee.
SELECT * FROM `Employees` ORDER BY age DESC LIMIT 1;
---------------------------------------------------
Find employee with second highest salary.
SELECT * FROM `Employees` ORDER BY salary DESC LIMIT 1 OFFSET 1;
----------------------------------------------
Show employees ordered by department then salary.
SELECT * FROM `Employees` ORDER BY department, salary;
---------------------------------------------------
Show latest joined employee.
SELECT  * FROM `Employees` ORDER BY joining_date  DESC LIMIT 1;
---------------------------------------------
Show earliest joined employee.
SELECT  * FROM `Employees` ORDER BY joining_date ASC LIMIT 1
--------------------------------------------------------
Skip first 10 records and display next 5.
SELECT * FROM `Employees` ORDER BY id LIMIT 5  OFFSET 10;
--------------------------------------------------------------
*/

