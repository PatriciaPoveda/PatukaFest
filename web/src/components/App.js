import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import localStorage from "../services/localStorage";
import Landing from "./layout/Landing";
import Main from "./layout/Main";
import UserData from "./user/UserData";
import api from "../services/api";
import apiFilms from "../services/apiFilms";
import apiFestival from "../services/apiFestivals";
import apiGroup from "../services/apiGroup";
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
  // const [userGroupName, setUserGroupName] = useState([]);
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
        const capitalize =
          data.userName.charAt(0).toUpperCase() + data.userName.slice(1);
        data.userName = capitalize;
        localStorage.set("user", data);
        setUserName(capitalize);
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

  //<GROUPS>

  // Buscar los nombres de los nuevos miembros de un grupo en la DB. Si estan, se guardan en un array las userId que se guarda en un estado. Los nombres se guardan en otro array y se envia al componente para ue se pinten los nombres.
  const userGroupId = [userId];
  const userGroupName = [userName];

  const searchUserNameInDB = (userName) => {
    apiGroup.sendUserNameToDb(userName).then((data) => {
      if (!userGroupName.includes(data.userGroupName)) {
        userGroupName.push(data.userGroupName);
      }
    });
  };

  //Enviar a la DB el nombre del grupo recibido del formulario y los usuarios que pertenecen al grupo recibido del estado.

  //</GROUPS>

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
              searchUserNameInDB={searchUserNameInDB}
              userGroupName={userGroupName}
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
