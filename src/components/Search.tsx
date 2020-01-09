import React, { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "./../context/DataContext";
import styles from "./search.scss";

interface Props {}

const Search: React.FC<Props> = () => {
  const { setMovies, query, setQuery, setFilterBy } = useContext(DataContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      const url = `/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&include_adult=false&page=1`;
      const movies = (await axios.get(url)).data.results;
      setMovies(movies);
      setFilterBy(null);
    }
  };
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="search for..."
        onChange={handleChange}
        value={query}
      />
    </form>
  );
};

export default Search;
