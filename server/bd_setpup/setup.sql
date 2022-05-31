DROP TABLE IF EXISTS UserPost;

CREATE TABLE UserPost(
    id serial PRIMARY KEY,
    username VARCHAR (50),
    post VARCHAR (1000) NOT NULL,
    title VARCHAR (50) NOT NULL
);
COPY UserPost
FROM $str$/
