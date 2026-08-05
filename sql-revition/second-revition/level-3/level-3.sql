USE PRACTICE;

/*
Level 3 - Aggregate Functions (10 Exercises)
Count total customers.
select count(*) as coustomer_count from customers;
--------------------------------------------------
Count products in Electronics.
select count(*) as product_count from products;
-----------------------------------------------------
Find maximum product price.
select * from  products  order by  price desc limit 1;
---------------------------------------------------------
Find minimum product price.
select * from  products  order by  price asc limit 1;
---------------------------------------------------------
Find average product price.
select avg(price) from products 
----------------------------------------------------------
Find total stock available.
select sum(stock)  as total_stock from products;
----------------------------------------------------------
Find average customer age.
select avg(age) from customers;
----------------------------------------------------------
Find highest stock.
select * from  products  order by  price desc limit 1;
---------------------------------------------------------- 
Find lowest stock.
select * from  products  order by  price asc limit 1
----------------------------------------------------------
*/

