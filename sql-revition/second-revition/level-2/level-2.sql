USE PRACTICE;

/*
Level 2 - WHERE Practice (10 Exercises)
Find products priced between 500 and 2000.
select * from products where  price between 500 and 2000;
-------------------------------------------------------
Find customers aged 20, 25, or 30.
select * from customers where age in (20,25,30)
-----------------------------------------------
Find products NOT in category "Furniture".
select * from products where not category = 'Furniture';
---------------------------------------------------
Find customer names starting with "A".
select * from customers where name  like 'A%';
------------------------------------------------------
Find customer names ending with "n".
select  *  from customers where name like '%n';
--------------------------------------------
Find names containing "ar".
select * from customers where name like '%ar%';
--------------------------------------------------
Find products whose stock is greater than 50.
select * from products where stock >  50
---------------------------------------------------
Find customers not from Chennai.
select  * from customers where not city = 'Chennai';
----------------------------------------------------
Find products costing exactly 999.
select * from products where price = 999;
---------------------------------------------------
Find products priced less than 500 or stock less than 5.
select * from products where price < 500 or stock  < 5;

*/

