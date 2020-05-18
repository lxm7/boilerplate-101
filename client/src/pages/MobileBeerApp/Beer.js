import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Beer = ({ showBeer, addToCart }) => {
  const useStyles = makeStyles(() => ({
    beerImg: {
      maxHeight: "120px"
    }
  }));
  const classes = useStyles();

  return (
    <>
      <h2 id="simple-modal-title">{showBeer.name}</h2>
      <p id="simple-modal-description">
        <img
          className={classes.beerImg}
          src={showBeer.image_url}
          alt={showBeer.description}
        />
        {showBeer.tagline}
        {showBeer.abv}
        {showBeer.description}
        {showBeer.food_pairing}
      </p>
      <button type="button" onClick={e => addToCart(e, showBeer)}>
        Add to Cart
      </button>
    </>
  );
};

export default Beer;
