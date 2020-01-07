import React, { createContext, useState } from "react";

const initState = {
  filterBy: "popular",
  setFilterBy: (filter: string) => {}
};

export const DataContext = createContext(initState);

interface Props {
  children: React.ReactNode;
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  const [filterBy, setFilterBy] = useState("popular");

  return (
    <DataContext.Provider value={{ filterBy, setFilterBy }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
