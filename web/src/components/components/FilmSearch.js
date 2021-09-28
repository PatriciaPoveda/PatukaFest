import { useState } from "react";

const FilmSearch = (props) => {
  const [searchFilm, setSearchFilm] = useState("");

  const getNameFilm = (ev) => {
    setSearchFilm(ev.currentTarget.value);
  };
  const handleSearchFilm = () => {
    props.handleSearchFilm(searchFilm);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="filmName"></label>
        <input type="text" id="filmName" onChange={getNameFilm} />
        <input type="submit" onClick={handleSearchFilm} />
      </form>
    </div>
  );
};

export default FilmSearch;
