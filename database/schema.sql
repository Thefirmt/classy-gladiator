-- DROP DATABASE IF EXISTS classy;

-- CREATE DATABASE classy;

CREATE TABLE classes (
  ID INTEGER PRIMARY KEY,
  name VARCHAR(30),
  tier SMALLINT NOT NULL,
  stam SMALLINT NOT NULL,
  life SMALLINT NOT NULL,
  mag SMALLINT NOT NULL,
  phys SMALLINT NOT NULL,
  spd SMALLINT NOT NULL,
  crit SMALLINT NOT NULL,
  eva SMALLINT NOT NULL,
  acc SMALLINT NOT NULL,
  mdef SMALLINT NOT NULL,
  pdef SMALLINT NOT NULL
);

CREATE TABLE weapons (
  ID INTEGER PRIMARY KEY,
  name VARCHAR(100),
  tier SMALLINT NOT NULL,
  mag SMALLINT NOT NULL,
  phys SMALLINT NOT NULL,
  spd SMALLINT NOT NULL,
  crit SMALLINT NOT NULL,
  acc SMALLINT NOT NULL
);

CREATE TABLE armors (
  ID INTEGER PRIMARY KEY,
  name VARCHAR(100),
  tier SMALLINT NOT NULL,
  life SMALLINT NOT NULL,
  mag SMALLINT NOT NULL,
  phys SMALLINT NOT NULL,
  spd SMALLINT NOT NULL,
  crit SMALLINT NOT NULL,
  eva SMALLINT NOT NULL,
  acc SMALLINT NOT NULL,
  mdef SMALLINT NOT NULL,
  pdef SMALLINT NOT NULL
);

CREATE TABLE boss (
  ID INTEGER PRIMARY KEY,
  name VARCHAR(50),
  life SMALLINT NOT NULL,
  mag SMALLINT NOT NULL,
  phys SMALLINT NOT NULL,
  spd SMALLINT NOT NULL,
  crit SMALLINT NOT NULL,
  eva SMALLINT NOT NULL,
  acc SMALLINT NOT NULL,
  mdef SMALLINT NOT NULL,
  pdef SMALLINT NOT NULL,
  reward SMALLINT NOT NULL,
  FOREIGN KEY (reward)
    REFERENCES armors(ID)  
);

CREATE TABLE users (
  ID INTEGER PRIMARY KEY,
  salt VARCHAR,
  pass VARCHAR,
  class SMALLINT,
  weapon SMALLINT,
  armor SMALLINT,
  room SMALLINT NOT NULL,
  FOREIGN KEY (class)
    REFERENCES classes(ID),
  FOREIGN KEY (weapon)
    REFERENCES weapons(ID),
  FOREIGN KEY (armor)
    REFERENCES armors(ID)
);

-- GENERATED BY DEFAULT AS IDENTITY 