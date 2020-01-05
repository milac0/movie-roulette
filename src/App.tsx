import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import UserContextProvider, { UserContext } from "./context/UserContext";
import axios from "axios";
import moment from "moment";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

interface Props {}

const App: React.FC<Props> = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const userLocal = localStorage.user ? JSON.parse(localStorage.user) : null;
    if (
      userLocal &&
      moment().isBefore(
        moment(userLocal.expires_at, "YYYY-MM-DD HH:mm:ss").utc()
      )
    ) {
      setUser(userLocal);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={MovieList} exact />
        <Route path="/movies/:movieid" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
