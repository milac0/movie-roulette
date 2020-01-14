import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import styles from "./guestButton.scss";

interface Props {}

const GuestButton: React.FC<Props> = () => {
  const { setUser, isAuth } = useContext(UserContext);
  const [expand, setExpand] = useState(false);

  const handleLogin = async () => {
    setExpand(false);
    const response = (
      await axios.get(
        `/authentication/guest_session/new?api_key=${process.env.API_KEY}`
      )
    ).data;
    setUser(response);
    localStorage.setItem("user", JSON.stringify(response));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({
      success: false,
      guest_session_id: "",
      expires_at: ""
    });
  };

  const handleAccountInfo = () => {
    setExpand(!expand);
  };

  return isAuth() ? (
    <div className={styles.account}>
      <p className={styles.accountBtn} onClick={handleAccountInfo}>
        Hello, Guest
      </p>
      {expand && (
        <div className={styles.accountOptions}>
          <p onClick={handleLogout}>Sign out</p>
        </div>
      )}
    </div>
  ) : (
    <button className={styles.btn} onClick={handleLogin}>
      Login as Guest
    </button>
  );
};

export default GuestButton;
