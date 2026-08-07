/*
Level 5 - HAVING (10 Exercises)
Cities having more than 5 customers.
select city,count(*) from customers group by city having count(*) > 5;
---------------------------------------------------------------------------
Categories with more than 10 products.
select category,count(*) from products group by category having count(*) > 10
-------------------------------------------------------
Customers who placed more than 3 orders.
select customer_id ,count(*) from orders group by customer_id  having count(*) > 3;
--------------------------------------------------------------
Products ordered more than 20 times.
select count(*) from orders group by  product_id having count(*) > 20;
------------------------------------------------------------------
Categories whose average price exceeds 1000.
select category,avg(price) from products  group by category having avg(price) > 1000;
---------------------------------------------------------------------
Customers purchasing more than 10 items.
select sum(quantity) from orders group by  quantity having sum(quantity) > 10;
--------------------------------------------------
Cities whose average customer age exceeds 30.
select city, avg(age) from customers  group by city having avg(age) > 30;
-----------------------------------------------------
Categories having total stock greater than 100.
select category,sum(stock) from  products GROUP BY category HAVING sum(stock) > 100;
--------------------------------------------------------
Products sold more than 50 units.
select sum(quantity) from orders group by product_id  having sum(quantity) > 50;
----------------------------------------------------------------------------
Customers with total purchases greater than 5000 (requires JOIN).
*/

use PRACTICE;

