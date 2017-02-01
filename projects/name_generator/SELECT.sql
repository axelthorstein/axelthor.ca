INSERT INTO Names (name, gender, country, attributes) 
VALUES ('Axel', 'M', 'IS', 'OAB');

SELECT * 
FROM Names;

SELECT name 
FROM Names 
WHERE gender='M' 
AND country='NA' 
AND attributes='OAB';