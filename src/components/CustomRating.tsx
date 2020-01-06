import React, { useContext, useEffect } from "react";
import axios from "axios";
import { css } from "emotion";
import Rating from "@material-ui/lab/Rating";
import { isAuthenticated } from "./../helpers/index";
import { useState } from "react";
import { UserContext } from "../context/UserContext";

const msg = css`
  color: #333333;
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  margin-left: 0.5em;
  max-width: 400px;
`;

const rateElement = css`
  & span {
    font-size: 40px;
  }
`;

interface Props {
  movieid: string | undefined;
}

const CustomRating: React.FC<Props> = ({ movieid }) => {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState();
  const [rate, setRate] = useState<number | null>(0);
  useEffect(() => {
    (async () => {
      // no other way to fetch guest users ratings
      const ratedMovies = (
        await axios.get(
          `/guest_session/${user.guest_session_id}/rated/movies?api_key=${process.env.API_KEY}&language=en-US&sort_by=created_at.asc`
        )
      ).data.results;
      if (ratedMovies) {
        const movie = ratedMovies.filter(
          rated => rated.id.toString() === movieid
        );
        movie.length > 0 ? setRate(movie[0].rating) : setRate(null);
      }
    })();
  }, []);
  const handleRating = async (value: number | null) => {
    if (isAuthenticated(user.expires_at)) {
      try {
        const response = (
          await axios.post(
            `/movie/${movieid}/rating?api_key=${process.env.API_KEY}&guest_session_id=${user.guest_session_id}`,
            { value }
          )
        ).data;
        setRate(value);
        setMessage(response.status_message);
      } catch (err) {
        setRate(null);
        setMessage("Error while submiting rating. Try again later.");
      }
    } else {
      setRate(null);
      setMessage("You do not have permissions to access the service. Log in.");
    }
  };

  return (
    <div>
      <Rating
        className={rateElement}
        name="movie-stars"
        max={10}
        value={rate}
        onChange={(e, value) => handleRating(value)}
        size="large"
      />
      <h2 className={msg}>{message || null}</h2>
    </div>
  );
};

export default CustomRating;
