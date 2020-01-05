import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { Link } from "react-router-dom";
import { randomNumber } from "../helpers";

const modalRandom = css`
  & .poster {
    height: auto;
    margin-bottom: 0.5em;
    width: 250px;
  }
  & div {
    text-align: center;
    & .nextBtn {
      background: ${colors.secondary};
      border: none;
      border-radius: 5px;
      font-weight: 700;
      padding: 0.5em 1em;
      text-align: center;
    }
  }
`;

interface Props {}

const ModalContent: React.FC<Props> = () => {
  const [movie, setMovie] = useState(null);
  const [next, setNext] = useState(0);
  useEffect(() => {
    (async () => {
      const totalPages = (
        await axios.get(
          `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        )
      ).data.total_pages;
      const randomPage = randomNumber(0, totalPages);
      const randomMovie = randomNumber(0, 19);
      const movie = (
        await axios.get(
          `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&include_video=false&page=${randomPage}`
        )
      ).data.results[randomMovie];
      setMovie(movie);
    })();
  }, [next]);
  return (
    <Fragment>
      {movie === null ? (
        <p>loading...</p>
      ) : (
        <div className={modalRandom}>
          <Link to={`/movies/${movie.id}`}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </Link>
          <div>
            <button className="nextBtn" onClick={() => setNext(next + 1)}>
              Random
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ModalContent;
