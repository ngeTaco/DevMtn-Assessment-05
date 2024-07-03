DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS humans;

CREATE TABLE humans(
    human_id INTEGER PRIMARY KEY,
    fname VARCHAR(25) NOT NULL,
    lname VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO humans (human_id, fname, lname, email) VALUES (1,'Bob', 'Personne','bpersonne@yahoo.com');
INSERT INTO humans (human_id, fname, lname, email) VALUES (2,'Jane', 'Doe','jdoe@gmail.com');
INSERT INTO humans (human_id, fname, lname, email) VALUES (3,'Jasmine', 'Debugger','jdebugs@hotmail.com');
INSERT INTO humans (human_id, fname, lname, email) VALUES (4,'John', 'Doe','john_doe@gmail.com');
INSERT INTO humans (human_id, fname, lname, email) VALUES (5,'Jane', 'Hacks','jhacks@gmail.com');

CREATE TABLE animals(
    animal_id INTEGER PRIMARY KEY,
    human_id INTEGER REFERENCES humans,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(25) NOT NULL,
    birth_year INTEGER
);

INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (1, 1,'Fluffy','cat',2010);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (2, 2,'Squiggles','snake',2016);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (3, 3,'Fido','dog',2015);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (4, 2,'Birdy','bird',2017);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (5, 4,'Bubbles','fish',NULL);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (6, 2,'Mr. Hops','rabbit',NULL);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (7, 5,'Bugs','rabbit',2016);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (8, 1,'Cuddles','cat',NULL);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (9, 5,'Buster','dog',2011);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (10, 5,'Twinkie','dog',2014);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (11, 4,'Fluffster','dog',2019);
INSERT INTO animals (animal_id, human_id, name, species, birth_year) VALUES (12, 1,'Twinkles','cat',2014);
