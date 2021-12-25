import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import FormComponent from "./FormComponent";
import { H1, H4, H6 } from "../common/typography/Header";
import CommonTextField from "../common/textfields/CommonTextField";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    marginTop: 67,
    borderRadius: 12,
  },
  formTitleSection: {
    height: 160,
    width: "100%",
    // height: "fit-content",
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    "&>hr": {
      margin: "16px 0",
    },
  },
}));

let ComponentArr = [
  {
    name: "rishi1",
    createdBy: "",
    question: "what is speed",
    options: [
      {
        optiontext: "yes",
      },
      {
        optiontext: "no",
      },
      {
        optiontext: "Maybe",
      },
      {
        optiontext: "Never",
      },
      {
        optiontext: "someday",
      },
    ],
  },
  {
    name: "rishi2",
    question: "what is velocity",
    options: [
      {
        optiontext: "yes",
      },
      {
        optiontext: "no",
      },
      {
        optiontext: "Maybe",
      },
      {
        optiontext: "Never",
      },
      {
        optiontext: "someday",
      },
    ],
  },
  {
    name: "rishi3",
    question: "what is Rampage",
    options: [
      {
        optiontext: "yes",
      },
      {
        optiontext: "no",
      },
      {
        optiontext: "Maybe",
      },
      {
        optiontext: "Never",
      },
      {
        optiontext: "someday",
      },
    ],
  },
];

const FormMain = ({ formData, updateFormDetails }) => {
  const classes = useStyles();

  const [formDetails, setFormDetails] = useState("");
  // const [formCompArray, setformCompArray] = useState([]);

  useEffect(() => {
    if (formData?.questions !== undefined) {
      // setformCompArray(formData?.questions);
      setFormDetails(formData);
    }
  }, [formData]);

  const handleTitleChange = (value) => {
    let tempObj = { ...formDetails };
    tempObj.name = value;
    setFormDetails(tempObj);
  };
  const handleDesChange = (value) => {
    let tempObj = { ...formDetails };
    tempObj.description = value;
    setFormDetails(tempObj);
  };

  useEffect(() => {
    if (formDetails !== "") {
      updateFormDetails(formDetails);
    }
  }, [formDetails]);
  // swap functions
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    console.log("result", result);
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const sortedOrder = reorder(
      formDetails.questions,
      result.source.index,
      result.destination.index
    );
    formDetails.questions = sortedOrder;
    setFormDetails(sortedOrder);
  }

  const handleCopyQuestion = (obj, i) => {
    let tempArr = [...formDetails.questions];
    tempArr.splice(i, 0, obj);
    formDetails.questions = tempArr;
    setFormDetails(formDetails);
  };

  const HandleUpdateQuestion = (value, i) => {
    let tempArr = [...formDetails.questions];
    // get object index
    const objIndex = tempArr.findIndex((obj, index) => index === i);
    // update that object
    tempArr[objIndex].optiontext = value;
    formDetails.questions = tempArr;
    setFormDetails(formDetails);
  };

  const handleRemoveQuestion = (i) => {
    let tempArr = [...formDetails.questions];
    // get object index
    const updatedArr = tempArr.filter((obj, index) => index !== i);
    // update that object
    formDetails.questions = updatedArr;
    setFormDetails(formDetails);
  };
  return (
    <Container className={classes.formRoot} maxWidth="md">
      <div>
        <div className={classes.formTitleSection}>
          <>
            <CommonTextField
              variant="standard"
              color="primary"
              value={formDetails?.name}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
            <CommonTextField
              variant="standard"
              color="primary"
              value={formDetails?.description}
              onChange={(e) => handleDesChange(e.target.value)}
            />
          </>

          <Divider />
          <H6>Enter Valid Email</H6>
          <CommonTextField
            variant="standard"
            label="email"
            color="primary"
            required
            disabled
          />
        </div>
        {/* draggable area */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {formDetails?.questions?.map((item, index) => {
                  return (
                    <Draggable
                      draggableId={`${index}`}
                      key={`${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <FormComponent
                            data={item}
                            handleRemoveQuestion={handleRemoveQuestion}
                            handleCopyQuestion={handleCopyQuestion}
                            HandleUpdateQuestion={HandleUpdateQuestion}
                            index={index}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* draggable area */}
      </div>
    </Container>
  );
};

export default FormMain;
