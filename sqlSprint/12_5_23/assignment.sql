USE mars_sept;

-- create all tables w/ proper columns
CREATE TABLE salesman(
  salesman_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  city VARCHAR(50),
  comission DECIMAL(3, 2),
  PRIMARY KEY(salesman_id)
);
CREATE TABLE customer(
  customer_id INT NOT NULL,
  customer_name VARCHAR(50) NOT NULL,
  city VARCHAR(50),
  grade INT,
  salesman_id INT,
  PRIMARY KEY(customer_id),
  FOREIGN KEY(salesman_id) REFERENCES salesman(salesman_id)
);
CREATE TABLE orders_2(
  order_no INT NOT NULL,
  purch_amt DECIMAL(11, 2) NOT NULL,
  order_date DATE NOT NULL,
  customer_id INT NOT NULL,
  salesman_id INT,
  PRIMARY KEY(order_no),
  FOREIGN KEY(customer_id) REFERENCES customer(customer_id),
  FOREIGN KEY(salesman_id) REFERENCES salesman(salesman_id)
);

-- insert all rows w/ corresponding values
INSERT INTO salesman
VALUES(5001, 'James Hooq', 'New York', 0.15),
(5002, 'Nail Knite', 'Paris', 0.13),
(5005, 'Pit Alex', 'London', 0.11),
(5006, 'Mc Lyon', 'Paris', 0.14),
(5003, 'Lauson Hen', NULL, 0.12),
(5007, 'Paul Adam', 'Rome', 0.13);

INSERT INTO customer
VALUES(3002, 'Nick Rimando', 'New York', 100, 5001),
(3005, 'Graham Zusi', 'California', 200, 5002),
(3001, 'Brad Guzan', 'London', NULL, NULL),
(3004, 'Fabian Johns', 'Paris', 300, 5006),
(3007, 'Brad Davis', 'New York', 200, 5001),
(3009, 'Geoff Camero', 'Berlin', 100, NULL),
(3008, 'Julian Green', 'London', 300, 5002),
(3003, 'Jozy Altidor', 'Moscow', 200, 5007);

INSERT INTO orders_2
VALUES(70001, 150.5, '2016-10-05', 3005, 5002),
(70009, 270.65, '2016-09-10', 3001, NULL),
(70002, 65.26, '2016-10-05', 3002, 5001),
(70004, 110.5, '2016-08-17', 3009, NULL),
(70007, 948.5, '2016-09-10', 3005, 5002),
(70005, 2400.5, '2016-07-27', 3007, 5001),
(70008, 5760, '2016-09-10', 3002, 5001),
(70010, 1983.43, '2016-10-10', 3004, 5006),
(70003, 2480.4, '2016-10-10', 3009, NULL),
(70012, 250.45, '2016-06-27', 3008, 5002),
(70011, 75.29, '2016-08-17', 3003, 5007);

-- queries
-- -- a) verify it's all in there
SELECT * FROM salesman;
SELECT * FROM customer;
SELECT * FROM orders_2;

-- -- b) fix the spelling of 'comission'
ALTER TABLE salesman RENAME COLUMN comission TO commission;

-- -- 1) display name and commission of all the salesmen
SELECT name, commission FROM salesman;

-- -- 2) retrieve salesman id of all salesmen from orders table w/o repeats
SELECT DISTINCT salesman_id FROM orders_2 WHERE salesman_id IS NOT NULL;

-- -- 3) display names and city of salsemen who belong to Paris
SELECT name, city FROM salesman WHERE city='Paris';

-- -- 4) display all information for customers whose grade is 200
SELECT * FROM customer WHERE grade=200;

-- -- 5) display order number, order date and purchase amount for orders via salesman_id of 5001
SELECT order_no, order_date, purch_amt FROM orders_2 WHERE salesman_id=5001;

-- -- 6) display all customers who either belong to New York or grade is not > 100 (is NULL < 100...?)
SELECT * FROM customer WHERE city='New York' OR NOT grade>100 OR grade IS NULL;

-- -- 7) find/display salesmen with commission between 0.12 and 0.14
SELECT * FROM salesman WHERE commission BETWEEN 0.12 AND 0.14;

-- -- 8) find/display customers whose names end w/ 'n'
SELECT * FROM customer WHERE customer_name LIKE '%n';

-- -- 9) display salesmen whose name begins w/ 'N' and 4th char is 'l'
SELECT * FROM salesman WHERE name LIKE 'N__l%';

-- -- 10) display customers whose grade is NULL
SELECT * FROM customer WHERE grade IS NULL;

-- -- 11) display sum of all purchase amounts
SELECT SUM(purch_amt) AS purchase_total FROM orders_2;

-- -- 12) display 3rd-highest grade for each of the cities of the customers
SELECT city, MAX(grade) AS third_highest_grade
FROM customer
WHERE grade < (
  SELECT MAX(grade) FROM customer
    WHERE grade < (
    SELECT MAX(grade) FROM customer
  )
)
GROUP BY city;
-- -- 13) display 2nd-lowest purchase amount per customer, w/ customer ID as well as their lowest purchase amount
SELECT
  customer_id,
  MIN(purch_amt) AS lowest_purchase,
    (SELECT MIN(purch_amt)
    FROM orders_2
    WHERE purch_amt > (
      SELECT MIN(purch_amt) FROM orders_2
    )
  ) AS second_lowest_purchase
FROM orders_2
GROUP BY customer_id;

-- -- 14a) display highest purchase amount for each customer on an arbitrary date -- -- w/ customer id, order date, and highest purchase amt
SELECT customer_id, MAX(purch_amt) as max_purch_amt, order_date
FROM orders_2
WHERE order_date = '2016-09-10'
GROUP BY customer_id;
-- -- 14b) display highest purchase amount for each customer on each order_date
-- -- w/ customer id, order date, and highest purchase amt cols
SELECT
  o1.customer_id,
  o1.order_date,
  MAX(o2.purch_amt) AS max_purchase_amt
FROM
  orders_2 o1
LEFT JOIN
  orders_2 o2 ON o1.customer_id = o2.customer_id
              AND o1.order_date = o2.order_date
GROUP BY
  o1.customer_id, o1.order_date
ORDER BY customer_id ASC;

-- -- 15) display highest purchase amount, w/ customer id and order date, for customers whose highest purchase amount is > 2000 on an arbitrary date
SELECT customer_id, MAX(purch_amt) as max_purch_amt, order_date
FROM orders_2
WHERE order_date = '2016-09-10' AND purch_amt > 2000
GROUP BY customer_id;
-- -- 15b) display highest purchase amount for each day,
-- -- w/ customer id and order date,
-- -- for customers whose highest purchase amount is > 2000
SELECT
  o1.customer_id,
  o1.order_date,
  MAX(o2.purch_amt) AS max_purch_greater_2000
FROM
  orders_2 o1
LEFT JOIN
  orders_2 o2 ON o1.customer_id = o2.customer_id
              AND o1.order_date = o2.order_date
              AND o2.purch_amt > 2000
GROUP BY
  o1.customer_id, o1.order_date
ORDER BY customer_id ASC;

