USE PRACTICE;


/*
Level 1 - Basic SELECT (10 Exercises)
Display all customers.
select * from customers
-------------------------------------
Display only customer names.
select name from customers
-------------------------------------
Find products costing more than 1000.
select * from  products where  price  > 1000;
--------------------------------------
Find customers older than 25.
select * from customers where age > 25;
------------------------------------------
Show all products sorted by price (highest first).
select * from products ORDER BY price desc; 
---------------------------------------------
Show first 5 products.
select * from products limit 5
----------------------------------------
Find all products whose category is "Electronics".
select * from products where category = 'Electronics';
------------------------------------------------------
Find customers living in Chennai.
select * from customers where city = 'Chennai';
------------------------------------------------
Display unique cities.
select DISTINCT city from customers;
----------------------------------------
Show products with stock less than 10.
select * from products where  stock < 10
---------------------------------------
*/