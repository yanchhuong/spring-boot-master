CREATE  TABLE IF NOT EXISTS users(
  id SERIAL,
  usercd VARCHAR(14) not null,
  username VARCHAR(45) NOT NULL ,
  password VARCHAR(45) NOT NULL ,
  enabled boolean NOT NULL DEFAULT true ,
  PRIMARY KEY (username));
  
    CREATE TABLE if not EXISTS user_roles (
  rid SERIAL,
  username varchar(45) NOT NULL,
  role varchar(45) NOT NULL,
  FOREIGN KEY (username) REFERENCES users(username),
  PRIMARY KEY (rid)
  );

  CREATE TABLE if not EXISTS category (
  catgid SERIAL,
  parentid integer NULL,
  nm_eng varchar(50) NOT NULL,
  nm_kh varchar(50)  NULL,
  lvl varchar (3) ,
  pid integer,
  usercd varchar(14),
  regdate varchar(14),
  seq integer,
  vscatgid integer ,
  PRIMARY KEY (catgid)
  );

  CREATE TABLE if not EXISTS filepicture (
  pid SERIAL,
  orname  varchar(100)   NULL,
  randname varchar(100)   NULL,
  regdate varchar (14)    null,
  type varchar(10)        null,
  path varchar(50)       null,
  size integer      default 0 ,
  prid integer      default 0 ,
  username varchar(45)  null,
  PRIMARY KEY (pid)
  );
  
  CREATE TABLE if not EXISTS products (
  prid SERIAL,
  prcd  varchar (16)  NOT NULL,
  title varchar (100) NOT NULL,
  date  varchar (14)  not null,
  price integer       null,
  description varchar (600) null,
  hitcnt integer       null,
  linksite integer     null,
  enable boolean       not null default true,
  catgcd varchar(6)  not null,
  username varchar(45) not null,
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (catgcd) REFERENCES category(catgcd),
  PRIMARY KEY (prcd)
  );
  

  CREATE TABLE if not EXISTS address (
  id SERIAL,
  country  varchar (50)   NULL,
  province varchar (50)    NULL,
  detail  varchar (100)     null,
  username varchar(45) not null,
  status varchar(1)    null,
  FOREIGN KEY (username) REFERENCES users(username),
  PRIMARY KEY (id)
  );
 
  
  CREATE TABLE if not EXISTS comments (
  id SERIAL,
  date  varchar (14)  NOT NULL,
  content varchar (150) NOT NULL,
  prcd   varchar(16)    not null,
  username varchar(45) not null,
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (prcd) REFERENCES products(prcd),
  PRIMARY KEY (id)
  );
 
  CREATE TABLE if not EXISTS favorites (
  id SERIAL,
  prcd   varchar(16)    not null,
  username varchar(45) not null,
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (prcd) REFERENCES products(prcd),
  PRIMARY KEY (id)
  );
 

CREATE TABLE if not exists  conversation(
c_id SERIAL NOT NULL PRIMARY KEY,
user_one varchar(45) NOT NULL,
user_two varchar(45) NOT NULL,
ip varchar(30) DEFAULT NULL,
dtm varchar(11) DEFAULT NULL,
FOREIGN KEY (user_one) REFERENCES users(username),
FOREIGN KEY (user_two) REFERENCES users(username)
);



CREATE TABLE if not exists conversation_reply (
cr_id SERIAL PRIMARY key ,
reply text,
username_fk varchar(45) NOT NULL,
ip varchar(30) NOT NULL,
dtm varchar(14) NOT NULL,
c_id_fk int NOT NULL,
FOREIGN KEY (username_fk) REFERENCES users(username),
FOREIGN KEY (c_id_fk) REFERENCES conversation(c_id)
);

 CREATE TABLE if not EXISTS user_detail (
  id SERIAL,
  username_fk varchar(45)  not NULL,
  fname varchar(45)  NULL,
  lname varchar(45)  NULL,
  sex   varchar(1)   NULL,
  cphone varchar(14) null,
  email varchar(25)  not null,
  regdate varchar(14) not null,
  birthdate varchar(8) null,
  usercd varchar(14) NOT NULL,
  FOREIGN KEY (username_fk) REFERENCES users(username),
  PRIMARY KEY (id) );