import React, { useState } from "react";
import FilmArticle from "./FilmArticle";

const FilmList = (props) => {
  const [filmId, setFilmId] = useState("");

  //Separar "useState" y la funcion recibida por props en dos funciones diferentes.
  const getOneFilm = (ev) => {
    setFilmId(ev.currentTarget.id);
    props.handleFilm(filmId);
  };
  const films = props.allFilms.map((film) => {
    return (
      <li
        className="film__list"
        key={film.id}
        id={film.id}
        onClick={getOneFilm}
      >
        <FilmArticle title={film.title} image={film.image} id={film.id} />
      </li>
    );
  });
  return <ul className="films">{films}</ul>;
};

export default FilmList;
