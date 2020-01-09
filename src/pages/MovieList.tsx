import React, { useEffect, useState, Fragment, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieThumbnail from "../components/MovieThumbnail";
import RouletteButton from "../components/RouletteButton";
import { DataContext } from "./../context/DataContext";
import SearchBar from "../components/SearchBar";
import styles from "./movieList.scss";

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

  const handleClick = () => setPage(page + 1);

  return (
    <Fragment>
      <SearchBar />
      <div className={styles.list}>
        {movies.map((movie, i) => (
          <Link className={styles.link} to={`/movies/${movie.id}`} key={i}>
            <MovieThumbnail movie={movie} />
          </Link>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleClick}>load more...</button>
        <RouletteButton />
      </div>
    </Fragment>
  );
};

export default MovieList;
