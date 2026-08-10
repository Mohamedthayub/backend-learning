/*

7.

Find job descriptions having more than 1 employee, but consider only employees earning more than 50,000.

8.

Find job descriptions where the average salary of employees earning more than 40,000 is greater than 55,000.

9.

Find job descriptions where the total salary of employees earning more than 45,000 is greater than 100,000.

10.

Find job descriptions having at least 2 employees whose salary is greater than 50,000.
*/
SELECT `JOB_DESCRIPTION`,COUNT(*) FROM `EMPLOYEE` WHERE `SALARY` > 50000 GROUP BY `JOB_DESCRIPTION` HAVING  COUNT(*) > 1;

-- SELECT `JOB_DESCRIPTION`, AVG(SALARY) FROM `EMPLOYEE` WHERE `SALARY` > 40000 GROUP BY  `JOB_DESCRIPTION` HAVING  `SALARY` > 55000;

-- SELECT  SUM(SALARY) FROM `EMPLOYEE` WHERE `SALARY` > 45000 GROUP BY `JOB_DESCRIPTION` HAVING `SALARY` SUM(`SALARY`) > 100000;

-- SELECT COUNT(*) FROM `EMPLOYEE` WHERE COUNT(*)  <= 2 GROUP BY `JOB_DESCRIPTION` HAVING  SUM(`SALARY`) > 50000;