import React from "react";
import styles from "./footer.scss";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.footer}>
      <p>
        API provided by{" "}
        <a href="https://www.themoviedb.org/" target="_blank">
          TMDb
        </a>
      </p>
    </div>
  );
};

export default Footer;
