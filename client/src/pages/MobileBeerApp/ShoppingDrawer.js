import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const useStyles = makeStyles({
  shoppingTab: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    background: "grey"
  }
});

const ShoppingDrawer = ({ items, removeFromCart }) => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <Button className={classes.shoppingTab} onClick={toggleDrawer(true)}>
        Shopping Cart
      </Button>
      <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
        <List>
          {items.map((item, index) => (
            <div key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.image_url} />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
                <DeleteOutlineOutlinedIcon
                  onClick={e => removeFromCart(e, item.id)}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ShoppingDrawer;
