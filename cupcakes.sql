CREATE TABLE cupcakes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO cupcakes (name) VALUES ('red velvet');
INSERT INTO cupcakes (name) VALUES ('chocolate');
INSERT INTO cupcakes (name) VALUES ('carrot cake');
INSERT INTO cupcakes (name) VALUES ('vanilla');
INSERT INTO cupcakes (name) VALUES ('funfetti');
INSERT INTO cupcakes (name) VALUES ('raspberry');

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255),
  email VARCHAR(255)
);

INSERT INTO customers (fname, lname, email) VALUES ('Elizabeth', 'Crocker', 'ecrocker@gmail.com');
INSERT INTO customers (fname, lname, email) VALUES ('Marie', 'Callender', 'mcallender@hotmail.com');
INSERT INTO customers (fname, lname, email) VALUES ('Hector', 'Boyardee', 'hboyardee@yahoo.com');


CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers,
  cupcake_id INTEGER REFERENCES cupcakes,
  num_cupcakes INT NOT NULL,
  processed BOOLEAN
);

INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (1, 1, 10, TRUE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (2, 4, 2, TRUE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (1, 3, 10, TRUE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (1, 4, 200, TRUE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (3, 5, 5, TRUE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (1, 6, 25, TRUE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (2, 1, 10, FALSE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (1, 1, 20, FALSE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (3, 1, 100, FALSE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (3, 1, 75, FALSE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (2, 5, 4, FALSE);
INSERT INTO orders (customer_id, cupcake_id, num_cupcakes, processed) VALUES (3, 5, 4, TRUE);