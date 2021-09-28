import React from "react";
import { Link } from "react-router-dom";
import Update from "../user/Update";
import Delete from "../user/Delete";
// import Footer from "../layout/Footer";
import Header from "../layout/Header";

const UserData = (props) => {
  return (
    <>
      <Header userName={props.userName} signOff={props.signOff}></Header>
      <section className="main">
        <details>
          <summary className="title">Opciones del usuario</summary>
          <div className="container__userData">
            <Update
              handleUserUpdate={props.handleUserUpdate}
              updateMessage={props.updateMessage}
            ></Update>
            <Delete
              handleUserDelete={props.handleUserDelete}
              deleteMessage={props.deleteMessage}
            ></Delete>
          </div>
        </details>
      </section>
      <Link to="/">Volver</Link>
    </>
  );
};

export default UserData;
