import React, { useEffect, useState } from "react";
import { Container, Divider } from "@mui/material";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import FormComponent from "./FormComponent";
import { H4, H6 } from "../common/typography/Header";
import CommonTextField from "../common/textfields/CommonTextField";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import PreviewIcon from "@mui/icons-material/Preview";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    marginTop: 67,
    borderRadius: 12,
    "&>button": {
      marginRight: 16,
      marginBottom: 36,
    },
  },
  formTitleSection: {
    height: "fit-content",
    width: "100%",
    "&>div": {
      borderRadius: 12,
      borderTop: "10px solid #9c27b0",
      background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
      padding: 16,
      marginBottom: 16,
      "&>hr": {
        margin: "16px 0",
      },
      "&>h5": {
        color: "#808080",
      },
      "&>div": {
        marginBottom: 8,
      },
      "&>button": {
        marginRight: 16,
      },
    },
  },
  questionSection: {
    minHeight: 200,
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 12,
    "&>div": {
      padding: 16,
    },
  },
}));

const FormMain = ({ formData, updateFormDetails, user }) => {
  const classes = useStyles();

  const { formId } = useParams();

  const [formDetails, setFormDetails] = useState("");
  const [formCompArray, setformCompArray] = useState([]);

  useEffect(() => {
    if (formData !== undefined) {
      // setformCompArray(formData?.questions);
      setFormDetails(formData);
    }
  }, [formData]);

  useEffect(() => {
    if (formDetails?.questions !== undefined) {
      setformCompArray(formDetails?.questions);
    }
  }, [formDetails]);

  // useEffect(() => {
  //   if (formDetails !== "") {
  //     updateFormDetails(formDetails);
  //   }
  // }, [formDetails]);

  const handleTitleChange = (value) => {
    let tempObj = { ...formDetails };
    tempObj.name = value;
    setFormDetails(tempObj);
    //
    updateFormDetails(formDetails);
  };
  const handleDesChange = (value) => {
    let tempObj = { ...formDetails };
    tempObj.description = value;
    setFormDetails(tempObj);
    //
    updateFormDetails(formDetails);
  };

  const handleAddQuestion = () => {
    let queObj = {
      type: "shortQue",
      questionText: "",
      options: [],
    };
    let tempObj = { ...formDetails };
    let tempArr = [...formDetails.questions, queObj];

    tempObj.questions = tempArr;
    setFormDetails(tempObj);
    //
    updateFormDetails(formDetails);
  };

  const handleSaveForm = () => {
    if (formDetails !== "") {
      updateFormDetails(formDetails);
    }
  };

  const handleCopyQuestion = (obj, i) => {
    var tmpObj = {
      options: obj.options,
      questionText: obj.questionText,
      required: obj.required,
      type: obj.type,
    };
    let tempArr = [...formDetails.questions];
    tempArr.splice(i, 0, tmpObj);

    let tempObj = { ...formDetails };
    tempObj.questions = tempArr;
    setFormDetails(tempObj);
    setformCompArray(tempArr);
    updateFormDetails(tempObj);
  };

  const HandleUpdateQuestion = (value, i, updateType) => {
    let tempArr = [...formCompArray];
    let tempObj = { ...formDetails };
    // get object index

    // update that object
    if (updateType === "question") {
      tempArr[i].questionText = value;
      tempObj.questions = tempArr;
    }
    if (updateType === "type") {
      tempArr[i].type = value;
      tempObj.questions = tempArr;
    }
    if (updateType === "options") {
      tempArr[i].options = value;
      tempObj.questions = tempArr;
    }
    if (updateType === "required") {
      tempArr[i].required = !value;
      tempObj.questions = tempArr;
    }
    setFormDetails(tempObj);
    updateFormDetails(tempObj);
  };

  const handleRemoveQuestion = (i) => {
    let tempArr = [...formDetails.questions];
    // get object index
    const updatedArr = tempArr.filter((obj, index) => index !== i);
    // update that object

    let tempObj = { ...formDetails };
    tempObj.questions = updatedArr;
    setFormDetails(tempObj);

    updateFormDetails(tempObj);
  };

  const handleSeeForm = () => {
    window.location.href = `/form/${formId}`;
  };

  const handleSeeResponse = () => {
    window.location.href = `/form/response/${formId}`;
  };
  // swap functions

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const tempObj = { ...formDetails };
    const sortedOrder = reorder(
      tempObj.questions,
      result.source.index,
      result.destination.index
    );
    tempObj.questions = sortedOrder;
    setFormDetails(tempObj);

    updateFormDetails(tempObj);
  }
  // swap functions
  return (
    <Container className={classes.formRoot} maxWidth="md">
      <div className={classes.formTitleSection}>
        <div>
          <>
            <H4 bold>Enter Form Title</H4>
            <CommonTextField
              variant="standard"
              color="primary"
              value={formDetails?.name}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
            <H6 bold>Enter Form Description</H6>
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
            value={user?.email}
            required
            disabled
          />
          <Button
            color="primary"
            variant="contained"
            onClick={handleSeeResponse}
          >
            See Responses
          </Button>
          <IconButton color="primary" onClick={handleSeeForm}>
            <PreviewIcon />
          </IconButton>
        </div>
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
      <Button color="primary" variant="outlined" onClick={handleAddQuestion}>
        add Question
      </Button>
      <Button color="primary" variant="contained" onClick={handleSaveForm}>
        Save Form
      </Button>
    </Container>
  );
};

export default FormMain;
