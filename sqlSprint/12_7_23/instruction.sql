-- STORED PROCEDURES examples (continued)
-- make use of the OUT param
DELIMITER ;;
CREATE PROCEDURE get_product_val(IN id VARCHAR(6), OUT val INT)
BEGIN -- {
    SELECT price INTO val
    FROM product
    WHERE product_id = id;
END;; -- }
CALL get_product_val('EL101', @value); -- call it, give the OUT param
SELECT @value; -- access the output val

-- make use of INOUT param
DELIMITER ;;
CREATE PROCEDURE get_name_and_desc(INOUT p_name varchar(50))
BEGIN
  DECLARE product_description VARCHAR(30);
  SELECT product_desc INTO product_description
    FROM product
        WHERE product_name = p_name;
  SET p_name = CONCAT(p_name, " ", product_description);
END;;

SET @p_name = 'laptop';
CALL get_name_and_desc(@p_name);
SELECT @p_name;

-- FUNCTION examples
DELIMITER ;;
CREATE FUNCTION get_price(id VARCHAR(10)) -- no "IN" required as a function always takes input
RETURNS INT -- distinguishes from a PROCEDURE
DETERMINISTIC -- pure function, same input always results in same output
BEGIN
  DECLARE product_price INT;
    SELECT price INTO product_price
    FROM product
        WHERE product_id = id;
    RETURN product_price;
END;;

-- a FUNCTION is called when SELECTED or when within a CALLed procedure
SELECT get_price('EL101') -- will return all products' rows but with the singular price value
FROM products; -- LIMIT it for just one row

-- CURSOR: returning/storing many rows from a PROCEDURE or FUNCTION
DELIMITER ;;
CREATE PROCEDURE get_product_categories(OUT categories VARCHAR(50))
BEGIN
  -- placeholder for each category name
  DECLARE temp_product_category VARCHAR(1000) DEFAULT "";
    -- flag for terminating the loop
    DECLARE finished INT DEFAULT 0;
    -- name the CURSOR
    DECLARE current_category
    -- a CURSOR is similar to a JS array(?)
    CURSOR FOR
      -- get an array of unqiue category names from products table
      SELECT DISTINCT product_category FROM products;
    -- if no categories are left to visit, set the termination flag
        -- -- aka "continue if another value is found"
    DECLARE CONTINUE HANDLER
      FOR NOT FOUND SET finished = 1;
    -- must 'open' the cursor to do anything with it
    OPEN current_category;
    -- label/begin the loop
    get_category: LOOP
    -- put the CURSOR's current value into the placeholder
    FETCH current_category INTO temp_product_category;
        -- if the current value has the 'finished' flag on it
        IF finished = 1
      -- end/break the loop
      THEN LEAVE get_category;
    END IF;
        -- otherwise concat the temp/placeholder category with the current list of categories
        SET categories = CONCAT(temp_product_category, ", ", categories);
  -- have to note the END of the loop
  END LOOP get_category;
    -- have to note the end/close of the CURSOR
    CLOSE current_category;
END;;

CALL get_product_categories(@categories);
SELECT @categories;

-- create a procedure challenge!
-- -- write a procedure to take product id as input
-- -- and check if the price is above 500 then apply a discount of 10%
-- -- and if the price is below 500 then apply 5% discount
DELIMITER ;;
DROP PROCEDURE IF EXISTS applyDiscount;
CREATE PROCEDURE applyDiscount(IN productId INT, OUT discount DECIMAL(10, 2))
BEGIN
    DECLARE discountTen DECIMAL(3,2) DEFAULT 0.90;
    DECLARE discountFive DECIMAL(3,2) DEFAULT 0.95;
    DECLARE productPrice DECIMAL(10, 2);
    SELECT price INTO productPrice
    FROM products
        WHERE id = productId;
    IF productPrice > 500
    THEN SELECT productPrice * discountTen INTO discount;
    ELSE
    SELECT productPrice * discountFive INTO discount;
    END IF;
END;;

CALL applyDiscount(1, @discount); -- => 30.40 (32 * 0.95)
SELECT @discount AS discounted;
CALL applyDiscount(2, @discount); -- => 82.65 (87 * 0.95)
SELECT @discount AS discounted;
CALL applyDiscount(3, @discount); -- => 74.10 (78 * 0.95)
SELECT @discount AS discounted;

-- TRIGGER examples
-- -- using a 'login' table and a 'loginHistory' table
CREATE TRIGGER beforeLoginUpdate
  BEFORE UPDATE ON login
    FOR EACH ROW
    INSERT INTO loginHistory
      SET
        userId = OLD.userId,
        pword = OLD.pword,
        updatedOn = NOW();
        