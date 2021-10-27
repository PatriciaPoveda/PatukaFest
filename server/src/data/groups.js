const data = require("../index");
const getUserNameDB = (userName) => {
  const query = data.db.prepare(
    `SELECT id, userName FROM users WHERE userName = ? `
  );
  const user = query.get(userName);
  return user;
};
module.exports = getUserNameDB;
