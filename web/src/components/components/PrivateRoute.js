import { Route, Redirect } from "react-router-dom";

// let auth;
// auth = false;
//  auth = true;
const PrivateRoute = ({
  component: Component,
  userName,
  signOff,
  handleSearchFilm,
  allFilms,
  userId,
  path,
  ...rest
}) => {
  return (
    <>
      {userId === "" ? (
        <Redirect to="/" />
      ) : (
        <Route path={path}>
          <Component
            userName={userName}
            signOff={signOff}
            handleSearchFilm={handleSearchFilm}
            allFilms={allFilms}
            path={path}
          />
        </Route>
      )}
    </>
  );
};

export default PrivateRoute;
