const cors = require("cors");
const express = require("express");
const apiUsers = require("./api/users");
const getFilmsFestival = require("./api/films");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const dbPath = path.join(__dirname, "/../db/database.db");
module.exports.db = new Database(dbPath, {
  verbose: console.log,
});

app.use(express.static("./public"));

app.post("/api/login", apiUsers.login);
app.post("/api/create", apiUsers.userSignUp);
app.post("/api/delete/:userId", apiUsers.userDelete);
app.post("/api/update/:userId", apiUsers.userUpdate);
app.get("/api/festivals", getFilmsFestival);
