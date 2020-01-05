import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import axios from "axios";
import {
  getGenres,
  getRuntime,
  getProductionCompanies,
  getYear
} from "../helpers";

import { UserContext } from "./../context/UserContext";

import CustomRating from "../components/CustomRating";

const details = css`
  background: #eeeeee;
  margin: 0 auto;
  padding: 1em;
  width: 660px;
  & .title-block {
    background: #333333;
    color: #fff;
    margin-bottom: 1em;
    padding: 1em;
    & h1 {
      font-size: 2rem;
      font-weight: 400;
      margin: 0;
    }
    & h2 {
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
      margin-bottom: 0.75em;
    }
  }
  .rating {
    display: flex;
    justify-content: space-between;
    & p {
      font-size: 2rem;
      margin: 0;
    }
    & .rating-outof {
      font-size: 1rem;
    }
  }
  & p {
    font-size: 1rem;
  }
`;

const image = css`
  display: flex;
  justify-content: space-between;
  & .image-poster {
    margin-right: 1em;
    height: 281px;
  }
`;

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`
      );
      setMovie(response.data);
    })();
  }, []);

  return (
    <div>
      {movie === undefined ? (
        <h1>Loading skeleton</h1>
      ) : (
        <div className={details}>
          <div className="title-block">
            <h1>
              {movie.title} ({getYear(movie.release_date)}){" "}
            </h1>
            <h2>
              {getRuntime(movie.runtime)} &nbsp; | &nbsp;{" "}
              {getGenres(movie.genres)} &nbsp; | &nbsp;{" "}
              {movie.original_language}
            </h2>
            <div className={image}>
              <img
                className="image-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <img
                className="image-backdrop"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
            </div>
          </div>
          <div className="rating">
            <div>
              <p>
                {movie.vote_average}
                <span className="rating-outof">/10</span>
              </p>
              <span>{movie.popularity}</span>
            </div>
            <CustomRating movieid={movieid} />
          </div>
          <p>{movie.overview}</p>
          <p>
            Production companies:{" "}
            {getProductionCompanies(movie.production_companies)}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
