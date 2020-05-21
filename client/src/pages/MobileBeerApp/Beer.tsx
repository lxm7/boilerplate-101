import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export interface IBeer {
  name: string;
  id: any; // number | undefined; TODO - split out modal logic and payload
  image_url: string;
  tagline: string;
  abv: number;
  description: string;
  food_pairing: string[];
  // Todo - this gets tacked on to end of modal...should be seperate
  open?: boolean;
}

const Beer = ({
  showBeer,
  addToCart
}: {
  showBeer: IBeer;
  addToCart: (event: React.MouseEvent<HTMLButtonElement>, item: IBeer) => void;
}) => {
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
