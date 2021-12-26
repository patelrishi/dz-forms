import React from "react";
import { Avatar, Button, Container, makeStyles } from "@material-ui/core";
import { H2, H4, H5, H6 } from "../common/typography/Header";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    maxWidth: 800,
    marginTop: 67,
    borderRadius: 12,
    "&>div": {
      // minHeight: "82vh",
      borderRadius: 12,
      borderTop: "10px solid #9c27b0",
      background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
      padding: 16,
      marginBottom: 16,
    },
  },
  responseGroup: {
    height: "75vh",
    overflow: "auto",
    marginTop: 16,
    // background: "red",
  },

  responeBar: {
    height: "fit-content",
    // width: "100%",
    margin: 8,
    borderRadius: 12,
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    "&>div": {
      padding: 16,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  formResponeMain: {
    "&>h5": {
      margin: "10px 0",
    },

    "&>h6": {
      marginBottom: 16,
    },
    "&>div": {
      height: "65vh",
      overflow: "auto",
      "&>div": {
        margin: "16px 0",
        "&>div": {
          padding: 16,
          background: "#f5f5f5",
          borderRadius: 12,
        },
      },
    },
  },
}));

const ResponseMain = ({ formResponses, singleResponse }) => {
  const classes = useStyles();
  const { responseId } = useParams();

  const handleSeeSingleRespone = (responseId) => {
    window.location.href = `/form/response/s/${responseId}`;
  };

  return (
    <Container className={classes.formRoot} maxWidth="md">
      {responseId ? (
        <>
          <div className={classes.formResponeMain}>
            <H2 bold>formDetails?.name</H2>
            <H5>formDetails?.description</H5>
            <H6>Response :</H6>
            <div>
              {singleResponse?.response !== undefined &&
                singleResponse.response.length > 0 &&
                singleResponse.response.map((elem) => (
                  <div>
                    <H6>{elem.questionText}</H6>
                    <div>{elem.ans}</div>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <H4 bold>responses</H4>
          <div className={classes.responseGroup}>
            {formResponses !== undefined &&
              formResponses?.length > 0 &&
              formResponses?.map((elem) => (
                <div className={classes.responeBar}>
                  <div>
                    <Avatar />
                    <H6>{elem.userEmail}</H6>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleSeeSingleRespone(elem?._id)}
                    >
                      View Response
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default ResponseMain;
