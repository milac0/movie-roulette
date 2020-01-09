import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  getGenres,
  getRuntime,
  getProductionCompanies,
  getYear
} from "../helpers";
import CustomRating from "../components/CustomRating";
import styles from "./movieDetails.scss";

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      const response = (
        await axios.get(
          `/movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`
        )
      ).data;
      setMovie(response);
    })();
  }, []);

  return (
    <div>
      {movie === undefined ? (
        <div className={styles.skeleton}></div>
      ) : (
        <div className={styles.details}>
          <div className={styles.titleBlock}>
            <h1>
              {movie.title} ({getYear(movie.release_date)}){" "}
            </h1>
            <h2>
              {getRuntime(movie.runtime)} &nbsp; | &nbsp;{" "}
              {getGenres(movie.genres)} &nbsp; | &nbsp;{" "}
              {movie.original_language}
            </h2>
            <div className={styles.image}>
              <img
                className={styles.imagePoster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <img
                className={styles.imageBackdrop}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
            </div>
          </div>
          <div className={styles.rating}>
            <div>
              <p>
                {movie.vote_average}
                <span>/10</span>
              </p>
              <span className={styles.popularity}>{movie.popularity}</span>
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
