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
      {/* <h2 className="login__title title">Inicia sesión</h2>
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
          type="password"
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
      <p className="confirmUser__text">{props.loginError}</p> */}

      {/* boostrap */}

      <div className="container form">
        <div className="card card-login mx-auto text-center bg-dark">
          {/* <div class="card-header mx-auto bg-dark">
            <span>
              {" "}
              <img
                src="https://amar.vote/assets/img/amarVotebd.png"
                class="w-75"
                alt="Logo"
              />{" "}
            </span>
            <br />
            <span class="logo_title mt-5"> Login Dashboard </span>
            <!--            <h1>--><?php //echo $message?><!--</h1>-->
          </div> */}
          <h2 className="login__title title">Inicia sesión</h2>
          <div className="card-body">
            <form action="" method="post" onSubmit={handleFormsignIn}>
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

              <div className="form-group">
                <input
                  type="submit"
                  name="btn"
                  value="Inicia sesión"
                  className="btn btn-outline-danger float-right login_btn"
                />
              </div>
            </form>
            <p className="confirmUser__text">{props.loginError}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
