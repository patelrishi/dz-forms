import React from "react";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import FormMain from "../components/forms/FormMain";
const FormContainer = () => {
  return (
    <>
      <NavBarMain tabs={["questions", "responses", "settings"]} />
      <FormMain />
    </>
  );
};

export default FormContainer;
