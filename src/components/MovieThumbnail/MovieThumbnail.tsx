import React from "react";
import Movie from "../../interface/Movie";
import Hover from "../Hover/Hover";
import { getYear } from "../../helpers";
import questionImg from "../../assets/images/question.png";
import styles from "./movieThumbnail.scss";

interface Props {
  movie: Movie;
}

const MovieThumbnail: React.FC<Props> = ({
  movie: { poster_path, vote_average, title, original_language, release_date }
}) => {
  const hover = (
    <div className={styles.hoverDiv}>
      <h1>{title.toUpperCase() || null}</h1>
      <h2>{getYear(release_date) || null}</h2>
      <h3>{original_language.toUpperCase() || null}</h3>
    </div>
  );
  return (
    <Hover onHover={hover}>
      <div className={styles.movie}>
        <div className={styles.rating}>
          <h1>{vote_average}</h1>
        </div>
        {poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        ) : (
            <div className={styles.altContainer}>
              <img src={questionImg} />
            </div>
          )}
      </div>
    </Hover>
  );
};

export default MovieThumbnail;
