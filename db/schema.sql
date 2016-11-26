CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    date TIMESTAMP
);
