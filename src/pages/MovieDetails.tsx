import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { css } from "emotion";
import axios from "axios";
// import { primary } from "../theme/theme";

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`
      );
      setMovie(response.data);
      console.log(response.data);
    })();
  }, []);

  return (
    <div>
      {movie === undefined ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <h1>ID : {movieid}</h1>
          <h1>title: {movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />>
          <h1>year: {movie.release_date} </h1>
          <h1>description: {movie.overview}</h1>
          <h1>
            rating popularity: {movie.vote_average} ({movie.popularity})
          </h1>
          <h1>language: {movie.original_language}</h1>
          {/* <h1>prod compane: {movie.production_companies}</h1> */}
        </Fragment>
      )}
    </div>
  );
};

export default MovieDetails;
