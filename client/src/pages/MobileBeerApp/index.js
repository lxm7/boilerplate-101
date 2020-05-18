import React, { useState, useEffect, useRef } from "react";
import wait from "waait";

// MUI components
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Button from "@material-ui/core/Button";

// MUI
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

// Local components
import SimpleModal from "./Modal";
import ShoppingDrawer from "./ShoppingDrawer";
import GridList from "./GridList";
import Beer from "./Beer";

// const CATEGORY_TABS = { 0: "Drink", 1: "Food", 2: "Setting", 3: "Search" };
const DRINK_TABS = { 0: "All", 1: "Pizza", 2: "Steak" };
const ITEM_PER_PAGE = 9;

const getTabNameFromTabIndex = index => DRINK_TABS[index];

const getTabIndices = tabs => Object.keys(tabs);

const BeerApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);

  const [beerList, setBeerList] = useState([]);
  const [foodTab, setFoodTab] = useState("All");

  // Drinks Tab
  const [index, setIndex] = useState(0);
  const handleChange = (e, index) => setIndex(index);
  const handleSwipeChange = index => setIndex(index);

  // Parent Tab
  const [mainTabIndex, setMainTabIndex] = useState(0);
  const handleMainTabSwipeChange = index => setMainTabIndex(index);
  const handleMainTabChange = (e, index) => setMainTabIndex(index);

  // Modal
  const [showBeer, setShowBeer] = useState({ open: false });
  const handleOpen = (e, beer) => setShowBeer({ ...beer, open: true });
  const handleClose = beer => setShowBeer({ ...beer, open: false });

  // Shopping cart
  const [shoppingItems, setShoppingItems] = useState([]);
  const addToCart = (e, item) => {
    setShoppingItems([...shoppingItems, item]);
    handleClose(item);
  };
  const removeFromCart = (e, id) => {
    const newItems = shoppingItems.filter(item => item.id !== id);
    setShoppingItems(newItems);
  };

  // Checks if user is on mobile/tablet and suggests to toggle view to see swipeable stuff
  useEffect(() => {
    const isMobileDevice = () => {
      if (typeof window.orientation === "undefined") {
        setShowBeer({ ...{}, open: true });
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    isMobileDevice();
  }, []);

  // This ensures we're back at page 1 in the API call when we change tabs
  useEffect(() => {
    setFoodTab(getTabNameFromTabIndex(index));
    setPage(1);
  }, [index]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        await wait(200);
        const res = await fetch(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=${ITEM_PER_PAGE}${foodTab &&
            `&food=${foodTab.toLowerCase()}`}`
        );

        const response = await res.json();
        setBeerList(response);

        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching API", e);
      }
    };
    fetchApi();
  }, [foodTab, page]);

  return (
    <div>
      <Tabs
        value={mainTabIndex}
        fullwidth="true"
        onChange={handleMainTabChange}
        centered
      >
        <Tab icon={<LocalCafeOutlinedIcon />} aria-label="drink" />
        <Tab icon={<RestaurantOutlinedIcon />} aria-label="food" />
        <Tab icon={<SettingsOutlinedIcon />} aria-label="settings" />
        <Tab icon={<SearchOutlinedIcon />} aria-label="search" />
      </Tabs>

      <SwipeableViews
        index={mainTabIndex}
        onChangeIndex={handleMainTabSwipeChange}
      >
        <div style={{ height: "700px" }} ref={gridRef}>
          <Tabs value={index} fullwidth="true" onChange={handleChange} centered>
            {getTabIndices(DRINK_TABS).map(key => (
              <Tab key={key} label={getTabNameFromTabIndex(key)} />
            ))}
          </Tabs>

          <SwipeableViews index={index} onChangeIndex={handleSwipeChange}>
            {getTabIndices(DRINK_TABS).map(index => (
              <GridList
                key={index}
                index={index}
                isLoading={isLoading}
                beerList={beerList}
                handleOpen={handleOpen}
              />
            ))}
          </SwipeableViews>
        </div>
        <>
          <Tabs value={0} fullwidth="true" onChange={() => null} centered>
            <Tab label="All food" />
          </Tabs>

          <p>Other stuff in here</p>
        </>
      </SwipeableViews>

      {showBeer.id && (
        <SimpleModal open={showBeer.open} handleClose={handleClose} width={250}>
          <Beer showBeer={showBeer} addToCart={addToCart} />
        </SimpleModal>
      )}

      {!isMobile && !showBeer.id && (
        <SimpleModal open={showBeer.open} handleClose={handleClose} width={600}>
          <div>
            <p>
              To demo the swipeable features, view in mobile mode in browser /
              on a device.
            </p>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </SimpleModal>
      )}

      <ShoppingDrawer
        items={shoppingItems || []}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default BeerApp;
