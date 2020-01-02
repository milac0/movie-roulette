import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import UserContextProvider from "./context/UserContext";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={MovieList} exact />
          <Route path="/movies/:movieid" component={MovieDetails} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
