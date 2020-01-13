import React, { useEffect } from "react";

interface Props {}

const ScrollToTopOnMount: React.FC<Props> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTopOnMount;
