import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  getGenres,
  getRuntime,
  getProductionCompanies
} from "./movieDetails.helpers";
import { getYear } from "../../helpers/index";
import CustomRating from "../../components/CustomRating/CustomRating";
import styles from "./movieDetails.scss";
import Movie from "../../interface/Movie";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { movieid } = useParams();
  const movieURL = `/movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`;
  const trailerURL = `movie/${movieid}/videos?api_key=${process.env.API_KEY}&language=en-US`;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        data: { results }
      } = await axios.get(trailerURL);
      if (results.length > 0 && results[0].key !== null) {
        setTrailer(results[0].key);
      }
      const { data: movie } = await axios.get(movieURL);
      setMovie(movie);
    })();
  }, []);

  return (
    <div>
      {!movie ? (
        <div className={styles.skeleton}></div>
      ) : (
        <div className={styles.details}>
          <ScrollToTopOnMount />
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
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "http://via.placeholder.com/187x281"
                }
              />
              {trailer ? (
                <div className={styles.responsiveContainer}>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer}`}
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  className={styles.imageBackdrop}
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                      : "http://via.placeholder.com/425x281"
                  }
                />
              )}
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
            <CustomRating movieid={parseInt(movieid)} />
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
