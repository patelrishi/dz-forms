import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const NavTabs = ({ tabs }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="secondary"
      >
        {tabs?.map((elem) => (
          <Tab label={elem} />
        ))}
      </Tabs>
    </div>
  );
};

export default NavTabs;
