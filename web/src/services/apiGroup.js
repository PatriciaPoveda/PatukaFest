const apiBaseUrl = "//localhost:3000/api";

const sendUserNameToDb = (userName) => {
  return fetch(`${apiBaseUrl}/search-username`, {
    method: "POST",
    body: JSON.stringify(userName),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const exportObj = {
  sendUserNameToDb: sendUserNameToDb,
};
export default exportObj;
