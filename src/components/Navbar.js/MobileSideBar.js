import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { H5 } from "../common/typography/Header";

const useStyles = makeStyles((theme) => ({
  sideNavRoot: {
    display: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  activeTab: {
    background: "rgba(109, 48, 239, 0.3) !important",
  },
}));

export default function MobileSideBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.sideNavRoot}
    >
      <List>
        {[
          { name: "Home", value: "/#home" },
          { name: "About Us", value: "/#about" },
          { name: "Services", value: "/#services" },
          { name: "Doctors", value: "/#doctors" },
          { name: "Contact Us ", value: "/#contact" },
          { name: "Register ", value: "/register" },
        ].map((elem, index) => (
          <a href={elem.value}>
            <ListItem
              button
              key={elem.name}
              className={classNames(
                `/${window.location.href.split("/").at(-1)}` === elem.value &&
                  classes.activeTab
              )}
            >
              <H5 style={{ color: "#9c27b0" }}>{elem.name} </H5>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={classes.sideNavRoot}>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
