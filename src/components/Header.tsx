import React from "react";
import GuestButton from "./GuestButton";
import { Link } from "react-router-dom";
import styles from "./header.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/">
          <h1>Movie roulette</h1>
        </Link>
        <GuestButton />
      </div>
    </div>
  );
};

export default Header;
