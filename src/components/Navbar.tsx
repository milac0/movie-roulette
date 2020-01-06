import React from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import GuestButton from "./GuestButton";
import { Link } from "react-router-dom";

const navbar = css`
  background: ${colors.primary};
  color: white;
  padding: 1em 2em;
  & .navbar-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    & h1 {
      color: #fff;
      margin: 0;
      text-align: center;
      text-decoration: none;
    }
  }
`;

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div className={navbar}>
      <div className="navbar-content">
        <Link to="/">
          <h1>Movie roulette</h1>
        </Link>
        <GuestButton />
      </div>
    </div>
  );
};

export default Navbar;
