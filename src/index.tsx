import React from "react";
import { render } from "react-dom";
import App from "./App";
import UserContextProvider from "./context/UserContext";
import DataContextProvider from "./context/DataContext";

const jsx = (
  <UserContextProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </UserContextProvider>
);

render(jsx, document.getElementById("root"));
