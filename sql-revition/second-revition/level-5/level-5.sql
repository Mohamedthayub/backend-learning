/*
Level 5 - HAVING (10 Exercises)
Cities having more than 5 customers.
select city,count(*) from customers group by city having count(*) > 5;
---------------------------------------------------------------------------
Categories with more than 10 products.
select category,count(*) from products group by category having count(*) > 10
-------------------------------------------------------
Customers who placed more than 3 orders.
Products ordered more than 20 times.
Categories whose average price exceeds 1000.
Customers purchasing more than 10 items.
Cities whose average customer age exceeds 30.
Categories having total stock greater than 100.
Products sold more than 50 units.
Customers with total purchases greater than 5000 (requires JOIN).
*/

use PRACTICE;
select category,count(*) from products group by category having count(*) > 10

select * from orders;