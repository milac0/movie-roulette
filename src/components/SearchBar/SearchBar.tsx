import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Search from "../Search/Search";
import styles from "./searchBar.scss";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { setFilterBy, setQuery } = useContext(DataContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuery("");
    setFilterBy(e.currentTarget.value);
  };
  return (
    <div className={styles.searchbar}>
      <div className={styles.container}>
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
