CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    id auto_increment NOT NULL,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    PRIMARY_KEY(id)
);