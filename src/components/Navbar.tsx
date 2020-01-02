import React, { useContext } from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import { UserContext } from "./../context/UserContext";
import GuestButton from "./GuestButton";
import { Link } from "react-router-dom";

const navbar = css`
  background: ${colors.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  & h1 {
    color: white;
    margin: 0;
    text-align: center;
    text-decoration: none;
  }
`;

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div className={navbar}>
      <Link to="/">
        <h1>Movie roulette</h1>
      </Link>
      <GuestButton />
    </div>
  );
};

export default Navbar;
