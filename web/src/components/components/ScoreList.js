import Header from "../layout/Header";
import { Link } from "react-router-dom";

const ScoreList = (props) => {
  const festivalScore = props.scoreGoldenGlobs.map((score) => {
    return (
      <tr key={score.filmId}>
        <th scope="row">{score.title}</th>
        <td>{score.score}</td>
      </tr>
    );
  });
  return (
    <>
      <Header userName={props.userName} signOff={props.signOff}></Header>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th key="title"></th>
            <th scope="col">{props.userName}</th>
          </tr>
        </thead>
        <tbody>{festivalScore}</tbody>
      </table>
      <Link to="/">Volver a menú principal</Link>
    </>
  );
};

export default ScoreList;
