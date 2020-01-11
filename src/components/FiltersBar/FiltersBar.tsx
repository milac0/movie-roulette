import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Filters from "./../../enums/Filters";
import styles from "./filtersBar.scss";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { filterBy, setFilterBy, setQuery } = useContext(DataContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuery("");
    setFilterBy(e.currentTarget.value as Filters);
  };

  const { Popular, NowPlaying, TopRated, Upcoming } = Filters;

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        value={Popular}
        className={filterBy === Popular ? styles.activeFilter : null}
      >
        Popular
      </button>
      <button
        onClick={handleClick}
        value={NowPlaying}
        className={filterBy === NowPlaying ? styles.activeFilter : null}
      >
        Now Playing
      </button>
      <button
        onClick={handleClick}
        value={TopRated}
        className={filterBy === TopRated ? styles.activeFilter : null}
      >
        Top Rated
      </button>
      <button
        onClick={handleClick}
        value={Upcoming}
        className={filterBy === Upcoming ? styles.activeFilter : null}
      >
        Upcoming
      </button>
    </div>
  );
};

export default SearchBar;
