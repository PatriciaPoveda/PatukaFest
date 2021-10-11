const apiBaseUrl = "//localhost:3000/api";

const getFilmsFestival = () => {
  return fetch(`${apiBaseUrl}/festivals`).then((res) => res.json());
};

export default getFilmsFestival;
