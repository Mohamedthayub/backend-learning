/*
Level 4 - GROUP BY (10 Exercises)
Count customers in each city.
select city,count(*) from customers group by city;
-------------------------------------------------
Count products in each category.
select category,count(*) from products group by category
----------------------------------------------------
Find average product price by category.
select category ,avg(price) from products group by category;
-----------------------------------------------------
Find maximum price in each category.
select  category,max(price) from products group by category;
-------------------------------------------------
Find minimum price in each category.
select  category,min(price) from products group by category;
----------------------------------------------------
Find total stock by category.
select category, sum(stock) from products group by category
-----------------------------------------------------
Count orders for each product.
select product_id,count(*) from orders group by product_id;
------------------------------------------------------
Count orders for each customer
select customer_id ,count(*) from orders group by customer_id;
----------------------------------------------------
Find total quantity ordered for each product.
select product_id,count(*) from orders group by product_id;
-----------------------------------------------------
Find total quantity ordered by each customer.
select customer_id,count(*) from orders group by order_id;

*/