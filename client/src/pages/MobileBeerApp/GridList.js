import React from "react";

// MUI components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px"
  },
  item: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    border: "1px solid lightgray"
  },
  imgWrapper: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    maxHeight: "100%"
  }
}));

const GridList = ({ beerList, index, handleOpen, isLoading }) => {
  const classes = useStyles();

  if (isLoading)
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );

  return (
    <Grid
      container
      spacing={1}
      style={{
        margin: 0,
        width: "100%"
      }}
    >
      {beerList.map(beer => (
        <Grid key={beer.id} item xs={4}>
          <Box className={classes.item} onClick={e => handleOpen(e, beer)}>
            <div className={classes.imgWrapper}>
              {beer.image_url ? (
                <img
                  className={classes.img}
                  src={beer.image_url}
                  alt={beer.name}
                />
              ) : (
                <LocalCafeOutlinedIcon fontSize="large" />
              )}
            </div>
            <div>{beer.name}</div>
            <div>ABV: {beer.abv}%</div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridList;
