CREATE DATABASE `deno-db`;
USE `deno-db`;

CREATE TABLE user (
    `id` INT NOT NULL auto_increment PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `country` VARCHAR(50) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);