import React from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";

const navbar = css`
  background: ${colors.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  & h1 {
    margin: 0;
    text-align: center;
  }
`;

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div className={navbar}>
      <h1>Movie roulette</h1>
      <button className="loginButton">Login</button>
    </div>
  );
};

export default Navbar;