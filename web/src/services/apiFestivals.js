const apiBaseUrl = "//localhost:3000/api";

const getGoldenGlobs = () => {
  return fetch(`${apiBaseUrl}/golden-globs`, {
    method: "GET",
  }).then((res) => res.json());
};

const getScoreGoldenGlobs = (userId) => {
  return fetch(`${apiBaseUrl}/score/golden-globs/${userId}`, {
    method: "POST",
  }).then((res) => res.json());
};

const saveScoreFilm = (data, userId) => {
  return fetch(`${apiBaseUrl}/awars/${userId}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const exportObj = {
  getGoldenGlobs: getGoldenGlobs,
  saveScoreFilm: saveScoreFilm,
  getScoreGoldenGlobs: getScoreGoldenGlobs,
};
export default exportObj;
