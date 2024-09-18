-- Create the database
CREATE DATABASE saepes;

-- Use the database
USE saepes;

-- Create the admin table
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO admin (username, password, email) VALUES ('saepes', 'saepes123', 'saepes@gmail.com');

-- Create the contact table
CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message VARCHAR(500) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM contact;

CREATE TABLE quotation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  product VARCHAR(400) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM quotation;

-- Create the booking table
CREATE TABLE booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    product_size VARCHAR(50),
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM booking;

-- Create the products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_colour VARCHAR(100) NOT NULL,
    product_quantity INT NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_size VARCHAR(50)
);

-- Insert product names into the products table
INSERT INTO products (product_name, product_colour, product_quantity, product_price, product_size) 
VALUES 
('GARDEN FENCE', 'N/A', 100, 0.00, 'N/A'),
('WPC TRADITIONAL DECKING', 'N/A', 100, 0.00, 'N/A'),
('WPC 3D EMBOSSING DECKING', 'N/A', 100, 0.00, 'N/A'),
('WPC CO-EXTRUSION DECKING', 'N/A', 100, 0.00, 'N/A'),
('WPC WALL PANEL (Outdoor)', 'N/A', 100, 0.00, 'N/A'),
('PVC Wall PANEL(Indoor)', 'N/A', 100, 0.00, 'N/A'),
('WPC DIY DECKING TILE', 'N/A', 100, 0.00, 'N/A'),
('WPC Ceiling', 'N/A', 100, 0.00, 'N/A');

SELECT * FROM products;

-- Create the orders table
CREATE TABLE orders (
   id INT AUTO_INCREMENT PRIMARY KEY,
   customer_name VARCHAR(100) NOT NULL,
   customer_email VARCHAR(150) NOT NULL,
   customer_phone VARCHAR(20),
   customer_address VARCHAR(255),
   order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   total_price DECIMAL(10, 2) NOT NULL,
   status ENUM('pending', 'confirmed', 'shipped', 'delivered') DEFAULT 'pending'
);

SELECT * FROM orders;

-- Create the order_item table
CREATE TABLE order_items (
   id INT AUTO_INCREMENT PRIMARY KEY,
   order_id INT,
   product_name VARCHAR(100) NOT NULL,
   product_price DECIMAL(10, 2) NOT NULL,
   product_size VARCHAR(50),
   quantity INT NOT NULL,
   FOREIGN KEY (order_id) REFERENCES orders(id)
);

SELECT * FROM order_items;