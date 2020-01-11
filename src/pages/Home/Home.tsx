import React, { Fragment } from "react";
import RouletteButton from "../../components/RouletteButton/RouletteButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import MovieList from "../../components/MovieList/MovieList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Fragment>
      <SearchBar />
      <FiltersBar />
      <MovieList />
      <LoadMoreButton />
      <RouletteButton />
    </Fragment>
  );
};

export default Home;
