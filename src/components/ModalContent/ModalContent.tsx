import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { randomNumber } from "./modalContent.helpers";
import styles from "./modalContent.scss";

interface Props { }

const ModalContent: React.FC<Props> = () => {
  const [movie, setMovie] = useState(null);
  const [next, setNext] = useState(0);
  useEffect(() => {
    (async () => {
      const totalPages = (
        await axios.get(
          `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        )
      ).data.total_pages;
      const randomPage = randomNumber(0, totalPages);
      const randomMovie = randomNumber(0, 19);
      const movie = (
        await axios.get(
          `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&include_video=false&page=${randomPage}`
        )
      ).data.results[randomMovie];
      setMovie(movie);
    })();
  }, [next]);
  return (
    <div className={styles.content}>
      {movie === null ? (
        <div className={styles.randomSkeleton}></div>
      ) : (
          <div className={styles.modalRandom}>
            <Link to={`/movies/${movie.id}`}>
              <div className={styles.poster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </div>
            </Link>
            <div>
              <button
                className={styles.nextBtn}
                onClick={() => setNext(next + 1)}
              >
                Random
            </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default ModalContent;
