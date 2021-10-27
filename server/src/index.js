const cors = require("cors");
const express = require("express");
const apiUsers = require("./api/users");
const apiFilms = require("./api/films");
const apiGroups = require("./api/groups");
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

//USER ENDPOINT
app.post("/api/login", apiUsers.login);
app.post("/api/create", apiUsers.userSignUp);
app.delete("/api/delete/:userId", apiUsers.userDelete);
app.put("/api/update/:userId", apiUsers.userUpdate);

//AWARS ENDPOINT
app.get("/api/golden-globs", apiFilms.getGoldenGlobs);
app.post("/api/awars/:userId", apiFilms.saveScoreFilm);
app.post("/api/score/golden-globs/:userId", apiFilms.getScoreGoldenGlobs);

//GROUP ENDPOINT
app.post("/api/search-username", apiGroups);
