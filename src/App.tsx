import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { UserContext } from "./context/UserContext";
import axios from "axios";
import Layout from "./components/Layout/Layout";

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
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies/:movieid" component={MovieDetails} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
