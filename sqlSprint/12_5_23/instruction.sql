USE mars_sept;

-- create a product table with cols:
-- -- id(pk), name, description, category, price, stock
CREATE TABLE products(
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    category VARCHAR(50) NOT NULL,
    price INTEGER DEFAULT 0,
    stock INTEGER DEFAULT 0,
    PRIMARY KEY(id)
);
-- create an orders table with cols:
-- -- id(pk), type, date, productsId(fk)
CREATE TABLE orders(
	id INTEGER NOT NULL AUTO_INCREMENT,
    type VARCHAR(10),
    date TIMESTAMP,
    productId INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(productId) REFERENCES products(id)
);

INSERT INTO products (name, description, category, price, stock)
VALUES(
	'socks',
    'soft, fluffy, and made for you',
    'footwear',
    32,
    100
),(
	'shoes',
    'awesome sneakers for your awesome feet',
    'footwear',
    87,
    200
),(
	'pants',
    'stylishly ripped in seventy-three different places',
    'legwear',
    78,
    75
);

INSERT INTO orders (type, date, productId)
VALUES('new', CURRENT_TIMESTAMP, 3);

INSERT INTO orders (type, date, productId)
VALUES('repeat', CURRENT_TIMESTAMP, 3),
('new', CURRENT_TIMESTAMP, 1),
('new', CURRENT_TIMESTAMP, 2);

SELECT * FROM products;
SELECT * FROM orders;
