import React, { useContext, useEffect } from "react";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./customRating.scss";
import Movie from "./../../interface/Movie";

interface Props {
  movieid: string | undefined;
}

const CustomRating: React.FC<Props> = ({ movieid }) => {
  const { user, isAuth } = useContext(UserContext);
  const [message, setMessage] = useState();
  const [rate, setRate] = useState<number | null>(0);

  useEffect(() => {
    (async () => {
      if (isAuth()) {
        try {
          const ratedMovies = (
            await axios.get(
              `/guest_session/${user.guest_session_id}/rated/movies?api_key=${process.env.API_KEY}&language=en-US&sort_by=created_at.asc`
            )
          ).data.results;
          if (ratedMovies) {
            const movie = ratedMovies.filter(
              (rated: Movie) => rated.id.toString() === movieid
            );
            movie.length > 0 ? setRate(movie[0].rating) : setRate(null);
          }
        } catch (err) {
          console.log(err);
        }
      }
    })();
  }, []);
  const handleRating = async (value: number | null) => {
    if (isAuth()) {
      try {
        await axios.post(
          `/movie/${movieid}/rating?api_key=${process.env.API_KEY}&guest_session_id=${user.guest_session_id}`,
          { value }
        );
        setRate(value);
        setMessage(null);
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
        name="movie-stars"
        max={10}
        value={rate}
        onChange={(e, value) => handleRating(value)}
      />
      <h2 className={styles.msg}>{message || null}</h2>
    </div>
  );
};

export default CustomRating;
