const data = require("../index");

const getUserByNameAndPassword = (userName, password) => {
  const query = data.db.prepare(
    `SELECT * FROM users WHERE userName = ? AND password = ?`
  );
  const user = query.get(userName, password);
  return user;
};
//CREATE
const addUserByNameAndPassword = (userName, password) => {
  const query = data.db.prepare(
    `INSERT or IGNORE INTO users (userName, password) VALUES (?, ?)`
  );
  const user = query.run(userName, password);
  return user;
};
//UPDATE
const getUserUpdate = (userNameUpdate, passwordUpdate, userId) => {
  const query = data.db.prepare(
    `UPDATE users SET userName = ?, password = ? WHERE id = ?`
  );
  const user = query.run(userNameUpdate, passwordUpdate, userId);
  return user;
};
//DELETE
const getUserDelete = (userId) => {
  const query = data.db.prepare(`DELETE FROM users WHERE id = ?`);
  const user = query.run(userId);
  return user;
};
module.exports = {
  getUserByNameAndPassword: getUserByNameAndPassword,
  addUserByNameAndPassword: addUserByNameAndPassword,
  getUserDelete: getUserDelete,
  getUserUpdate: getUserUpdate,
};
