import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { Link } from "react-router-dom";
import { randomNumber } from "../helpers";

const modalRandom = css`
  & .poster {
    height: 370.5px;
    margin-bottom: 1em;
    width: 250px;
    & img {
      height: auto;
      width: 100%;
    }
  }
  & div {
    text-align: center;
    & .nextBtn {
      background: ${colors.secondary};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 700;
      padding: 0.5em 1em;
      text-align: center;
      &:active {
        transform: translateY(2px);
      }
    }
  }
`;

const randomSkeleton = css`
  height: 370.5px;
  width: 250px;
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
        <div className={randomSkeleton}></div>
      ) : (
        <div className={modalRandom}>
          <Link to={`/movies/${movie.id}`}>
            <div className={"poster"}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
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
