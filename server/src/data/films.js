const data = require("../index");

const getGoldenGlobsDb = () => {
  const query = data.db.prepare(`SELECT * FROM awars2022 WHERE awars IN (0,2)`);
  const films = query.all();
  return films;
};

const getScoreGoldenGlobsDb = (userId) => {
  // const query = data.db.prepare(`SELECT * FROM score2022 WHERE userId = ?`);

  const query = data.db.prepare(
    `SELECT * FROM awars2022 INNER JOIN score2022 ON score2022.filmId = awars2022.filmId WHERE score2022.userId = ? AND awars2022.awars IN (0,2)`
  );
  const scoreFilms = query.all(userId);
  return scoreFilms;
};

const saveFilmDb = (filmId, score, userId) => {
  const query = data.db.prepare(
    `SELECT * FROM score2022 WHERE filmId = ? AND userId = ?`
  );
  const film = query.get(filmId, userId);
  if (film) {
    const query = data.db.prepare(
      `UPDATE score2022 SET score = ? WHERE filmId = ? AND userId = ?`
    );
    const user = query.run(score, filmId, userId);
    return film;
  } else {
    const query = data.db.prepare(
      `INSERT or IGNORE INTO score2022 (userId, filmId, score) VALUES (?, ?, ?)`
    );
    const scoreData = query.run(userId, filmId, score);
    return scoreData;
  }
};

module.exports = {
  getGoldenGlobsDb: getGoldenGlobsDb,
  saveFilmDb: saveFilmDb,
  getScoreGoldenGlobsDb: getScoreGoldenGlobsDb,
};
