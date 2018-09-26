DROP TABLE IF EXISTS builder;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS cpu;
DROP TABLE IF EXISTS mainboard;
DROP TABLE IF EXISTS ram;
DROP TABLE IF EXISTS hhd;
DROP TABLE IF EXISTS ssd;
DROP TABLE IF EXISTS gcard;
DROP TABLE IF EXISTS cases;
DROP TABLE IF EXISTS powerunit;
DROP TABLE IF EXISTS fan;
DROP TABLE IF EXISTS mouse;
DROP TABLE IF EXISTS keyboard;
DROP TABLE IF EXISTS monitor;
DROP TABLE IF EXISTS others;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS supplier;


CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(200) NOT NULL,
  lastname VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  avatar TEXT,
  user_bio VARCHAR(600)
);

CREATE TABLE supplier(
  id SERIAL PRIMARY KEY,
  company VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  avatar TEXT,
  user_bio VARCHAR(600)
);

INSERT INTO supplier (company, email, password, avatar,  user_bio) VALUES (
    'Corsair',
    'corsair@gmail.com',
    'Lx19881013',
    'https://www.google.de/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiSyeClmNfdAhXM6aQKHdfwCNQQjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2Fcorsair&psig=AOvVaw1-eWX6oi2FzjRXganGRDRJ&ust=1538000450466823',
    'Founded in 1994, Corsair has grown from pioneering the high-performance DRAM market to one of the worlds leading providers of enthusiast-grade PC components and peripherals.'
);

CREATE TABLE builder(
  id SERIAL PRIMARY KEY,
  builder_id INT REFERENCES users(id) NOT NULL,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE item(
  id SERIAL PRIMARY KEY,
  builder_id INT REFERENCES builder(id) NOT NULL,
  item_id INT
);

CREATE TABLE cpu(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    power INT,
    frenquency INT,
    max_f INT,
    core INT,
    price INT,
    avatar TEXT,
    bio VARCHAR(600)
);
CREATE TABLE mainboard(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    power INT,
    ram INT,
    ran_type INT,
    pcie INT,
    price INT,
    avatar TEXT,
    bio VARCHAR(1000)
);
CREATE TABLE ram(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    ram_slot INT,
    sata_slot INT,
    usb INT,
    hdmi INT,
    type INT,
    price INT,
    column INT,
    avatar TEXT,
    bio TEXT
);

CREATE TABLE hhd(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    column INT,
    avatar TEXT,
    bio TEXT
);

CREATE TABLE ssd(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    column INT,
    avatar TEXT,
    bio TEXT
);

CREATE TABLE gcard(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    column INT,
    sli INT,
    avatar TEXT,
    bio TEXT
);
CREATE TABLE cases(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    avatar TEXT,
    bio TEXT
);
CREATE TABLE powerunit(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    power INT,
    price INT,
    avatar TEXT,
    bio TEXT
);
CREATE TABLE fan(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    power INT,
    price INT,
    avatar TEXT,
    bio TEXT
);
CREATE TABLE mouse(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    avatar TEXT,
    bio VARCHAR(1000)
);
CREATE TABLE keyboard(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    avatar TEXT,
    bio VARCHAR(1000)
);
CREATE TABLE monitor(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    size INT,
    price INT,
    avatar TEXT,
    bio VARCHAR(1000)
);
CREATE TABLE others(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    companyname VARCHAR(200) NOT NULL,
    type INT,
    price INT,
    avatar TEXT,
    bio VARCHAR(1000)
);
SELECT * FROM supplier;
