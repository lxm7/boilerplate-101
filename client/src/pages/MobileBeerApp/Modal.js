import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  beerImg: {
    maxHeight: "120px"
  }
}));

const SimpleModal = ({ beer, open, handleClose, addToCart }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  if (!beer) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">{beer.name}</h2>
        <p id="simple-modal-description">
          <img
            className={classes.beerImg}
            src={beer.image_url}
            alt={beer.description}
          />
          {beer.tagline}
          {beer.abv}
          {beer.description}
          {beer.food_pairing}
        </p>
        <button type="button" onClick={e => addToCart(e, beer)}>
          Add to Cart
        </button>
      </div>
    </Modal>
  );
};

export default SimpleModal;
