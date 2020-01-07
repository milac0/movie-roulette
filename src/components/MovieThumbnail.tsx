import React from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { Movie } from "../interface";
import Hover from "./Hover";
import { getYear } from "../helpers";

const movie = css`
  background: ${colors.backgroundGrey};
  height: 330px;
  position: relative;
  margin-top: -4px;
  position: relative;
  width: 220px;

  .rating {
    background: ${colors.secondary};
    border-radius: 50%;
    color: #000;
    height: 40px;
    position: absolute;
    right: 0.5em;
    text-align: center;
    top: 0.5em;
    width: 40px;

    h1 {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  img {
    height: auto;
    width: 100%;
  }
`;

const hoverDiv = css`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  height: 330px;
  text-align: center;
  width: 220px;

  .title {
    margin: 0;
    padding: 3em 0.5em 0 0.5em;
  }

  .year {
    margin-top: 0;
  }

  .lang {
    bottom: 1em;
    left: 50%;
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

interface Props {
  movie: Movie;
}

const MovieThumbnail: React.FC<Props> = ({
  movie: { poster_path, vote_average, title, original_language, release_date }
}) => {
  const hover = (
    <div className={hoverDiv}>
      <p className="title">{title.toUpperCase() || null}</p>
      <p className="year">{getYear(release_date) || null}</p>
      <p className="lang">{original_language.toUpperCase() || null}</p>
    </div>
  );
  return (
    <Hover onHover={hover}>
      <div className={movie}>
        <div className="rating">
          <h1>{vote_average}</h1>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      </div>
    </Hover>
  );
};

export default MovieThumbnail;
