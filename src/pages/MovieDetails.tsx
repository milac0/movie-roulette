import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import axios from "axios";
import { colors } from "../theme/theme";
import {
  getGenres,
  getRuntime,
  getProductionCompanies,
  getYear
} from "../helpers";
import Rating from "react-rating";
import fullStar from "../assets/images/fullstar.png";
import emptyStar from "../assets/images/emptystar.png";
import ratedStar from "../assets/images/ratedstar.png";
import { UserContext } from "./../context/UserContext";

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
    & span {
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
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  max-width: 400px;
`;

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { user } = useContext(UserContext);
  const { movieid } = useParams();
  const [movie, setMovie] = useState();
  const [message, setMessage] = useState();
  const [rate, setRate] = useState<number | undefined>(0);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`
      );
      setMovie(response.data);
    })();
  }, []);

  const handleRating = async (value: number) => {
    //provjeri jel authenticated ako je izvrsi, ako nije, disabled dok ne logira

    try {
      const response = (
        await axios.post(
          `/movie/${movieid}/rating?api_key=${process.env.API_KEY}&guest_session_id=${user.guest_session_id}`,
          { value }
        )
      ).data;
      setMessage(response.status_message);
    } catch (err) {
      setRate(undefined);
      setMessage("You do not have permissions to access the service.");
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
                <span>/10</span>
              </p>

              <span>{movie.popularity}</span>
            </div>
            <div>
              <Rating
                stop={10}
                fractions={2}
                emptySymbol={<img src={emptyStar} />}
                fullSymbol={<img src={fullStar} />}
                placeholderSymbol={<img src={ratedStar} />}
                // guests cant see their ratings
                placeholderRating={2}
                initialRating={rate}
                onClick={handleRating}
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
