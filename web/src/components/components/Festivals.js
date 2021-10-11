// import React from "react";

const Festivals = (props) => {
  const festivalFilms = props.festivalFilms.map((film) => {
    return (
      <li
        className="film__list"
        key={film.filmId}
        id={film.filmId}
        // onClick={getOneFilm}
      >
        {film.title}
        {film.synopsis}
        {/* <FilmArticle title={film.title} image={film.image} id={film.id} /> */}
      </li>
    );
  });
  return <ul className="films">{festivalFilms}</ul>;
};

export default Festivals;
