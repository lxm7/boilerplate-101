import React from "react";
import { Link } from "react-router-dom";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const titles = [
  "Index",
  "Shopping List",
  "Mobile Beer App",
  "Shortest Route",
  "Movie List",
  "Webworker Export",
  "MapBox",
  "Sunrise Sunset",
  "Currency Change Algorithm",
  "Use Draggable Scroll",
  "Recursive Ul"
];

const makeRoute = (title: string) => {
  if (title === "Index") return "/";
  return `/${title.replace(/\s+/g, "-").toLowerCase()}`;
};

const useStyles = makeStyles({
  list: {
    width: 250,
    background: "#333333",
    padding: "1.2rem",
    height: "100%"
  },
  listItem: {
    color: "white"
  },
  menuIcon: {
    color: "#333333"
  },
  link: {
    textDecoration: "none"
  }
});

type Class = {
  list: string;
  link: string;
  listItem: string;
};

type ItemsProps = {
  classes: Class; // Partial<ClassNameMap<keyof typeof useStyles>>;
  titles: string[];
  toggleDrawer: (open: boolean) => any;
};

const Items = ({ classes, titles, toggleDrawer }: ItemsProps) => (
  <List className={classes.list}>
    {titles.map((title: string) => (
      <ListItem button key={title}>
        <Link
          className={classes.link}
          key={`${makeRoute(title)}`}
          to={`${makeRoute(title)}`}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItemText className={classes.listItem} primary={title} />
        </Link>
      </ListItem>
    ))}
  </List>
);

const Menu = () => {
  const classes = useStyles();
  const isMobileMediaQuery = useMediaQuery("(max-width:768px)");

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div className="nav">
      {isMobileMediaQuery ? (
        <>
          <Button onClick={toggleDrawer(true)}>
            <MenuOutlinedIcon className={classes.menuIcon} fontSize="large" />
          </Button>

          <SwipeableDrawer
            anchor={"left"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Items
              classes={classes}
              titles={titles}
              toggleDrawer={toggleDrawer}
            />
          </SwipeableDrawer>
        </>
      ) : (
        <Items classes={classes} titles={titles} toggleDrawer={toggleDrawer} />
      )}
    </div>
  );
};

export default Menu;
