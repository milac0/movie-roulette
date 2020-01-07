import React, { useContext } from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { DataContext } from "./../context/DataContext";

const searchbar = css`
  background: ${colors.primary};
  border-top: 1px solid #fff;
  color: white;
  padding: 1em 2em;

  .navbar-content {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 1200px;

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
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }
`;

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { setFilterBy } = useContext(DataContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilterBy(e.currentTarget.value);
  };
  return (
    <div className={searchbar}>
      <div className="navbar-content">
        <button onClick={handleClick} value="popular">
          Popular
        </button>
        <button onClick={handleClick} value="now_playing">
          Now Playing
        </button>
        <button onClick={handleClick} value="top_rated">
          Top Rated
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
