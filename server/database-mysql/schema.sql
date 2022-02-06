CREATE DATABASE project;

USE project;

CREATE TABLE users (
id int NOT NULL AUTO_INCREMENT,
firstname varchar(350) NOT NULL,
lastname varchar(350) NOT NULL,
email varchar(350) NOT NULL,
phonenumber int NOT NULL,
password varchar(350) NOT NULL,
PRIMARY KEY (ID)
);	

CREATE TABLE posts( 
 id int NOT NULL AUTO_INCREMENT,
 title varchar(350) NOT NULL,
 user_id int NOT NULL,
 image varchar(950)NOT NULL,
 PRIMARY KEY (ID),
 foreign key (user_id) references users(id)
);

create table comments( 
  id int NOT NULL AUTO_INCREMENT,
  des varchar(350) NOT NULL,
  post_id INT NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);
create table likes( 
  id int NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*: