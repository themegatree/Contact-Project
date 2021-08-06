CREATE TABLE contact_lists(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    email VARCHAR(60),
    dofb DATE
);

CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60)
);

CREATE TABLE "contacts~tags"(
    id SERIAL PRIMARY KEY,
    contactid INT,
    tagid INT
);