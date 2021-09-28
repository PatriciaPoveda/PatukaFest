import React, { useState } from "react";

const Update = (props) => {
  //Update user
  const [userNameUpdate, setUserNameUpdate] = useState("");
  const [passwordUpdate, setPasswordUpdate] = useState("");

  const handleUserNameUpdate = (ev) => {
    setUserNameUpdate(ev.target.value);
  };

  const handlePasswordUpdate = (ev) => {
    setPasswordUpdate(ev.target.value);
  };

  const handleFormUpdate = (ev) => {
    ev.preventDefault();

    props.handleUserUpdate({
      userNameUpdate: userNameUpdate,
      passwordUpdate: passwordUpdate,
    });
    ev.target.reset();
  };
  return (
    <>
      <details>
        <summary className="title">Cambiar datos del usuario</summary>
        <form action="" className="form " onSubmit={handleFormUpdate}>
          <label htmlFor="name" className="label">
            Cambia tu usuario
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Laura"
            className="input "
            onChange={handleUserNameUpdate}
          />
          <label htmlFor="password" className="label">
            Cambia tu contraseña
          </label>
          <input
            type="text"
            id="password"
            className="input js-password"
            onChange={handlePasswordUpdate}
          />
          <input type="submit" value="Actualizar Usuario" className="btn" />
        </form>
        <p className="confirmUser__text">{props.updateMessage}</p>
      </details>
    </>
  );
};

export default Update;
