
use CoritosBD; 

CREATE TABLE songs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number INT,
    title VARCHAR(255),
    verses TEXT,
    chorus VARCHAR(255),
    type_coro INT,
    status int
);

CREATE TABLE cat_tipos_coros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type_coro int,
    nombre_del_coro VARCHAR(255),
    status INT
);
