import React from "react";
import FestivalArticle from "./FestivalArticle";

const FestivalList = (props) => {
  const festivalFilms = props.festivalFilms.map((film) => {
    return (
      <li
        className="film__list"
        key={film.filmId}
        id={film.filmId}
        // onClick={getOneFilm}
      >
        <FestivalArticle
          title={film.title}
          synopsis={film.synopsis}
          id={film.filmId}
          handleScore={props.handleScore}
        />
      </li>
    );
  });
  return (
    <div>
      <h2>{props.title}</h2>
      <ul className="films">{festivalFilms}</ul>
    </div>
  );
};

export default FestivalList;
