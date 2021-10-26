// const data = require("../index");
const filmsData = require("../data/films");

const getGoldenGlobs = (req, res) => {
  const getFilms = filmsData.getGoldenGlobsDb();

  if (getFilms) {
    res.json({
      error: false,
      data: getFilms,
    });
  } else {
    res.status(404).json({
      error: "films-not-exists",
      message: "No hay peliculas",
    });
  }
};
const getScoreGoldenGlobs = (req, res) => {
  const getScoreFilms = filmsData.getScoreGoldenGlobsDb(req.params.userId);

  if (getScoreFilms) {
    res.json({
      error: false,
      dataScore: getScoreFilms,
    });
  } else {
    res.status(404).json({
      error: "score-not-exists",
    });
  }
};

const saveScoreFilm = (req, res) => {
  const saveFilm = filmsData.saveFilmDb(
    req.body.filmId,
    req.body.score,
    req.params.userId
  );
  //Insertar nota en la DB
  if (saveFilm.lastInsertRowid >= 1) {
    res.json({
      error: false,
      message: "Nota guardada correctamente",
    });
    //Actualizar nota en la DB
  } else if (saveFilm) {
    res.json({
      error: false,
      message: "Nota actualizada correctamente",
    });
  } else {
    res.status(404).json({
      error: "error-save-score",
      message: "Error al guardar la nota, inténtelo más tarde",
    });
  }
};
module.exports = {
  getGoldenGlobs: getGoldenGlobs,
  saveScoreFilm: saveScoreFilm,
  getScoreGoldenGlobs: getScoreGoldenGlobs,
};
