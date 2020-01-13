import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import styles from "./loadMore.scss";

interface Props {}

const LoadMoreButton: React.FC<Props> = () => {
  const { page, setPage } = useContext(DataContext);
  const handleClick = () => setPage(page + 1);

  return (
    <div className={styles.loadMore}>
      <button onClick={handleClick}>load</button>
    </div>
  );
};

export default LoadMoreButton;
