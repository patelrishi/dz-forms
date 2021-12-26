import React, { useEffect, useState } from "react";
import { makeStyles, Select } from "@material-ui/core";
import CommonTextField from "../common/textfields/CommonTextField";
import {
  Divider,
  FormControlLabel,
  IconButton,
  MenuItem,
  Switch,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { LightActiveCheckBox } from "../common/checkBox/LightActiveCheckBox";
import { RadioButton } from "../common/radioButton/RadioButton";
import { H6 } from "../common/typography/Header";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    width: "100%",
    height: "fit-content",
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 12,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    "&>div": {
      width: "100%",
      padding: "16px 16px 16px 0",
    },
    "&>svg": {
      margin: "0 8px",
      color: "#808080",
    },
  },
  formCompTop: {
    display: "flex",
    justifyContent: "space-between",
    "&>div": {
      "&:nth-child(1)": {
        width: "70%",
      },
      "&:nth-child(2)": {
        width: "25%",
      },
    },
  },
  formContentTypeMain: {
    margin: "10px 0",
    "&>div": {
      width: "60%",
    },
  },
  formContentBottom: {
    display: "flex",
    justifyContent: "end",
  },

  optionnRoot: {
    "&>h6": {
      cursor: "pointer",
      color: "#9c27b0",
    },
  },
  OptionField: {
    width: "100% !important",
    display: "flex",
    "&>div": {
      width: "70%",
    },
  },
}));

const queTypes = [
  {
    name: "Short Question",
    value: "shortQue",
  },
  {
    name: "Long Question",
    value: "longQue",
  },
  {
    name: "Drop Down",
    value: "dropDown",
  },
  {
    name: "CheckBox",
    value: "checkBox",
  },
  {
    name: "Multiple Choices",
    value: "multipleChoices",
  },
];

const FormComponent = ({
  data,
  index,
  HandleUpdateQuestion,
  handleCopyQuestion,
  handleRemoveQuestion,
}) => {
  const classes = useStyles();
  const [queType, setqueType] = useState("");
  const [optionArr, setOptionArr] = useState([]);

  useEffect(() => {
    if (data.options !== undefined && data.options.length > 0) {
      setOptionArr(data?.options);
    }
    if (data.type !== undefined) {
      setqueType(data?.type);
    }
  }, [data]);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  const handleChange = (e) => {
    setqueType(e.target.value);
    HandleUpdateQuestion(e.target.value, index, "type");
  };

  const handleAddOption = () => {
    let obj = {
      optionText: "",
    };
    let tempArr = [...optionArr, obj];
    setOptionArr(tempArr);
    HandleUpdateQuestion(tempArr, index, "options");
  };

  const handleUpdateOption = (value, i) => {
    let tempArr = [...optionArr];

    // update that object
    tempArr[i].optionText = value;
    setOptionArr(tempArr);
    HandleUpdateQuestion(tempArr, index, "options");
  };

  const handleRemoveOption = (i) => {
    let tempArr = [...optionArr];
    // get object index
    const updatedArr = tempArr.filter((obj, index) => index !== i);
    // update that object
    setOptionArr(updatedArr);
    HandleUpdateQuestion(updatedArr, index, "options");
  };

  return (
    <div className={classes.formRoot}>
      <DragIndicatorIcon />
      <div>
        <div className={classes.formCompTop}>
          <CommonTextField
            variant="standard"
            label="question"
            color="primary"
            value={data?.questionText}
            onChange={(e) =>
              HandleUpdateQuestion(e.target.value, index, "question")
            }
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={queType}
            //   label="Age"
            onChange={handleChange}
          >
            {queTypes.map((elem) => (
              <MenuItem value={elem.value}>{elem.name}</MenuItem>
            ))}
          </Select>
        </div>
        <div className={classes.formContentTypeMain}>
          {/* short question */}
          {queType === "shortQue" && (
            <CommonTextField
              variant="standard"
              label="Short Question"
              color="primary"
              disabled
            />
          )}
          {/* Long Questions */}
          {queType === "longQue" && (
            <CommonTextField
              variant="standard"
              label="Long Question"
              color="primary"
              disabled
              multiline
            />
          )}
          {/* Multiple Choices */}
          {queType === "multipleChoices" && (
            <div className={classes.optionnRoot}>
              {optionArr.map((elem, i) => (
                <div className={classes.OptionField}>
                  <RadioButton disabled>
                    <CommonTextField
                      variant="standard"
                      value={elem.optionText}
                      onChange={(e) => handleUpdateOption(e.target.value, i)}
                    />
                  </RadioButton>
                  <IconButton onClick={() => handleRemoveOption(i)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
              <H6 onClick={handleAddOption}>Add Option</H6>
            </div>
          )}

          {/* CheckBox */}
          {queType === "checkBox" && (
            <div className={classes.optionnRoot}>
              {optionArr.map((elem, i) => (
                <div className={classes.OptionField}>
                  <LightActiveCheckBox disabled>
                    <CommonTextField
                      variant="standard"
                      value={elem.optionText}
                      onChange={(e) => handleUpdateOption(e.target.value, i)}
                    />
                  </LightActiveCheckBox>
                  <IconButton onClick={() => handleRemoveOption(i)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
              <H6 onClick={handleAddOption}>Add Option</H6>
            </div>
          )}
          {/* drop Down */}
          {queType === "dropDown" && (
            <div className={classes.optionnRoot}>
              {optionArr.map((elem, i) => (
                <div className={classes.OptionField}>
                  <CommonTextField
                    variant="standard"
                    value={elem.optionText}
                    onChange={(e) => handleUpdateOption(e.target.value, i)}
                  />

                  <IconButton onClick={() => handleRemoveOption(i)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
              <H6 onClick={handleAddOption}>Add Option</H6>
            </div>
          )}
        </div>
        <Divider variant="middle" />
        <div className={classes.formContentBottom}>
          <IconButton onClick={() => handleCopyQuestion(data, index)}>
            <ContentCopyIcon />
          </IconButton>
          <IconButton onClick={() => handleRemoveQuestion(index)}>
            <DeleteIcon />
          </IconButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <FormControlLabel
            control={<Switch defaultChecked color="primary" />}
            label="required"
          />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
