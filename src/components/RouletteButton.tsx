import React from "react";
import { css } from "emotion";
import { colors } from "../theme/theme";
import shuffleImg from "../assets/images/shuffle2.png";
import Modal from "@material-ui/core/Modal";

const rouletteBtn = css`
  background: ${colors.secondary};
  border-radius: 50%;
  bottom: 1.75em;
  height: 60px;
  position: fixed;
  right: 4em;
  width: 60px;
  z-index: 1;
`;

const modalContent = css`
  background: ${colors.backgroundGrey};
  border: "2px solid #000";
  left: 50%;
  margin: 0;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {}

const RouletteButton: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const handleShuffle = () => {
    setOpen(true);
  };
  return (
    <div>
      <img src={shuffleImg} className={rouletteBtn} onClick={handleShuffle} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={modalContent}>
          <p>modal</p>
        </div>
      </Modal>
    </div>
  );
};

export default RouletteButton;
