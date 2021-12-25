import React from "react";
import {
  Radio,
  withStyles,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import classnames from "classnames";

const PrimaryRadio = withStyles((theme) => ({
  root: {
    fontSize: 18,
    color: "#B8B8B8",
    "&$checked": {
      color: theme.palette.primary,
    },
  },
  checked: {},
}))(Radio);

const useStyles = makeStyles((theme) => ({
  scoutibleRadio: {
    "&>span": {
      fontSize: 18,
    },
  },
  scoutibleItalic: {
    "&>span": {
      fontStyle: "italic",
    },
  },
}));

export const RadioButton = ({
  children,
  value = "radio",
  disabled = false,
  name = "radio",
  italicLabel = false,
  onChange = () => {},
  checked = false,
  ...other
}) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classnames(
        classes.scoutibleRadio,
        italicLabel && classes.scoutibleItalic
      )}
      value={value}
      control={
        <PrimaryRadio
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          checked={checked}
        />
      }
      label={children}
    />
  );
};
