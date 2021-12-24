import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
  scoutibleH1Root: {
    color: "#000000",
    fontSize: 42,
    lineHeight: "58.8px",
  },
  scoutibleH2Root: {
    color: "#000000",
    fontSize: 32,
    lineHeight: "44.8px",
  },
  scoutibleH3Root: {
    color: "#000000",
    fontSize: 26,
    lineHeight: "36.4px",
  },
  scoutibleH4Root: {
    color: "#000000",
    fontSize: 24,
    lineHeight: "33.6px",
  },
  scoutibleH5Root: {
    color: "#000000",
    fontSize: 22,
    lineHeight: "30.8px",
  },
  scoutibleH6Root: {
    color: "#000000",
    fontSize: 16,
    lineHeight: "22.4px",
  },
  scoutibleMedium: {
    fontWeight: 400,
  },
  scoutibleBold: {
    fontWeight: 600,
  },
}));

export function H1({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="h1"
      className={classNames(
        classes.scoutibleH1Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function H2({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="h2"
      className={classNames(
        classes.scoutibleH2Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function H3({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="h3"
      className={classNames(
        classes.scoutibleH3Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function H4({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="h4"
      className={classNames(
        classes.scoutibleH4Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function H5({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="h5"
      className={classNames(
        classes.scoutibleH5Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function H6({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="h6"
      className={classNames(
        classes.scoutibleH6Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}
