import React, { createContext, useState } from "react";

interface User {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

const initState = {
  user: {
    success: false,
    guest_session_id: "",
    expires_at: ""
  },
  setUser: (user: User) => {}
};

export const UserContext = createContext(initState);

interface Props {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({
    success: false,
    guest_session_id: "",
    expires_at: ""
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
