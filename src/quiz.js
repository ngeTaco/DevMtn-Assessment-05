import pg from "pg";
const { Client } = pg;

// Setting Up Postgres in Node
const client = new Client({
  // Your postgres user
  user: "aldog",
  // Postgres password (was set as null during orientation)
  password: null,
  host: "localhost",
  port: 5432,
  database: "cupcakes",
});

await client.connect();

// Problem 01
export const problem01 = await client.query(`
SELECT
  email
FROM
  customers
ORDER BY
  email ASC;
`);
console.log('-- Problem 01 --');
console.log(problem01?.rows);

// Problem 02
export const problem02 = await client.query(`
SELECT
  id
FROM
  orders
    WHERE customer_id = (
      SELECT
        id
      FROM
        customers
      WHERE
        fname = 'Elizabeth'	AND lname = 'Crocker'
      );
`);
// console.log('-- Problem 02 --');
// console.log(problem02?.rows);

// Problem 03
export const problem03 = await client.query(`
SELECT
  SUM(num_cupcakes) as sum
FROM
  orders
WHERE
  processed = 'f';
`);
// console.log('-- Problem 03 --');
// console.log(problem03?.rows);

// Problem 04
export const problem04 = await client.query(`
SELECT
  name,
  SUM(num_cupcakes) AS sum
FROM
  cupcakes
LEFT JOIN orders
    ON orders.cupcake_id = cupcakes.id
GROUP BY
  name
ORDER BY
  name
`);
// console.log('-- Problem 04 --');
// console.log(problem04?.rows);

// Problem 05
export const problem05 = await client.query(`
SELECT
  email,
  SUM(num_cupcakes) AS total_cupcakes
FROM
  customers
LEFT JOIN orders
  ON orders.customer_id = customers.id
GROUP BY
  email
ORDER BY
  total_cupcakes DESC; 
`);
// console.log('-- Problem 05 --');
// console.log(problem05?.rows);

// Problem 06
export const problem06 = await client.query(`
SELECT
  fname,
  lname,
  email
FROM
  customers
LEFT JOIN orders
  ON orders.customer_id = customers.id
WHERE
  cupcake_id = (
    SELECT
      id
    FROM
      cupcakes
    WHERE
      name = 'funfetti'
  )
AND
  processed = 't'
GROUP BY
  fname, lname, email;
`);
console.log('-- Problem 06 --');
// console.log(problem06?.rows);

client.end();