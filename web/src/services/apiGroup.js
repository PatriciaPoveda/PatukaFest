const apiBaseUrl = "//localhost:3000/api";

const sendUserNameToDb = (userName, groupId) => {
  return fetch(`${apiBaseUrl}/search-username?groupId=${groupId}`, {
    method: "POST",
    body: JSON.stringify(userName),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
const saveGroupName = (groupName, userId) => {
  return fetch(`${apiBaseUrl}/save-group/${userId}`, {
    method: "POST",
    body: JSON.stringify(groupName),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const exportObj = {
  sendUserNameToDb: sendUserNameToDb,
  saveGroupName: saveGroupName,
};
export default exportObj;
