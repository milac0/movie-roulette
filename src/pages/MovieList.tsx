import React, { useEffect, useState, Fragment } from "react";
import { css } from "emotion";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieThumbnail from "../components/MovieThumbnail";
import { Movie } from "../interface";
import { colors } from "./../theme/theme";
import RouletteButton from "../components/RouletteButton";

const list = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
  max-width: 1200px;
  width: 90%;
`;

const link = css`
  text-decoration: none;
  color: ${colors.primary};
`;

const buttons = css`
  text-align: center;
  margin-bottom: 2em;
  position: relative;
  & button {
    background: ${colors.primary};
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    margin: 0 auto;
    padding: 1em;
    width: 20em;
    &:hover {
      background: ${colors.primaryDark};
    }
  }
  & .rouletteBtn {
  }
`;

interface Props {}

const MovieList: React.FC<Props> = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
      );
      setMovies([...movies, ...response.data.results]);
    })();
  }, [page]);

  return (
    <Fragment>
      <div className={list}>
        {movies.map((movie, i) => (
          <Link className={link} to={`/movies/${movie.id}`} key={i}>
            <MovieThumbnail movie={movie} />
          </Link>
        ))}
      </div>
      <div className={buttons}>
        <button onClick={() => setPage(page + 1)}>load more...</button>
        <RouletteButton />
      </div>
    </Fragment>
  );
};

export default MovieList;
