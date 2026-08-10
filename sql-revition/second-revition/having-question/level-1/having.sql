use PRACTICE;


/*
Level 1 — Basic HAVING
1. Job count

Find job descriptions that have more than 1 employee.
SELECT `JOB_DESCRIPTION`, COUNT(*) FROM `EMPLOYEE` GROUP BY `JOB_DESCRIPTION` HAVING COUNT(*) > 1;

2. Job count

Find job descriptions that have at least 2 employees.
SELECT `JOB_DESCRIPTION`, COUNT(*) FROM `EMPLOYEE` GROUP BY `JOB_DESCRIPTION` HAVING COUNT(*) > 2;


3. Average salary
Find job descriptions whose average salary is greater than 50,000.
SELECT `JOB_DESCRIPTION`, AVG(SALARY) FROM `EMPLOYEE` GROUP BY `JOB_DESCRIPTION` HAVING AVG(`SALARY`)  > 50000;

4. Total salary

Find job descriptions whose total salary is greater than 100,000.
SELECT  `JOB_DESCRIPTION`, SUM(SALARY) FROM `EMPLOYEE` GROUP BY `JOB_DESCRIPTION` HAVING SUM(`SALARY`) > 100000;

5. Maximum salary

Find job descriptions where the maximum salary is greater than 60,000.


SELECT `JOB_DESCRIPTION`,SUM(SALARY) FROM `EMPLOYEE`  GROUP BY `JOB_DESCRIPTION` HAVING MAX(`SALARY` ) > 60000;
6. Minimum salary

Find job descriptions where the minimum salary is greater than 40,000.

SELECT `JOB_DESCRIPTION`,SUM(SALARY) FROM `EMPLOYEE`  GROUP BY `JOB_DESCRIPTION` HAVING MIN(`SALARY` ) < 40000;
*/

