import React from "react";

const Delete = (props) => {
  const clickBtnDelete = () => {
    props.handleUserDelete();
  };
  return (
    <div className="container__delete">
      <details>
        <summary className="title">Borrar usuario</summary>
        <p className="notices">
          *Atención: El usuario y las listas de libros se borrarán
          permanentemente.{" "}
        </p>
        <button onClick={clickBtnDelete} className="btn delete__btn">
          Borrar usuario
        </button>
        <p className="confirmUser__text">{props.deleteMessage}</p>
      </details>
    </div>
  );
};

export default Delete;
