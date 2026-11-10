CREATE DATABASE IF NOT EXISTS dog_shop;

USE dog_shop;
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO items (name, description, price)
SELECT * FROM (
    SELECT 'Dog Collar' AS name, 'A comfortable collar for your dog' AS description, 10.99 AS price
    UNION ALL SELECT 'Dog Leash', 'A durable leash for walking your dog', 15.99
    UNION ALL SELECT 'Dog Bed', 'A cozy bed for your dog to sleep in', 49.99
    UNION ALL SELECT 'Dog Food', 'Nutritious food for your dog', 29.99
    UNION ALL SELECT 'Dog Toy', 'A fun toy for your dog to play with', 9.99
) AS seed
WHERE NOT EXISTS (SELECT 1 FROM items);
