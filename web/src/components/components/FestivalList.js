import React from "react";
import { Link } from "react-router-dom";
import FestivalArticle from "./FestivalArticle";
import Header from "../layout/Header";

const FestivalList = (props) => {
  const festivalFilms = props.filmsGodenGlobs.map((film) => {
    return (
      <li className="film__list" key={film.filmId} id={film.filmId}>
        <FestivalArticle
          title={film.title}
          synopsis={film.synopsis}
          id={film.filmId}
          score={film.score}
          handleScore={props.handleScore}
          // scoreMessage={props.scoreMessage}
        />
      </li>
    );
  });
  return (
    <div>
      <Header userName={props.userName} signOff={props.signOff}></Header>
      <h2>{props.title}</h2>
      <ul className="films">{festivalFilms}</ul>
      <p>{props.scoreMessage}</p>
      <Link to="/score/golden-globs-2022">Ver notas</Link>
      <Link to="/">Volver a menú principal</Link>
    </div>
  );
};

export default FestivalList;
