import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import styles from "./filtersBar.scss";

enum Filters {
  Popular = "popular",
  NowPlaying = "now_playing",
  TopRated = "top_rated",
  Upcoming = "upcoming"
}

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { setFilterBy, setQuery } = useContext(DataContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuery("");
    setFilterBy(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} value={Filters.Popular}>
        Popular
      </button>
      <button onClick={handleClick} value={Filters.NowPlaying}>
        Now Playing
      </button>
      <button onClick={handleClick} value={Filters.TopRated}>
        Top Rated
      </button>
      <button onClick={handleClick} value={Filters.Upcoming}>
        Upcoming
      </button>
    </div>
  );
};

export default SearchBar;
