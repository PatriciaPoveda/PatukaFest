const usersData = require("../data/users");
const encrypt = require("../helper/handleBcrypt");

const login = async (req, res) => {
  const userFound = usersData.getUserByNameAndPassword(req.body.userName);
  const checkPassword = await encrypt.compare(
    req.body.password,
    userFound.password
  );
  if (checkPassword) {
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
const userSignUp = async (req, res) => {
  const passwordHash = await encrypt.encrypt(req.body.password);
  const userCreate = usersData.addUserByNameAndPassword(
    req.body.userName,
    passwordHash
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

const userUpdate = async (req, res) => {
  const passwordHash = await encrypt.encrypt(req.body.passwordUpdate);

  const userFound = usersData.getUserUpdate(
    req.body.userNameUpdate,
    passwordHash,
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
