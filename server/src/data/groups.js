const data = require("../index");
const getUserNameDB = (userName, groupId) => {
  const query = data.db.prepare(`SELECT id FROM users WHERE userName = ? `);
  const user = query.get(userName);
  if (user) {
    const query = data.db.prepare(
      `INSERT INTO usersGroups (groupId, userId) VALUES (?, ?)`
    );
    const group = query.run(groupId, user.id);
    return group;
  }
};
const saveGroupNameDB = (groupName, userId) => {
  const query = data.db.prepare(
    `INSERT OR IGNORE INTO groups (groupName, userId) VALUES (?, ?)`
  );
  const group = query.run(groupName, userId);
  return group;
};
module.exports = {
  getUserNameDB: getUserNameDB,
  saveGroupNameDB: saveGroupNameDB,
};

// const querySelect = data.db.prepare(
//   `SELECT groupName FROM groups WHERE idElement = ? `
// );
// const group = querySelect.get(groupId);
