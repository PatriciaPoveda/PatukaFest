// import React from "react";
import FilmList from "../components/FilmList";
import FilmSearch from "../components/FilmSearch";
import Festivals from "../components/Festivals";
import Header from "./Header";
// import Footer from "./Footer";

const Main = (props) => {
  return (
    <>
      <Header userName={props.userName} signOff={props.signOff}></Header>
      <div className="main">
        <section className="mainPage">
          <h2 className="title">Sección principal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            optio, repellendus molestias officia quos voluptatum doloribus magni
            quasi sapiente quidem temporibus aspernatur nihil asperiores,
            impedit saepe unde vel pariatur quam.
          </p>
        </section>
        <details>
          <summary>Buscador de películas</summary>
          <FilmSearch handleSearchFilm={props.handleSearchFilm} />
          <FilmList
            allFilms={props.allFilms}
            handleFilm={props.handleFilm}
          ></FilmList>
        </details>
        <details>
          <summary>Festivales</summary>
          <Festivals></Festivals>
        </details>
      </div>

      {/* <Footer></Footer> */}
    </>
  );
};

export default Main;
