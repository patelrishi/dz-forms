import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core";

const NewCheckbox = withStyles((theme) => ({
  root: {
    width: "20px",
    height: "20px",
    borderRadius: 0,
    padding: 0,
  },
  colorSecondary: {
    "&$checked": {
      color: "#02C9FF",
    },
    "&:hover": {
      backgroundColor: "#f5005700",
    },
  },
  checked: {},
}))(Checkbox);

const useStyles = makeStyles((theme) => ({
  scoutibleCheckboxLabel: {
    marginLeft: -9,
    "&>span": {
      fontSize: 14,
      marginLeft: 10,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        whiteSpace: "pre-wrap",
      },
    },
  },
}));

export const LightActiveCheckBox = ({
  children,
  checked = undefined,
  onChecked = () => {},
  disabled = false,
  ...other
}) => {
  const classes = useStyles();
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <NewCheckbox
            // checkedIcon={<CheckIcon />}
            // icon={<UnCheckIcon />}
            checked={checked}
            onChange={() => onChecked(!checked)}
            name="active_checkbox"
            disabled={disabled}
          />
        }
        label={children}
        className={classes.scoutibleCheckboxLabel}
      />
    </FormGroup>
  );
};
