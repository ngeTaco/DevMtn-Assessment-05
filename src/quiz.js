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
  SELECT * FROM cupcakes
  WHERE name = 'vanilla';
`); 
console.log('-- Problem 01 --');
console.log(problem01?.rows);

// Problem 02
export const problem02 = null;
// console.log('-- Problem 02 --');
// console.log(problem02?.rows);

// Problem 03
export const problem03 = null;
// console.log('-- Problem 03 --');
// console.log(problem03?.rows);

// Problem 04
export const problem04 = null;
// console.log('-- Problem 04 --');
// console.log(problem04?.rows);

// Problem 05
export const problem05 = null;
// console.log('-- Problem 05 --');
// console.log(problem05?.rows);

// Problem 06
export const problem06 = null;
console.log('-- Problem 06 --');
// console.log(problem06?.rows);

client.end();