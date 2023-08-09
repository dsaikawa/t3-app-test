create type status as enum ('READY','DONE');
CREATE TABLE if not EXISTS TASKS (id SERIAL NOT NULL,task TEXT NOT NULL, status status NOT NULL);
