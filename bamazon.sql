DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ukulele", "Musical Instruments", 150, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flip Flops", "Footwear", 4, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cactus", "Plants", 35, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Metal Vase", "Home Goods", 60, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Glitter Notebook", "Office Supplies", 15.50, 1100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Purse", "Clothing", 400, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Legend of Zelda Orcarina Of Time", "Video Games", 55, 40000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Advil", "Medicine", 12.76, 70987);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Nip", "Pets", 22.68, 6902);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Bottle", "Baby", 16.99, 345);

