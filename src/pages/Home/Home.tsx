import React, { Fragment } from "react";
import RouletteButton from "../../components/RouletteButton/RouletteButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Fragment>
      <SearchBar />
      <MovieList />
      <LoadMoreButton />
      <RouletteButton />
    </Fragment>
  );
};

export default Home;