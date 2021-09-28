import React, { useState } from "react";

const Create = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepit, setPasswordRepit] = useState("");

  const handleUserName = (ev) => {
    setUserName(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };
  const handlePasswordRepit = (ev) => {
    setPasswordRepit(ev.target.value);
  };

  const handleFormSignUp = (ev) => {
    ev.preventDefault();
    if (password === passwordRepit) {
      props.handleSignUp({
        userName: userName,
        password: password,
      });
      ev.target.reset();
    }
  };

  return (
    <>
      <details>
        <summary className="login__title title">Crear Usuario</summary>
        <form
          action=""
          className="login__form form"
          onSubmit={handleFormSignUp}
        >
          <label htmlFor="name" className="login__form--label label">
            Introduce un usuario
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
            Introduce una contraseña
          </label>
          <input
            type="text"
            id="password"
            className="login__form--input input"
            onChange={handlePassword}
            required
          />
          <label htmlFor="password" className="login__form--label label">
            Repite la contraseña
          </label>
          <input
            type="text"
            id="password"
            className="login__form--input input"
            onChange={handlePasswordRepit}
            required
          />
          <input
            type="submit"
            value="Inicia sesión"
            className="login__form--button btn"
          />
        </form>
        <p className="confirmUser__text">{props.loginError}</p>
        <p>{props.createError}</p>
      </details>
    </>
  );
};

export default Create;
