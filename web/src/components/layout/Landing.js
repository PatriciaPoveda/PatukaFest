import React from "react";
import Login from "../user/Login";
import Create from "../user/Create";

const Landing = (props) => {
  return (
    // <div className="main">
    <section className="landing">
      <h1 className="landing__title">PatukyFest</h1>
      <p className="landing__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque
        incidunt architecto vel possimus, itaque, quas ipsam id alias beatae
        porro magnam quisquam ea nisi voluptate! Pariatur placeat nam harum.{" "}
      </p>
      <Login
        handlesignIn={props.handlesignIn}
        loginError={props.loginError}
      ></Login>

      <Create
        handleSignUp={props.handleSignUp}
        createError={props.createError}
        // cleanForm={props.cleanForm}
      ></Create>
    </section>
    // </div>
  );
};

export default Landing;
