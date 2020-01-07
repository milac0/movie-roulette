import React from "react";
import { css } from "emotion";

const hover = css`
  .hover-card {
    position: relative;

    .no-hover {
      opacity: 1;
    }

    .hover {
      opacity: 0;
      position: absolute;
      top: 0;
    }

    &:hover {
      .no-hover {
        opacity: 0.3;
      }

      .hover {
        opacity: 1;
      }
    }
  }
`;

interface Props {
  onHover: React.ReactNode;
  children: React.ReactNode;
}

const Hover: React.FC<Props> = ({ onHover, children }) => {
  return (
    <div className={hover}>
      <div className="hover-card">
        <div className="no-hover">{children}</div>
        <div className="hover">{onHover}</div>
      </div>
    </div>
  );
};

export default Hover;
