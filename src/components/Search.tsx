import React, { useState, useContext } from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import axios from "axios";
import { DataContext } from "./../context/DataContext";

const search = css`
  input {
    border: 1px solid ${colors.secondaryDark};
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.25em 0.5em;
  }
`;

interface Props {}

const Search: React.FC<Props> = () => {
  const { setMovies, query, setQuery } = useContext(DataContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&include_adult=false&page=1`;
    const movies = (await axios.get(url)).data.results;
    setMovies(movies);
  };
  return (
    <form className={search} onSubmit={handleSubmit}>
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
