import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import localStorage from "../services/localStorage";
import Landing from "./layout/Landing";
import Main from "./layout/Main";
import UserData from "./user/UserData";
import api from "../services/api";
import apiFilms from "../services/apiFilms";
import apiFestival from "../services/apiFestivals";
import FestivalList from "./components/FestivalList";
import ScoreList from "./components/ScoreList";

// import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  // <STATE>
  const localStorageUser = localStorage.get("user");
  // const localStorageScore = localStorage.get("score");
  const [userId, setUserId] = useState(localStorageUser.userId || "");
  const [userName, setUserName] = useState(localStorageUser.userName);
  // const [scoreId, setScoreId] = useState(localStorageScore || []);
  const [loginError, setLoginError] = useState("");
  const [createError, setCreateError] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [scoreMessage, setScoreMessage] = useState("");
  // const [userId, setUserId] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const [filmsGodenGlobs, setFilmsGodenGlobs] = useState([]);
  const [scoreGoldenGlobs, setScoreGoldenGlobs] = useState([]);
  // </STATE>

  //<ACCIONES DEL USUARIO>

  //Sign In
  const handlesignIn = (data) => {
    api.sendLogin(data).then((data) => {
      if (data.error) {
        setLoginError(data.message);
      } else {
        setLoginError("");
        setUserId(data.userId);
        localStorage.set("user", data);
        setUserName(data.userName);
      }
    });
  };

  //Sign Up
  const handleSignUp = (data) => {
    api.sendSignUp(data).then((data) => {
      if (data.error) {
        setCreateError("");
        setCreateError(data.message);
      } else {
        setCreateError("");
        setCreateError(data.message);
      }
    });
  };

  //UpdateUser
  const handleUserUpdate = (data) => {
    api.sendUserUpdate(data, userId).then((data) => {
      console.log(data);
      if (data.error) {
        setUpdateMessage("");
        setUpdateMessage(data.message);
      } else {
        setUpdateMessage("");
        setUpdateMessage(data.message);
        localStorage.remove("user");
        window.location.reload();
      }
    });
  };

  //Delete User
  const handleUserDelete = () => {
    api.sendUserDelete(userId).then((data) => {
      console.log(data);
      if (data.error) {
        setDeleteMessage(data.message);
      } else {
        localStorage.remove("user");
        window.location.reload();
      }
    });
  };

  //Sign off
  const signOff = () => {
    localStorage.remove("user");
    window.location.reload();
  };

  // <SEARCH FILMS>

  //Search Film
  const handleSearchFilm = (filmData) => {
    if (filmData === "") {
      console.log("error");
    } else {
      apiFilms.searchFilm(filmData).then((data) => {
        setAllFilms(data.results);
      });
    }
  };
  const handleFilm = (filmId) => {
    console.log(filmId);
    apiFilms.searchInfoFilm(filmId).then((data) => {
      console.log(data);
    });
  };
  // </SEARCH FILMS>

  // <FESTIVAL FILMS>

  //Pinta las películas de los Globos de Oro
  useEffect(() => {
    if (userId) {
      apiFestival.getGoldenGlobs().then((data) => {
        setFilmsGodenGlobs(data.data);
      });
    }
  }, [userId]);

  //Pinta las notas de los Globos de Oro

  useEffect(() => {
    if (userId || scoreMessage) {
      apiFestival.getScoreGoldenGlobs(userId).then((data) => {
        setScoreGoldenGlobs(data.dataScore);
      });
    }
  }, [scoreMessage]);

  // Guarda las notas de TODOS los premios
  const handleScore = (data) => {
    apiFestival.saveScoreFilm(data, userId).then((data) => {
      if (data.error) {
        setScoreMessage("");
        setScoreMessage(data.message);
      } else {
        setScoreMessage("");
        setScoreMessage(data.message);
      }
    });
  };
  // </FESTIVAL FILMS>

  //Renderiza la página de login o el main dependiendo de si esta el usuario guardado en el estado o no.
  const renderLanding = () => {
    return (
      <Landing
        handlesignIn={handlesignIn}
        loginError={loginError}
        handleSignUp={handleSignUp}
        createError={createError}
      ></Landing>
    );
  };
  const renderMain = () => {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Main
              userName={userName}
              signOff={signOff}
              handleSearchFilm={handleSearchFilm}
              allFilms={allFilms}
              handleFilm={handleFilm}
            ></Main>
          </Route>
          <Route path="/usuario">
            <UserData
              userName={userName}
              signOff={signOff}
              handleUserUpdate={handleUserUpdate}
              handleUserDelete={handleUserDelete}
              updateMessage={updateMessage}
              deleteMessage={deleteMessage}
            ></UserData>
          </Route>
          <Route path="/golden-globs-2022">
            <FestivalList
              userName={userName}
              signOff={signOff}
              filmsGodenGlobs={filmsGodenGlobs}
              handleScore={handleScore}
              title="Globos de Oro"
              scoreMessage={scoreMessage}
            ></FestivalList>
          </Route>
          <Route path="/score/golden-globs-2022">
            <ScoreList
              scoreGoldenGlobs={scoreGoldenGlobs}
              userName={userName}
              signOff={signOff}
            ></ScoreList>
          </Route>
        </Switch>
      </>
    );
  };

  return userId === "" ? renderLanding() : renderMain();
};

export default App;

// return (
//   <Switch>
//     <Route exact path="/">
//       <Landing
//         handlesignIn={handlesignIn}
//         loginError={loginError}
//         handleSignUp={handleSignUp}
//         createError={createError}
//       ></Landing>
//     </Route>
//     <PrivateRoute
//       exact
//       path="/home"
//       userId={userId}
//       component={Main}
//       userName={userName}
//       signOff={signOff}
//       handleSearchFilm={handleSearchFilm}
//       allFilms={allFilms}
//       handleFilm={handleFilm}
//       festivalFilms={festivalFilms}
//     >
//       {/* <Main></Main> */}
//     </PrivateRoute>
//     <Route path="/usuario">
//       <UserData
//         userName={userName}
//         signOff={signOff}
//         handleUserUpdate={handleUserUpdate}
//         handleUserDelete={handleUserDelete}
//         updateMessage={updateMessage}
//         deleteMessage={deleteMessage}
//       ></UserData>
//     </Route>
//     <Route path="/golden-globs-2022">
//       <FestivalList
//         festivalFilms={festivalFilms}
//         handleScore={handleScore}
//         title="Globos de Oro"
//       ></FestivalList>
//     </Route>
//   </Switch>
// );
