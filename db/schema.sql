CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);