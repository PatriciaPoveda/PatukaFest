import React, { useState } from "react";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (ev) => {
    setUserName(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleFormsignIn = (ev) => {
    ev.preventDefault();
    props.handlesignIn({
      userName: userName,
      password: password,
    });
    ev.target.reset();
  };
  return (
    <>
      <h2 className="login__title title">Inicia sesión</h2>
      <form action="" className="login__form form" onSubmit={handleFormsignIn}>
        <label htmlFor="name" className="login__form--label label">
          Introduce tu usuario
        </label>
        <input
          type="text"
          id="name"
          placeholder="Ej: Laura"
          className="login__form--input input"
          onChange={handleUserName}
          required
        />
        <label htmlFor="password" className="login__form--label label">
          Introduce tu contraseña
        </label>
        <input
          type="text"
          id="password"
          className="login__form--input input"
          onChange={handlePassword}
          required
        />
        <input
          type="submit"
          value="Inicia sesión"
          className="login__form--button btn"
        />
      </form>
      <p className="confirmUser__text">{props.loginError}</p>
    </>
  );
};

export default Login;
