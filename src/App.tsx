import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";
import UserContextProvider from "./context/UserContext";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={MovieList} exact />
          <Route path="/movie" component={Movie} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
