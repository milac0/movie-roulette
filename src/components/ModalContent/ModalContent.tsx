import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { randomNumber } from "./modalContent.helpers";
import Genre from "../../interface/Genre";
import questionImg from "../../assets/images/question.png";
import closeImg from "../../assets/images/close.png";
import styles from "./modalContent.scss";

interface Props {
  handleClose: () => void;
}

const ModalContent: React.FC<Props> = ({ handleClose }) => {
  const genreURL = `/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`;
  const getGenreMovieURL = (page: number, genre: string) =>
    `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`;

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [select, setSelect] = useState("28");
  const [firstRender, setFirstRender] = useState(true);
  const [next, setNext] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { genres: genresList }
        } = await axios.get(genreURL);
        setGenres(genresList);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!firstRender) {
        // total pages is always 500
        const totalPages = 500;
        const randomPage = randomNumber(1, totalPages);
        const randomMovie = randomNumber(0, 19);
        try {
          const {
            data: { results: movies }
          } = await axios.get(getGenreMovieURL(randomPage, select));
          setMovie(movies[randomMovie]);
        } catch (err) {
          console.log(err);
        }
      }
    })();
  }, [next]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const handleNext = () => {
    setFirstRender(false);
    setNext(next + 1);
  };

  return (
    <div className={styles.content}>
      <img className={styles.close} src={closeImg} onClick={handleClose} />
      <div className={styles.poster}>
        {firstRender ? (
          <img src={questionImg} />
        ) : movie === null ? null : (
          <Link to={`/movies/${movie.id}`}>
            {movie.poster_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ) : (
              <img src={questionImg} />
            )}
          </Link>
        )}
      </div>
      <div className={styles.options}>
        {genres.length > 0 ? (
          <select onChange={handleChange} value={select}>
            {genres.map((genre: Genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        ) : (
          <select>Loading</select>
        )}
        <button onClick={handleNext}>Random</button>
      </div>
    </div>
  );
};

export default ModalContent;
