import { Container, Divider } from "@mui/material";
import React, { useState } from "react";
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

const FormMain = () => {
  const classes = useStyles();

  const [formCompArray, setformCompArray] = useState(ComponentArr);
  const [edit, setedit] = useState(false);

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
      formCompArray,
      result.source.index,
      result.destination.index
    );

    setformCompArray(sortedOrder);
    // console.log(sortedOrder);
  }

  const handleCopyQuestion = (obj, i) => {
    let tempArr = [...formCompArray];
    console.log(i, obj);
    tempArr.splice(i, 0, obj);
    setformCompArray(tempArr);
  };

  const HandleUpdateQuestion = (value, i) => {
    let tempArr = [...formCompArray];
    // get object index
    const objIndex = tempArr.findIndex((obj, index) => index === i);
    // update that object
    tempArr[objIndex].optiontext = value;
    setformCompArray(tempArr);
  };

  const handleRemoveQuestion = (i) => {
    let tempArr = [...formCompArray];
    // get object index
    const updatedArr = tempArr.filter((obj, index) => index !== i);
    // update that object
    setformCompArray(updatedArr);
  };
  return (
    <Container className={classes.formRoot} maxWidth="md">
      <div>
        <div className={classes.formTitleSection}>
          {edit ? (
            <>
              <H1 medium>untitled</H1>
              <H4>description</H4>
            </>
          ) : (
            <>
              <CommonTextField
                variant="standard"
                color="primary"
                value={"Untitled form"}
              />
              <CommonTextField
                variant="standard"
                color="primary"
                value={"Description"}
              />
            </>
          )}
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
                {formCompArray.map((item, index) => {
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
