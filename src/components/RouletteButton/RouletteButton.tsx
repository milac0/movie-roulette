import React from "react";
import shuffleImg from "./images/shuffle.png";
import Modal from "@material-ui/core/Modal";
import ModalContent from "../ModalContent/ModalContent";
import styles from "./rouletteButton.scss";

interface Props {}

const RouletteButton: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const handleShuffle = () => {
    setOpen(true);
  };
  return (
    <div>
      <img
        src={shuffleImg}
        className={styles.rouletteBtn}
        onClick={handleShuffle}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <ModalContent />
        </div>
      </Modal>
    </div>
  );
};

export default RouletteButton;
