import React, { useState } from "react";

const FestivalArticle = (props) => {
  const [score, setScore] = useState("");
  const getScore = (ev) => {
    setScore(ev.target.value);
  };
  const saveScore = (ev) => {
    ev.preventDefault();
    const filmId = ev.target.id;
    props.handleScore({
      filmId: filmId,
      score: score,
    });
  };
  return (
    <article className="searchFilm">
      {/* <span>{props.id}</span> */}
      {/* <img
        className="searchFilm__poster"
        src={props.image}
        alt={`Poster: ${props.title}`}
      /> */}
      <h2 className="searchFilm__Name">{props.title}</h2>
      {/* <p>{props.synopsis}</p> */}
      <form action="" onSubmit={saveScore} id={props.id}>
        <label htmlFor="score">Nota</label>
        <input type="text" id="score" onChange={getScore} />
        <input type="submit" />
      </form>
    </article>
  );
};

export default FestivalArticle;
