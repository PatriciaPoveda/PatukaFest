const groupsData = require("../data/groups");

const searchUserNameInDB = (req, res) => {
  const userGroup = groupsData(req.body.userName);
  if (userGroup) {
    res.json({
      error: false,
      message: "El usuario ha sido añadido a la lista",
      userGroupId: userGroup.id,
      userGroupName: userGroup.userName,
    });
  } else {
    res.status(404).json({
      error: "user-not-add-list",
      message:
        "El usuario no esta registrado o no ha podido ser añadido a la lista. Compruebe el nombre del usuario o pruebe más tarde",
    });
  }
};

module.exports = searchUserNameInDB;
