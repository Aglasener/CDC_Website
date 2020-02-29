DROP DATABASE IF EXISTS CDCdb;
CREATE DATABASE CDCdb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS riskvalues_db;
CREATE database riskvalues_db;

USE riskvalues_db;

CREATE TABLE riskvalues (
  ID INT NOT NULL,
  factor VARCHAR(100) NOT NULL,
  options VARCHAR(100) NULL,
  points INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE riskresults (
  ID INT NOT NULL,
  points INT NOT NULL,
  PRIMARY KEY (id)
);






