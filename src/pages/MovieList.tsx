import React, { useEffect, useState, Fragment, useContext } from "react";
import { css } from "emotion";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieThumbnail from "../components/MovieThumbnail";
import { colors } from "./../theme/theme";
import RouletteButton from "../components/RouletteButton";
import { DataContext } from "./../context/DataContext";
import SearchBar from "../components/SearchBar";

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

  button {
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
      cursor: pointer;
    }
  }
`;

interface Props {}

const MovieList: React.FC<Props> = () => {
  const { filterBy, movies, setMovies, query, page, setPage } = useContext(
    DataContext
  );

  useEffect(() => {
    if (filterBy) {
      (async () => {
        const response = await axios.get(
          `/movie/${filterBy}?api_key=${process.env.API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      })();
    }
  }, [filterBy]);

  useEffect(() => {
    (async () => {
      const url = query
        ? `/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&include_adult=false&page=${page}`
        : `/movie/${filterBy}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
      const response = await axios.get(url);
      setMovies([...movies, ...response.data.results]);
    })();
  }, [page]);

  return (
    <Fragment>
      <SearchBar />
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
