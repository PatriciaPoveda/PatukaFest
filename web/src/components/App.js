import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import localStorage from "../services/localStorage";
import Landing from "./layout/Landing";
import Main from "./layout/Main";
import UserData from "./user/UserData";
import api from "../services/api";
import apiFilms from "../services/apiFilms";
import getFilmsFestival from "../services/apiFestivals";
// import searchFilm from "../services/apiFilms";

// import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  //State
  const localStorageUser = localStorage.get("user");
  const [userId, setUserId] = useState(localStorageUser.userId || "");
  const [loginError, setLoginError] = useState("");
  const [createError, setCreateError] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  // const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState(localStorageUser.userName);
  const [allFilms, setAllFilms] = useState([]);
  const [festivalFilms, setFestivalFilms] = useState([]);

  console.log(userId);
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
    apiFilms.searchFilm(filmData).then((data) => {
      setAllFilms(data.results);
    });
  };
  const handleFilm = (filmId) => {
    console.log(filmId);
    apiFilms.searchInfoFilm(filmId).then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    if (userId) {
      getFilmsFestival().then((data) => {
        console.log(data);
        setFestivalFilms(data.data);
      });
    }
  }, [userId]);
  // return (
  //   <Switch>
  //     <Route exact path="/">
  //       <Landing handlesignIn={handlesignIn} loginError={loginError}></Landing>{" "}
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
  //     <Route path="/nuevo-usuario">
  //       <Create></Create>
  //     </Route>
  //   </Switch>
  // );
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
              festivalFilms={festivalFilms}
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
        </Switch>
      </>
    );
  };

  return userId === "" ? renderLanding() : renderMain();
};

export default App;
