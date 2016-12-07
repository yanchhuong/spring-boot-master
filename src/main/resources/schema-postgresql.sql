--DROP TABLE IF EXISTS customer; 

--DROP TABLE IF EXISTS customer ;



--DROP SEQUENCE if EXISTS user_id_seq;
--DROP TABLE IF EXISTS user_details;

 --CREATE TABLE IF NOT EXISTS users (
--     id smallint NOT NULL DEFAULT nextval('user_id_seq'),
 --    name VARCHAR(30)  NULL,
 --- email  VARCHAR(50)  NULL,
 -- address VARCHAR(255)  NULL,
 -- password VARCHAR(20)  NULL,
--  newsletter BOOLEAN  NULL,
--  framework VARCHAR(500)  NULL,
--  sex VARCHAR(1)  NULL,
--  NUMBER INTEGER  NULL,
--  COUNTRY VARCHAR(10)  NULL,
--  SKILL VARCHAR(500)  NULL,
--  role varchar(50)
--);
--ALTER SEQUENCE user_id_seq OWNED BY users.id;



--DROP TABLE IF EXISTS users;
CREATE  TABLE IF NOT EXISTS users(
  id SERIAL,
  username VARCHAR(45) NOT NULL ,
  password VARCHAR(45) NOT NULL ,
  email VARCHAR(45) Not null,
  enabled boolean NOT NULL DEFAULT true ,
  PRIMARY KEY (username));
  
  
--DROP TABLE IF EXISTS user_roles; 

 CREATE TABLE if not EXISTS user_roles (
  user_role_id SERIAL,
  username varchar(45) NOT NULL,
  role varchar(45) NOT NULL,
  PRIMARY KEY (user_role_id)
  );
  
INSERT INTO users(username,password,email,enabled)
VALUES ('user','user','yanchhuong@yahoo.com', true);
--INSERT INTO users(username,password,enabled)
--VALUES ('admin','admin', true);

--INSERT INTO user_roles (username, role)
--VALUES ('admin', 'ROLE_USER');
--INSERT INTO user_roles (username, role)
--VALUES ('admin', 'ROLE_ADMIN');
--INSERT INTO user_roles (username, role)
--VALUES ('user', 'ROLE_USER');


--INSERT INTO user_roles (username, role)
--VALUES ('user', 'ROLE_EMPLOYEE');











