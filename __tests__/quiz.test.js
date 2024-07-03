import pg from "pg";
const { Client } = pg;
import * as studentAnswers from '../src/quiz.js';

const client = new Client({
  user: "Devmountain",
  password: null,
  host: "localhost",
  port: 5432,
  database: "cupcakes",
});

await client.connect();

describe('Testing quiz.js', () => {
  afterAll(async () => {
    client.end();
  });

  test('problem01', async () => {
    const result = studentAnswers?.problem01;
    expect(result?.rows).toEqual(
      [
        { email: 'ecrocker@gmail.com' },
        { email: 'hboyardee@yahoo.com' },
        { email: 'mcallender@hotmail.com' }
      ]
    );
  });

  test('problem02', async () => {
    const result = studentAnswers?.problem02;
    expect(result?.rows).toEqual(
      [ { id: 1 }, { id: 3 }, { id: 4 }, { id: 6 }, { id: 8 } ]
    );
  });

  test('problem03', async () => {
    const result = studentAnswers?.problem03;
    expect(result?.rows).toEqual(
      [ { sum: '209' } ]
    );
  });

  test('problem04', async () => {
    const result = studentAnswers?.problem04;
    expect(result?.rows).toEqual(
      [
        { name: 'carrot cake', sum: '10' },
        { name: 'chocolate', sum: null },
        { name: 'funfetti', sum: '13' },
        { name: 'raspberry', sum: '25' },
        { name: 'red velvet', sum: '215' },
        { name: 'vanilla', sum: '202' }
      ]
    );
  });

  test('problem05', async () => {
    const result = studentAnswers?.problem05;
    expect(result?.rows).toEqual(
      [
        { email: 'ecrocker@gmail.com', total_cupcakes: '265' },
        { email: 'hboyardee@yahoo.com', total_cupcakes: '184' },
        { email: 'mcallender@hotmail.com', total_cupcakes: '16' }
      ]
    );
  });

  test('problem06', async () => {
    const result = studentAnswers?.problem06;
    expect(result?.rows).toEqual(
      [
        { fname: 'Hector', lname: 'Boyardee', email: 'hboyardee@yahoo.com' }
      ]
    );
  });
});