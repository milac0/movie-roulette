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
      <p className="title">{title.toUpperCase() || null}</p>
      <p className="year">{getYear(release_date) || null}</p>
      <p className="lang">{original_language.toUpperCase() || null}</p>
    </div>
  );
  return (
    <Hover onHover={hover}>
      <div className={styles.movie}>
        <div className={styles.rating}>
          <h1>{vote_average}</h1>
        </div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : questionImg
          }
        />
      </div>
    </Hover>
  );
};

export default MovieThumbnail;
