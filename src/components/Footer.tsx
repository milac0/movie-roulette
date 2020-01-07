import React from "react";
import { css } from "emotion";
import { colors } from "./../theme/theme";

const footer = css`
  background: ${colors.backgroundGrey};
  text-align: center;
  padding: 3em;
  p {
    a {
      color: black;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
    }
  }
`;

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={footer}>
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
