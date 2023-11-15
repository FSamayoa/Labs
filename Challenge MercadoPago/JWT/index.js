require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const server = express();
const {Client} = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, SECRET_KEY} = process.env;

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

server.use(express.json());
server.use(morgan("dev"));

const credentials = {
  host: DB_HOST,
  port: DB_PORT,
  database: "users",
  user: DB_USER,
  password: DB_PASSWORD,
};

server.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;

    const client = new Client(credentials);

    await client.connect();

    const newUser = await client.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);

    await client.end();

    const hash = newUser.rows[0].password;
    console.log(password);
    console.log(hash);

    bcrypt.compare(password, hash, function (err, result) {
      jwt.sign({id: newUser.id}, "esta es la app de gama", (error, token) => {
        return res.status(200).send("Pase usted");
      });
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

server.post("/signup", async (req, res) => {
  try {
    const {email} = req.body;

    // hash Password palta123  ---> bcxbsajygef62345823
    const password = await bcrypt.hash(req.body.password, 10);

    const client = new Client(credentials);

    await client.connect();

    const query = `INSERT INTO users(email,password) VALUES ($1,$2)`;
    const values = [email, password];

    await client.query(query, values);

    const newUser = await client.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);

    await client.end();

    jwt.sign({id: newUser.id}, "lapalabrasecreta", (error, token) => {
      res.status(200).send(token);
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

const accessMiddleware = (req, res, next) => {
  const userHeader = req.headers["authorization"]; // "BEARER JWT"
  if (typeof userHeader !== undefined) {
    const authString = userHeader.split(" "); // ["BEARER", "JWT"]
    const token = authString[1];

    req.user = token;
    next();
  } else {
    throw new Error("You shall not pass");
  }
};

server.get("/profile", accessMiddleware, (req, res) => {
  try {
    jwt.verify(req.user, "lapalabrasecreta", (error, data) => {
      if (error) throw Error("You shall not pass");
      else res.status(200).send("Bienvenido pase usted");
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});
