import React, { useEffect, Fragment, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieThumbnail from "../../components/MovieThumbnail/MovieThumbnail";
import RouletteButton from "../../components/RouletteButton/RouletteButton";
import { DataContext } from "../../context/DataContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./movieList.scss";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";

interface Props {}

const MovieList: React.FC<Props> = () => {
  const { filterBy, movies, setMovies, query, page } = useContext(DataContext);

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
      <div className={styles.list}>
        {movies.map((movie, i) => (
          <Link className={styles.link} to={`/movies/${movie.id}`} key={i}>
            <MovieThumbnail movie={movie} />
          </Link>
        ))}
      </div>
      <div className={styles.buttons}>
        <LoadMoreButton />
        <RouletteButton />
      </div>
    </Fragment>
  );
};

export default MovieList;
