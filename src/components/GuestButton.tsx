import React, { useContext, useState } from "react";
import { css } from "emotion";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { colors } from "./../theme/theme";

const btn = css`
  background: ${colors.secondary};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5em 1em;
  &:hover {
    background: ${colors.secondaryDark};
  }
`;
const account = css`
  margin-right: 0;
  position: relative;
  & .acc-btn {
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    margin: 0;
    margin-bottom: 0.25em;
    padding: 0.5em;
    &:hover {
      background: #fff;
      color: ${colors.primary};
    }
  }
  & div {
    background: ${colors.backgroundGrey};
    border-radius: 5px;
    color: black;
    position: absolute;
    right: -1.25em;
    width: 140px;
    z-index: 1;
    & p {
      border-radius: 5px;
      cursor: pointer;
      margin: 0.25em;
      padding: 0.5em 1em;
      &:hover {
        background: #aaaaaa;
      }
    }
  }
`;

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
    <div className={account}>
      <p className="acc-btn" onClick={handleAccountInfo}>
        Hello, Guest
      </p>
      {expand && (
        <div>
          <p onClick={handleLogout}>Sign out</p>
          <p>//other acc stuff</p>
        </div>
      )}
    </div>
  ) : (
    <button className={btn} onClick={handleLogin}>
      Login as Guest
    </button>
  );
};

export default GuestButton;
