import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  makeStyles,
} from "@material-ui/core";
import { H5, H6 } from "../common/typography/Header";

const useStyles = makeStyles((theme) => ({
  dashboardRoot: {
    height: "calc(100vh - 67px)",
    marginTop: 67,
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 12,
    background: "#ffffff",
    padding: 0,
  },
  dashboardTop: {
    //   background: "red",
    height: 200,
    background: `url(${process.env.PUBLIC_URL}/images/dashboard-bg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "12px 12px 0 0",
    //   backgroundAttachment: "fixed",
  },
  dashboardFormCreateBox: {
    marginTop: -140,
    height: "fit-content",
    background: "#FFFFFF",
    margin: "0 auto",
    maxWidth: 400,
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 12,
    "&>div": {
      textAlign: "center",
      padding: 16,
      "&>img": {
        height: 120,
      },
      "&>button": {
        width: "40%",
      },
      "&>h6": {
        color: "#808080",
        margin: "8px 0",
      },
    },
  },
  formCardRoot: {
    height: 250,
    overflow: "auto",
  },
  formsCard: {
    "&>a": {
      "&>div": {
        // background: `url(${process.env.PUBLIC_URL}/images/dashboard-bg.png)`,
        height: 200,
        cursor: "pointer",
        borderRadius: 16,
        boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
        "&>div": {
          padding: 8,
          "&>img": {
            width: "100%",
            height: "100%",
            borderRadius: "12px 12px 0 0",
          },
          "&>h6": {
            textAlign: "center",
          },
        },
      },
    },
  },
}));

const DashboardMain = ({
  createForm,
  user,
  formData,
  isFormLoading,
  userForms,
}) => {
  const classes = useStyles();
  console.log(userForms);

  const [formList, setformList] = useState([]);

  useEffect(() => {
    if (userForms !== undefined && userForms.length > 0) {
      setformList(userForms);
    }
  }, [userForms]);

  useEffect(() => {
    if (formData?.form?._id !== undefined && isFormLoading === false) {
      window.location.href = `/form/edit/${formData?.form?._id}`;
    }
  }, [isFormLoading, formData]);

  const handleCreateForm = () => {
    createForm(user._id);
  };
  return (
    <Container className={classes.dashboardRoot}>
      <div className={classes.dashboardTop}></div>
      <div className={classes.dashboardFormCreateBox}>
        <div>
          <img
            src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
            alt=""
          />
          <H5 bold>Create New Form</H5>
          <H6>create new blank Form and share with your friends..!</H6>
          <Button
            color="primary"
            variant="contained"
            startIcon={
              isFormLoading && <CircularProgress size={12} color="#FFFFFF" />
            }
            onClick={handleCreateForm}
          >
            Create Form
          </Button>
        </div>
      </div>
      <div style={{ padding: 16, marginTop: 20 }}>
        <H5 bold>Recent Forms</H5>
        <Grid container spacing={2} className={classes.formCardRoot}>
          {formList !== undefined &&
            formList?.map((elem, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.formsCard}
                key={i}
              >
                <Link href={`/form/edit/${elem?._id}`}>
                  <div>
                    <div>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/dashboard-bg.png`}
                        alt=""
                      />
                      <H6>{elem?.name}</H6>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
        </Grid>
      </div>
    </Container>
  );
};

export default DashboardMain;
