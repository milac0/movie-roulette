import React, { useContext } from "react";
import { css } from "emotion";
// import { primary } from "../theme/theme";
import axios from "axios";
import { UserContext } from "../context/UserContext";

interface Props {}

const GuestButton: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);
  const handleClick = async () => {
    const response = await axios.get(
      `/authentication/guest_session/new?api_key=${process.env.API_KEY}`
    );
    setUser(response.data);
  };
  return <button onClick={handleClick}>Guest</button>;
};

export default GuestButton;
