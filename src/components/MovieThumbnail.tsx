import React from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { Movie } from "../interface";

const movie = css`
  &:hover {
  }
  margin-top: -4px;
  position: relative;
  width: 220px;
  & div {
    background: ${colors.secondary};
    border-radius: 50%;
    color: #000;
    height: 40px;
    position: absolute;
    right: 0.5em;
    text-align: center;
    top: 0.5em;
    width: 40px;
    & h1 {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  & img {
    height: auto;
    width: 100%;
  }
`;

interface Props {
  movie: Movie;
}

const MovieThumbnail: React.FC<Props> = ({
  movie: { poster_path, vote_average, title, original_language }
}) => {
  return (
    <div className={movie}>
      <div>
        <h1>{vote_average}</h1>
      </div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
    </div>
  );
};

export default MovieThumbnail;
