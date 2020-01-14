import React, { createContext, useState } from "react";
import Movie from "../interface/Movie";
import Filters from "./../enums/Filters";

const movies: Array<Movie> = [];

const initState = {
  movies,
  setMovies: (movies: Array<Movie>) => {},
  filterBy: Filters.Popular,
  setFilterBy: (filter: Filters) => {},
  query: "",
  setQuery: (filter: string | null) => {},
  page: 1,
  setPage: (page: number) => {}
};

export const DataContext = createContext(initState);

interface Props {
  children: React.ReactNode;
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  const [filterBy, setFilterBy] = useState<Filters | null>(Filters.Popular);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [page, setPage] = useState(1);

  return (
    <DataContext.Provider
      value={{
        filterBy,
        setFilterBy,
        movies,
        setMovies,
        query,
        setQuery,
        page,
        setPage
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
