import React, { useContext } from "react";
import { css } from "emotion";
// import { primary } from "../theme/theme";
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

interface Props {}

const GuestButton: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);
  const handleClick = async () => {
    const response = await axios.get(
      `/authentication/guest_session/new?api_key=${process.env.API_KEY}`
    );
    setUser(response.data);
  };
  return (
    <button className={btn} onClick={handleClick}>
      Guest
    </button>
  );
};

export default GuestButton;
