import React from "react";
import styles from "./hover.scss";

interface Props {
  onHover: React.ReactNode;
  children: React.ReactNode;
}

const Hover: React.FC<Props> = ({ onHover, children }) => {
  return (
    <div className={styles.hoverCard}>
      <div className={styles.noHover}>{children}</div>
      <div className={styles.hover}>{onHover}</div>
    </div>
  );
};

export default Hover;
