import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { css } from "emotion";
import { colors } from "./theme/theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie" component={Movie} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
