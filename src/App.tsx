import React from "react";
import { css } from "emotion";
import { colors } from "./theme/theme";
import Navbar from "./components/Navbar";

const text = css`
  color: ${colors.primary};
`;

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className={text}>
      <Navbar />
      Hello App!
    </div>
  );
};

export default App;
