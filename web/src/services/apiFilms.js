const apiBaseUrl = "https://imdb-api.com/en/API";

const searchFilm = (filmData) => {
  return fetch(`${apiBaseUrl}/SearchMovie/k_0i4wyq32/${filmData}`).then((res) =>
    res.json()
  );
};
const searchInfoFilm = (filmId) => {
  return fetch(`${apiBaseUrl}/Wikipedia/k_0i4wyq32/${filmId}`).then((res) =>
    res.json()
  );
};
const exportObj = {
  searchFilm: searchFilm,
  searchInfoFilm: searchInfoFilm,
};
export default exportObj;
