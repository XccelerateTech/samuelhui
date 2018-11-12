============== A ==============

CREATE TABLE stock (
    id SERIAL primary key,
    fruit_name VARCHAR(255) not null,
    description_text TEXT,
    quantity_on_stock SERIAL,
    price REAL
);

=============== B ===============

DROP TABLE stock;

=============== C ===============
CREATE TABLE ee (
    employee_id SERIAL primary key,
    first_name VARCHAR(255) not null,
    last_name VARCHAR(255) not null,
    salary SERIAL,
    contract_length SERIAL
);

INSERT INTO ee (first_name, last_name, salary, contract_length) VALUES ('Steven', 'King', 10000, 3);
INSERT INTO ee (first_name, last_name, salary, contract_length) VALUES ('Neena', 'Kochhar', 8000, 2);
INSERT INTO ee (first_name, last_name, salary, contract_length) VALUES ('David', 'Austin', 12000, 2);
INSERT INTO ee (first_name, last_name, salary, contract_length) VALUES ('Nancy', 'Greenberg', 3000, 1);

SELECT first_name, last_name FROM ee WHERE salary >5000 AND salary <11000;
SELECT first_name, last_name FROM ee WHERE contract_length <2;
INSERT INTO ee (first_name, last_name, salary, contract_length) VALUES ('Dick', 'Head', 10, 2);
INSERT INTO ee (first_name, last_name, salary, contract_length) VALUES ('Bubble', 'Butt', 40, 1);
UPDATE ee SET salary = 8000, contract_length = 2 WHERE employee_id = 4;
SELECT * FROM ee ORDER BY salary DESC;

============D ================
CREATE TABLE citrus (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    color VARCHAR(255),
    taste VARCHAR(255)
);

INSERT INTO citrus (name, color, taste) VALUES ('lemon', 'yellow', 'sour');
INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'juicy');
INSERT INTO citrus (name, color, taste) VALUES ('grapefruit', 'orange', 'bitter');
INSERT INTO citrus (name, color, taste) VALUES ('lime', 'green', 'sour');
INSERT INTO citrus (name, color, taste) VALUES ('tangerine', 'yellow', 'sweet');
UPDATE citrus SET color = 'orange' WHERE color = 'yellow';
DELETE FROM citrus WHERE name = 'tangerine';

var pg = require('pg');

var config = {
    user: 'samuel',
    database: 'fruits',
    password: 'samuel',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

client.query('SELECT name FROM fruits WHERE color='orange';', function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})