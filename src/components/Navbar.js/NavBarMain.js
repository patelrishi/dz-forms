import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";
import NavMenu from "./NavMenu";
import { Link, Tab, Tabs } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 1300,
    top: 0,
    height: "fit-content",
    width: "100%",
    position: "fixed",
    background: "#FFFFFF",
    zIndex: 1000,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(33 33 33 / 46%)",
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&>a>svg": {
        cursor: "pointer",
        padding: 7,
        color: "#9c27b0",
      },
    },
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    "&>button": {
      padding: 8,
      TextAlign: "center",
      background: "#F5f5f5",
      borderRadius: 10,
      height: 35,
      "&>div": {
        height: 25,
        width: 25,
        marginRight: 5,
      },
    },
  },
}));

const NavBarMain = ({ tabs }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Link href="/dashboard" underline="none">
          <AssignmentIcon color="primary" />
        </Link>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className={classes.navMenu}
          textColor="secondary"
          indicatorColor="secondary"
        >
          {tabs?.map((elem, i) => (
            <Tab label={elem} key={i} />
          ))}
        </Tabs>
        <NavMenu />
      </Box>
    </div>
  );
};

export default NavBarMain;
