import React, { useState } from "react";
import { Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { IBeer } from "./Beer";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: (width: number) => width,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

type SimpleModalProps = {
  width: number;
  open: boolean;
  handleClose: (beer: IBeer) => void;
  children: React.ReactNode;
};

const SimpleModal = ({
  width,
  open,
  handleClose,
  children
}: SimpleModalProps) => {
  const classes = useStyles(width);
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </Modal>
  );
};

export default SimpleModal;
