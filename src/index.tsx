import React from "react";
import { render } from "react-dom";
import App from "./App";
import UserContextProvider from "./context/UserContext";

const jsx = (
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

render(jsx, document.getElementById("root"));
