CREATE TABLE schools (
    id INT PRIMARY KEY ,
    name VARCHAR(50),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);
------------------------- TEST DATA------------------------------------
INSERT INTO schools (name, address, latitude, longitude) 
VALUES 
    ('School A', 'Address 1', 40.71, -74.00),
    ('School B', 'Address 2', 34.05, -118.24);


   


