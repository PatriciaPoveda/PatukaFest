const data = require("../index");

const getFilmsFestival = (req, res) => {
  // const getFilms = usersData.getUserDelete();
  // const getFilms = (userName) => {
  const query = data.db.prepare(`SELECT * FROM films `);
  const films = query.all();
  // return films;
  // };

  if (films) {
    res.json({
      error: false,
      data: films,
    });
  } else {
    res.status(404).json({
      error: "films-not-exists",
      message: "No hay peliculas",
    });
  }
};
module.exports = getFilmsFestival;
