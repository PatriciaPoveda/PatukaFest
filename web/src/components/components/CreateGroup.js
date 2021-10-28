import React, { useState } from "react";

const CreateGroup = (props) => {
  const [userName, setUserName] = useState("");
  const [groupName, setGroupName] = useState("");
  //Buscar un estado para que el componente createGroup pueda renderizarse al enviar las props

  const getGroupName = (ev) => {
    const groupName = ev.target.value.toLowerCase();
    setGroupName(groupName);
  };
  const getUserName = (ev) => {
    const userName = ev.target.value.toLowerCase();
    setUserName(userName);
  };

  const handleUserName = (ev) => {
    ev.preventDefault();
    props.searchUserNameInDB({
      userName: userName,
    });
  };
  const handleGroupName = (ev) => {
    ev.preventDefault();
    props.saveGroupName({
      groupName: groupName,
    });
  };

  return (
    <>
      {/* <div>
        <form>
          <div className="form-group">
            <label htmlFor="nameGroup">Nombre del nuevo grupo</label>
            <input type="text" className="form-control" id="nameGroup" />
          </div>
          <button type="submit" className="btn btn-default">
            Crear grupo
          </button>
        </form>

        <form onSubmit={handleUserName}>
          <div className="form-group">
            <label htmlFor="userGroup">Agrega a personas a tu grupo</label>
            <input
              type="text"
              className="form-control"
              id="userGroup"
              onChange={getUserName}
            />
            <button type="submit" className="btn btn-default">
              añadir un amigo
            </button>
          </div>
        </form>
      </div> */}
      <div className="form">
        <form className="form-inline form" onSubmit={handleGroupName}>
          <div className="form-group">
            <label htmlFor="group">Nombre del nuevo grupo</label>
            <input
              type="text"
              className="form-control"
              id="group"
              onChange={getGroupName}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Grupo
          </button>
        </form>
        <form className="form-inline form" onSubmit={handleUserName}>
          <div className="form-group">
            <label htmlFor="user">Agrega personas a tu grupo</label>
            <input
              type="text"
              className="form-control"
              id="user"
              onChange={getUserName}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            añadir un amigo
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;

/* <div>
  {props.userGroupName.map((name) => {
    return <span key={name}>{name}</span>;
  })}
</div> */
