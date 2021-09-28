const usersData = require("../data/users");

const login = (req, res) => {
  const userFound = usersData.getUserByNameAndPassword(
    req.body.userName,
    req.body.password
  );

  if (userFound) {
    res.json({
      error: false,
      userId: userFound.id,
      userName: userFound.userName,
    });
  } else {
    res.status(404).json({
      error: "user-not-found",
      message:
        "El ususario no existe. Compruebe que ha puesto correctamente el usuario y la contraseña",
    });
  }
};
const userSignUp = (req, res) => {
  const userCreate = usersData.addUserByNameAndPassword(
    req.body.userName,
    req.body.password
  );

  if (userCreate.changes === 1) {
    res.json({
      error: false,
      message: "El usuario ha sido registrado con exito",
    });
  } else {
    res.status(404).json({
      error: "user-not-create",
      message:
        "Ya existe un usuario con ese nombre. Pruebe otro nombre de usuario",
    });
  }
};

const userUpdate = (req, res) => {
  const userFound = usersData.getUserUpdate(
    req.body.userNameUpdate,
    req.body.passwordUpdate,
    req.params.userId
  );

  if (userFound.changes === 1) {
    res.json({
      error: false,
      message: "Tus datos han sido actualizados",
    });
  } else {
    res.status(404).json({
      error: "user-not-update",
      message:
        "No han podido actualizarse los datos del usuario. Vuelva a intentarlo más tarde",
    });
  }
};

const userDelete = (req, res) => {
  const userFound = usersData.getUserDelete(req.params.userId);

  if (userFound.changes === 1) {
    res.json({
      error: false,
    });
  } else {
    res.status(404).json({
      error: "user-not-exists",
      message: "Error al eliminar usuario. Vuelva a intentarlo más tarde",
    });
  }
};

module.exports = {
  login: login,
  userDelete: userDelete,
  userUpdate: userUpdate,
  userSignUp: userSignUp,
};
