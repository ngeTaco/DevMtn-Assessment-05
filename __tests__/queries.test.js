import * as solution from '../src/queries.js';
import db from '../src/model.js';

describe('Testing queries.js', () => {
  afterAll(async () => {
    await db.close();
  });

  test('query1', async () => {
    const result = await solution.query1;
    expect(result.humanId).toBe(2);
    expect(result.fname).toBe('Jane');
    expect(result.lname).toBe('Doe');
    expect(result.email).toBe('jdoe@gmail.com');
  });

  test('query2', async () => {
    const result = await solution.query2;
    expect(result.animalId).toBe(5);
    expect(result.humanId).toBe(4);
    expect(result.name).toBe('Bubbles');
    expect(result.birthYear).toBe(null);
  });

  test('query3', async () => {
    const result = await solution.query3;
    expect(result.length).toBe(3);
    let names = result.map((animal) => animal.name);
    names.sort();
    expect(names).toEqual(['Bugs', 'Buster', 'Twinkie']);
  });

  test('query4', async () => {
    const result = await solution.query4;
    expect(result.length).toBe(4);
    let birthYears = result.map((animal) => animal.birthYear);
    birthYears.sort();
    expect(birthYears).toEqual([2016, 2016, 2017, 2019]);
  });

  test('query5', async () => {
    const result = await solution.query5;
    expect(result.length).toBe(4);
    let fullNames = result.map((human) => `${human.fname} ${human.lname}`);
    fullNames.sort();
    expect(fullNames).toEqual(['Jane Doe', 'Jane Hacks', 'Jasmine Debugger', 'John Doe']);
  });

  test('query6', async () => {
    const result = await solution.query6;
    expect(result.length).toBe(3);
    for (const animal of result) {
      expect(animal.birthYear).toBe(null);
    }
  });

  test('query7', async () => {
    const result = await solution.query7;
    expect(result.length).toBe(3);
    for (const animal of result) {
      expect(['fish', 'rabbit']).toContain(animal.species);
    }
  });

  test('query8', async () => {
    const result = await solution.query8;
    expect(result.length).toBe(2);
    let emails = result.map((human) => human.email);
    emails.sort();
    expect(emails).toEqual(['bpersonne@yahoo.com', 'jdebugs@hotmail.com']);
  });

  test('printHumansAndAnimals', async () => {
    let result = '';
    console.log = (msg) => (result += msg);
    await solution.printHumansAndAnimals();
    const expectedValues = [
      'Bob',
      'Fluffy',
      'Cuddles',
      'Twinkles',
      'Jane',
      'Squiggles',
      'Birdy',
      'Mr. Hops',
      'Jasmine',
      'Fido',
      'John',
      'Bubbles',
      'Fluffster',
      // 'Jane',
      'Bugs',
      'Buster',
      'Twinkie',
    ];
    for (const value of expectedValues) {
      expect(result).toContain(value);
    }
  });

  test('getHumansByAnimalSpeciesDog', async () => {
    let dogHumansSet = await solution.getHumansByAnimalSpecies('dog');
    let dogHumans = [...dogHumansSet];
    expect(dogHumans.length).toBe(3);
    dogHumans.sort();
    expect(dogHumans).toEqual(['Jane Hacks', 'Jasmine Debugger', 'John Doe']);
  });

  test('getHumansByAnimalSpeciesFrog', async () => {
    let frogHumans = await solution.getHumansByAnimalSpecies('frog');
    expect(frogHumans.size).toBe(0);
  });
});
