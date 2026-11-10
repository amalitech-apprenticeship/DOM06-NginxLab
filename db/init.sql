CREATE DATABASE IF NOT EXISTS dog_shop;

USE dog_shop;
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

IF NOT EXISTS (SELECT 1 FROM items) THEN
INSERT INTO items (name, description, price) VALUES
('Dog Collar', 'A comfortable collar for your dog', 10.99),
('Dog Leash', 'A durable leash for walking your dog', 15.99),
('Dog Bed', 'A cozy bed for your dog to sleep in', 49.99),
('Dog Food', 'Nutritious food for your dog', 29.99),
('Dog Toy', 'A fun toy for your dog to play with', 9.99);
