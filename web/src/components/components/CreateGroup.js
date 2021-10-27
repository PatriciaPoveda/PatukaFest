import React, { useState } from "react";

const CreateGroup = (props) => {
  const [userName, setUserName] = useState("");
  //Buscar un estado para que el componente createGroup pueda renderizarse al enviar las props
  const getUserName = (ev) => {
    const userName = ev.target.value.toLowerCase();
    setUserName(userName);
  };
  const handleUserName = () => {
    props.searchUserNameInDB({
      userName: userName,
    });
  };

  return (
    <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="nameGroup">Nombre del nuevo grupo</label>
          <input type="text" className="form-control" id="nameGroup" />
        </div>
        <div className="form-group">
          <label htmlFor="userGroup">
            Busca y une a la gente que quieres que forme parte de tu grupo
          </label>
          <input
            type="text"
            className="form-control"
            id="userGroup"
            onChange={getUserName}
          />
          <button type="button" onClick={handleUserName}>
            añadir un usuario al grupo
          </button>
        </div>
        <div>
          {props.userGroupName.map((name) => {
            return <span key={name}>{name}</span>;
          })}
        </div>
        <button type="submit" className="btn btn-default">
          Crear grupo
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
