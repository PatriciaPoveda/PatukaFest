import React, { useState } from "react";

const FestivalArticle = (props) => {
  const [score, setScore] = useState("");
  const getScore = (ev) => {
    const scoreNumber = parseFloat(ev.target.value);
    setScore(scoreNumber);
  };
  const saveScore = (ev) => {
    ev.preventDefault();
    const filmId = ev.target.id;
    props.handleScore({
      filmId: filmId,
      score: score,
    });
    ev.target.reset();
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
      <p>{props.score}</p>
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
