import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { css } from "emotion";
// import { primary } from "../theme/theme";

interface Props {}

const MovieDetails: React.FC<Props> = () => {
  const { movieid } = useParams();
  console.log(movieid);
  return (
    <Fragment>
      <h1>ID : {movieid}</h1>
      <h1>title</h1>
      <h1>image</h1>
      <h1>year</h1>
      <h1>description</h1>
      <h1>rating popularity</h1>
      <h1>language</h1>
      <h1>prod compane</h1>
    </Fragment>
  );
};

export default MovieDetails;
