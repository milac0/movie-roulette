import React, { createContext, useState } from "react";
import Movie from "../interface/Movie";

const initState = {
  movies: [],
  setMovies: (movies: Array<Movie>) => {},
  filterBy: "popular",
  setFilterBy: (filter: string) => {},
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
  const [filterBy, setFilterBy] = useState<string | null>("popular");
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
