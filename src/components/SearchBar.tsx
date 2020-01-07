import React, { useContext } from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { DataContext } from "./../context/DataContext";
import Search from "./Search";

const searchbar = css`
  background: ${colors.primary};
  border-top: 1px solid #fff;
`;

const container = css`
  display: flex;
  justify-content: center;
  padding: 1em 0;

  button {
    background: ${colors.secondaryDark};
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    margin: 0 0.5em;
    padding: 0.5em 1em;

    &:hover {
      background: ${colors.secondary};
      cursor: pointer;
    }

    &:active {
      transform: translateY(2px);
    }
  }
`;

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { setFilterBy, setQuery } = useContext(DataContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuery("");
    setFilterBy(e.currentTarget.value);
  };
  return (
    <div className={searchbar}>
      <div className={container}>
        <Search />
        <button onClick={handleClick} value="popular">
          Popular
        </button>
        <button onClick={handleClick} value="now_playing">
          Now Playing
        </button>
        <button onClick={handleClick} value="top_rated">
          Top Rated
        </button>
        <button onClick={handleClick} value="upcoming">
          Upcoming
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
