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
import Rating from "@material-ui/lab/Rating";
import { UserContext } from "./../context/UserContext";
import { isAuthenticated } from "./../helpers/index";

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
  & .rating {
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

const msg = css`
  color: #333333;
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  margin-left: 0.5em;
  max-width: 400px;
`;

const rateElement = css`
  & span {
    font-size: 40px;
  }
`;

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { user } = useContext(UserContext);
  const { movieid } = useParams();
  const [movie, setMovie] = useState();
  const [message, setMessage] = useState();
  const [rate, setRate] = useState<number | null>(0);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`
      );
      setMovie(response.data);
    })();
  }, []);

  const handleRating = async (value: number | null) => {
    if (isAuthenticated(user.expires_at)) {
      try {
        const response = (
          await axios.post(
            `/movie/${movieid}/rating?api_key=${process.env.API_KEY}&guest_session_id=${user.guest_session_id}`,
            { value }
          )
        ).data;
        setRate(value);
        setMessage(response.status_message);
      } catch (err) {
        setRate(null);
        setMessage("Error while submiting rating. Try again later.");
      }
    } else {
      setRate(null);
      setMessage("You do not have permissions to access the service. Log in.");
    }
  };

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
            <div>
              <Rating
                className={rateElement}
                name="movie-stars"
                max={10}
                value={rate}
                onChange={(e, value) => handleRating(value)}
                size="large"
              />
              <h2 className={msg}>{message || null}</h2>
            </div>
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
