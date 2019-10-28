DROP DATABASE IF EXISTS classy;

CREATE DATABASE classy;

USE classy;

CREATE TABLE users (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  salt VARCHAR,
  pass VARCHAR,
  class INT NOT NULL,
  weapon INT NOT NULL,
  armor INT NOT NULL,
  room INT NOT NULL,
  FOREIGN KEY (class)
    REFERENCES (classes(ID))
  FOREIGN KEY (weapon)
    REFERENCES (weapons(ID))
  FOREIGN KEY (armor)
    REFERENCES (armors(ID))
);

CREATE TABLE classes (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR,
  tier INT NOT NULL,
  stam INT NOT NULL,
  life INT NOT NULL,
  mag INT NOT NULL,
  phys INT NOT NULL,
  spd INT NOT NULL,
  crit INT NOT NULL,
  eva INT NOT NULL,
  acc INT NOT NULL,
  mdef INT NOT NULL,
  pdef INT NOT NULL,
);

CREATE TABLE weapons (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR,
  tier INT NOT NULL,
  mag INT NOT NULL,
  phys INT NOT NULL,
  spd INT NOT NULL,
  crit INT NOT NULL,
  acc INT NOT NULL,
);

CREATE TABLE armors (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR,
  tier INT NOT NULL,
  life INT NOT NULL,
  mag INT NOT NULL,
  phys INT NOT NULL,
  spd INT NOT NULL,
  crit INT NOT NULL,
  eva INT NOT NULL,
  acc INT NOT NULL,
  mdef INT NOT NULL,
  pdef INT NOT NULL,
);

CREATE TABLE boss (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR,
  life INT NOT NULL,
  mag INT NOT NULL,
  phys INT NOT NULL,
  spd INT NOT NULL,
  crit INT NOT NULL,
  eva INT NOT NULL,
  acc INT NOT NULL,
  mdef INT NOT NULL,
  pdef INT NOT NULL,
  reward INT NOT NULL,
  FOREIGN KEY (reward)
    REFERENCES armors(ID)  
)
