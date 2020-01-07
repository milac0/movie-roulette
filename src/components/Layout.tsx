import React from "react";
import { css } from "emotion";
import Header from "./Header";
import Footer from "./Footer";

const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const content = css`
  flex-grow: 1;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={container}>
      <div className={content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
