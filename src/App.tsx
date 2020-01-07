import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import { UserContext } from "./context/UserContext";
import axios from "axios";
import Footer from "./components/Footer";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

interface Props {}

const App: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const user = localStorage.user ? JSON.parse(localStorage.user) : null;
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={MovieList} exact />
        <Route path="/movies/:movieid" component={MovieDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
