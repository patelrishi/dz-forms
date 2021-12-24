import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/icons/SmartHealthLogo.svg";
import MobileSideBar from "./MobileSideBar";
import { Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 48,
    position: "fixed",
    background: "#FFFFFF",
    zIndex: 1000,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
      "&>a>svg": {
        cursor: "pointer",
      },
    },
  },
  navMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));
var tabs = [
  { name: "Home", value: "/#home" },
  { name: "About Us", value: "/#about" },
  { name: "Services", value: "/#services" },
  { name: "Doctors", value: "/#doctors" },
  { name: "Contact Us ", value: "/#contact" },
  { name: "Register ", value: "/register" },
];
const LandingNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (value === 0 && window.location.href.split("/").at(-1) !== "home") {
      window.location.href = "/#home";
    }
  }, [value]);
  return (
    <div className={classes.root}>
      <Box>
        <MobileSideBar />
        <Link href="/" underline="none">
          <Logo />
        </Link>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className={classes.navMenu}
          textColor="secondary"
          indicatorColor="secondary"
        >
          {tabs.map((elem) => (
            <Tab label={elem.name} href={elem.value} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default LandingNav;
