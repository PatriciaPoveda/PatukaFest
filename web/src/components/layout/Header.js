import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleSignOff = () => {
    props.signOff();
  };
  return (
    <>
      <header className="header">
        <button className="header__button" onClick={handleSignOff}>
          <Link to="/">Cerrar sesión</Link>
        </button>
        <Link to="/usuario">{props.userName}</Link>
      </header>
    </>
  );
};

export default Header;
