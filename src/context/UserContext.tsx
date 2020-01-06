import React, { createContext, useState } from "react";
import moment from "moment";

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
  setUser: (user: User) => {},
  isAuth: () => false
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

  const isAuth = () => {
    return moment().isBefore(
      moment(user.expires_at, "YYYY-MM-DD HH:mm:ss").utc()
    );
  };

  return (
    <UserContext.Provider value={{ user, setUser, isAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
