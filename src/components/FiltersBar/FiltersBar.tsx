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

  return (
    <div className={styles.container}>
      {Object.keys(Filters).map((key: keyof typeof Filters, i) => (
        <button
          key={i}
          onClick={handleClick}
          value={Filters[key]}
          className={filterBy === Filters[key] ? styles.activeFilter : null}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default SearchBar;
