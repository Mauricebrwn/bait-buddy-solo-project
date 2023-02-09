
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "trip" (
	"id" SERIAL PRIMARY KEY,
	"lake_name" VARCHAR (1000) NOT NULL,
	"date" DATE,
	"is_complete" BOOLEAN
);
CREATE TABLE "catch" (
	"id" SERIAL PRIMARY KEY REFERENCES "trip",
	"fish_type" VARCHAR (80),
	"fish_length" DECIMAL,
	"fish_weight" DECIMAL,
	"lure_bait" VARCHAR (50),
	"time" TIMESTAMPTZ
);


	