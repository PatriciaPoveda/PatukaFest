const groupsData = require("../data/groups");

const searchUserNameInDB = (req, res) => {
  const userGroup = groupsData.getUserNameDB(
    req.body.userName,
    req.query.groupId
  );
  if (userGroup) {
    res.json({
      error: false,
      message: "El usuario ha sido añadido a la lista",
      groupId: userGroup.lastInsertRowid,
    });
  } else {
    res.status(404).json({
      error: "user-not-add-list",
      message:
        "El usuario no esta registrado o no ha podido ser añadido a la lista. Compruebe el nombre del usuario o pruebe más tarde",
    });
  }
};
const saveGroupName = (req, res) => {
  console.log(req.params.userId);
  const groupName = groupsData.saveGroupNameDB(
    req.body.groupName,
    req.params.userId
  );
  if (groupName.changes === 1) {
    res.json({
      error: false,
      message: "El grupo ha sido creado",
      groupId: groupName.lastInsertRowid,
      // groupName: req.body.groupName,
    });
  } else {
    res.status(404).json({
      error: "group-not-create",
      message: "El grupo no ha podido ser creado. Pruebe más tarde",
    });
  }
};

module.exports = {
  searchUserNameInDB: searchUserNameInDB,
  saveGroupName: saveGroupName,
};
