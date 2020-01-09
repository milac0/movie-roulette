import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

interface Props {}

const LoadMoreButton: React.FC<Props> = () => {
  const { page, setPage } = useContext(DataContext);
  const handleClick = () => setPage(page + 1);

  return <button onClick={handleClick}>load more...</button>;
};

export default LoadMoreButton;
