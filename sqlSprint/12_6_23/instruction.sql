-- JOIN examples
-- INNER JOIN (common records) example => rows from each table which have data
-- don't actually have these tables/data
SELECT p.product_name, p.price, o.order_date
FROM product p INNER JOIN orders o
ON p.product_id = o.product_id;
-- ++ product_name ++++ price ++++ order_date  ++
-- ++	pen               20.25       2022-10-14 ++
-- ++	paperclip         50.00       2022-12-10 ++
-- ++	stapler           32.99       2022-12-27 ++
-- ++ ++++ ++++ ++++ ++++ +++++ ++++ ++++ ++++ ++

-- LEFT JOIN =>
-- -- all rows from the 'left' table,
-- -- common rows from 'right',
-- -- as well as empty rows from 'right'
-- RIGHT JOIN => opposite of LEFT
SELECT p.product_name, p.price, o.order_date
FROM product p LEFT JOIN orders o
ON p.product_id = o.product_id;
-- ++ product_name ++++ price ++++ order_date  ++
-- ++	pen	              20.25       2022-10-14 ++
-- ++	paperclip         50.00       2022-12-10 ++
-- ++	stapler           32.99       2022-12-27 ++
-- ++	mousepad          10.50       NULL       ++
-- ++ ++++ ++++ ++++ ++++ +++++ ++++ ++++ ++++ ++

-- VIEW examples
-- modify for real tables/data I have before running
-- can add OR REPLACE between 'CREATE' and 'VIEW'
CREATE VIEW expensive_products AS
SELECT product_id, product_name, product_description, price
FROM product
WHERE price > 500;

-- INDEX examples (modify for real tables/data I have before running)
CREATE INDEX idx_product_description ON products(product_category);
-- more efficient searching on non-pk cols
SELECT * FROM products WHERE product_category = 'electronics';
-- see all indexes present
SHOW INDEXES FROM products;

-- STORED PROCEDURES examples
-- -- define/create a procedure (function)
DELIMITER ;; -- give a different "end of the whole procedure" syntax so we can use semicolons within
CREATE PROCEDURE is_expensive_product(IN id VARCHAR(6))
BEGIN -- {
  DECLARE category VARCHAR(20); -- init a variable
  DECLARE product_price INTEGER;

  SELECT price INTO product_price
    FROM product
    WHERE product_id = id;
  IF product_price > 500 THEN
    SET category = 'expensive';
  ELSE
    SET category = 'not expensive';
  END IF;
  SELECT category;
END;; -- }
-- -- call the procedure
CALL is_expensive_product('EL101');
