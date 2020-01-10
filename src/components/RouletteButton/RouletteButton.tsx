import React from "react";
import shuffleImg from "../../assets/images/shuffle.png";
import Modal from "@material-ui/core/Modal";
import ModalContent from "../ModalContent/ModalContent";
import styles from "./rouletteButton.scss";

interface Props {}

const RouletteButton: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        src={shuffleImg}
        className={styles.rouletteBtn}
        onClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        <div>
          <ModalContent handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default RouletteButton;
