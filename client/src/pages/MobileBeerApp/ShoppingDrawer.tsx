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

import { IBeer } from "./Beer";

const useStyles = makeStyles({
  shoppingTab: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    background: "grey"
  }
});

type ShoppingDrawerProps = {
  items: IBeer[];
  removeFromCart: (event: React.MouseEvent<SVGSVGElement>, id: number) => void;
};

const ShoppingDrawer = ({ items, removeFromCart }: ShoppingDrawerProps) => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (
      event.type === "keydown" &&
      (((event as unknown) as React.KeyboardEvent).key === "Tab" ||
        ((event as unknown) as React.KeyboardEvent).key === "Shift")
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
