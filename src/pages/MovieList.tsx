import React, { useEffect, useState } from "react";
import { css } from "emotion";
// import { primary } from "../theme/theme";
import axios from "axios";

interface Movie {
  adult: false;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: 419704;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Props {}

const MovieList: React.FC<Props> = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
      );
      setMovies([...movies, ...response.data.results]);
    };
    fetchData();
  }, [page]);

  return (
    <div>
      {movies.map((movie, i) => (
        <h4 key={i}>{JSON.stringify(movie.id)}</h4>
      ))}
      <button onClick={() => setPage(page + 1)}>more</button>
    </div>
  );
};

export default MovieList;
