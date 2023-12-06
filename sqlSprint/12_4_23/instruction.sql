CREATE DATABASE mars_sept;
USE mars_sept;

-- DDL - Data Definition Language (CREATE, DROP, ALTER, TRUNCATE)
CREATE TABLE mars_movies (
full_name VARCHAR(30),
address VARCHAR(50),
movies VARCHAR(30),
salutation VARCHAR(3)
);

ALTER TABLE mars_movies MODIFY COLUMN movies VARCHAR(100);

-- DML - Data Manipulation Language (INSERT, UPDATE, DELETE)
INSERT INTO mars_movies VALUES(
'Janet Jones',
'1234 W Wallaby Way',
'Pirates of the Caribbean, Clash of the Titans',
'Mrs'
);

INSERT INTO mars_movies (full_name, address, movies, salutation)
VALUES(
"Robert Phill",
"1234 S Sunny Street",
"Forgetting Sarah Marshal, Daddy's Little Girl",
"Mr"
),
(
"Robert Phill",
"1234 S Sunny Street",
"Clash of the Titans",
"Mr"
);

SELECT * FROM mars_movies;

-- INSERT MORE MOVIES BUT THEN MODIFY SO THERE IS ONE MOVIE ENTRY PER TABLE ROW
-- DISABLE SAFE_UPDATES SINCE WE'RE DOING IT ALL NOOB-LIKE
SET SQL_SAFE_UPDATES=0;

INSERT INTO mars_movies (full_name, address, movies, salutation)
VALUES(
  'Janet Jones',
  '1234 W Wallaby Way',
  'Clash of the Titans',
  'Mrs'
),
(
  "Robert Phill",
  "1234 S Sunny Street",
  "Daddy's Little Girl",
  "Mr"
);

UPDATE mars_movies
SET movies='Pirates of the Caribbean'
WHERE full_name='Janet Jones';

UPDATE mars_movies
SET movies='Forgetting Sarah Marshall'
WHERE movies="Forgetting Sarah Marshal, Daddy's Little Girl";

SELECT * FROM mars_movies;

-- -- DOESN'T WORK
-- ALTER TABLE mars_movies ADD PRIMARY KEY(full_name, address);

ALTER TABLE mars_movies ADD COLUMN(id INTEGER);
ALTER TABLE mars_movies DROP COLUMN id;

ALTER TABLE mars_movies
ADD COLUMN(
  id INTEGER AUTO_INCREMENT PRIMARY KEY
)

ALTER TABLE mars_movies DROP COLUMN movies;

DELETE FROM mars_movies WHERE id=3 OR id=4;
ALTER TABLE mars_movies RENAME mars_members;

CREATE TABLE mars_movies (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  member_id INTEGER REFERENCES mars_members(id),
  movies VARCHAR(100)
);

INSERT INTO mars_movies (member_id, movies)
VALUES(1, 'Pirates of the Caribbean'),
(1, 'Clash of the Titans'),
(2, 'Forgetting Sarah Marshall'),
(2, "Daddy's Little Girl"),
(5, 'Clash of the Titans');

ALTER TABLE mars_movies
ADD FOREIGN KEY (member_id)
REFERENCES mars_members(id);

CREATE TABLE mars_salutations (
  id INTEGER AUTO_INCREMENT,
  member_id INTEGER,
  salutation VARCHAR(5),
  PRIMARY KEY(id),
  FOREIGN KEY(member_id) REFERENCES mars_members(id)
);

INSERT INTO mars_salutations (member_id, salutation)
VALUES
(1, 'Mrs'),
(2, 'Mr'),
(5, 'Mr');

ALTER TABLE mars_members DROP COLUMN salutation;

INSERT INTO mars_salutations (member_id, salutation)
VALUES
(null, 'Dr'),
(null, 'Ms');

SELECT * FROM mars_movies;
SELECT * FROM mars_members;
SELECT * FROM mars_salutations;

SELECT * from mars_members
WHERE id
IN(
  SELECT member_id from mars_salutations
  WHERE salutation='Mr'
);
