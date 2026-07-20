/*
Level 4: GROUP BY & HAVING (31–40)
Count employees by department.
SELECT department,COUNT(*) FROM `Employees` GROUP BY department;
--------------------------------------------------
Average salary department-wise.
SELECT department,AVG(salary) FROM `Employees` GROUP BY department;
----------------------------------------------------------------------
Maximum salary department-wise.
SELECT department,MAX(salary) from `Employees` GROUP BY department;
-----------------------------------------------------------------
Minimum salary department-wise.
SELECT department,MIN(salary) from `Employees` GROUP BY department;
-----------------------------------------------------------------
Departments having more than 10 employees.
SELECT COUNT(*) from `Employees` GROUP BY department HAVING COUNT(*) > 10;
---------------------------------------------------------------------
Cities having average salary greater than 70000.
SELECT city,AVG(salary) FROM `Employees` GROUP BY city HAVING AVG(salary) > 70000
------------------------------------------------------------------
Departments whose average age is above 30.
SELECT department,AVG(age) FROM `Employees` GROUP BY department HAVING AVG(age) > 30
-------------------------------------------------------------------------------------------
Departments where total salary exceeds 10 lakhs.
SELECT department, SUM(salary) FROM `Employees` GROUP BY department HAVING SUM(salary) > 1000000;
-----------------------------------------------------------------------------------------------
Find city with highest employee count.
SELECT  city,COUNT(*) AS EMPLOYEE_COUNT FROM `Employees` GROUP BY city ORDER BY EMPLOYEE_COUNT DESC LIMIT 1;
------------------------------------------------------------------------------------
Count employees joined each year
SELECT YEAR(joining_date),COUNT(joining_date) FROM `Employees` GROUP BY YEAR (joining_date)
*/
