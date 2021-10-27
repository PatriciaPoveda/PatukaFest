import React, { useState } from "react";

const Create = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepit, setPasswordRepit] = useState("");

  const handleUserName = (ev) => {
    const userName = ev.target.value.toLowerCase();
    setUserName(userName);
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
        {/* <form
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
            type="password"
            id="password"
            className="login__form--input input"
            onChange={handlePassword}
            required
          />
          <label htmlFor="password" className="login__form--label label">
            Repite la contraseña
          </label>
          <input
            type="password"
            id="password"
            className="login__form--input input"
            onChange={handlePasswordRepit}
            required
          />
          <input
            type="submit"
            value="Crear usuario"
            className="login__form--button btn"
          />
        </form>
        <p className="confirmUser__text">{props.loginError}</p>
        <p>{props.createError}</p> */}

        {/* boostrap */}

        <div className="container form">
          <div className="card card-login mx-auto text-center bg-dark">
            {/* <div className="card-header mx-auto bg-dark">
            <span>
              {" "}
              <img
                src="https://amar.vote/assets/img/amarVotebd.png"
                className="w-75"
                alt="Logo"
              />{" "}
            </span>
            <br />
            <span className="logo_title mt-5"> Login Dashboard </span>
            <!--            <h1>--><?php //echo $message?><!--</h1>-->
          </div> */}

            <div className="card-body">
              <form action="" method="post" onSubmit={handleFormSignUp}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="Usuario"
                    onChange={handleUserName}
                    required
                  />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    onChange={handlePassword}
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Repite Contraseña"
                    onChange={handlePasswordRepit}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    name="btn"
                    value="Crea tu usuario"
                    className="btn btn-outline-danger float-right login_btn"
                  />
                </div>
              </form>
              <p className="confirmUser__text">{props.loginError}</p>
              <p>{props.createError}</p>
            </div>
          </div>
        </div>
      </details>
    </>
  );
};

export default Create;
