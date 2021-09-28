import React from "react";

const FilmArticle = (props) => {
  return (
    <article className="searchFilm">
      {/* <span>{props.id}</span> */}
      <img
        className="searchFilm__poster"
        src={props.image}
        alt={`Poster: ${props.title}`}
      />
      <h2 className="searchFilm__Name">{props.title}</h2>
    </article>
  );
};

export default FilmArticle;
