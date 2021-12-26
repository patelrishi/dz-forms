import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
        marginTop: 300,
      }}
    >
      <CircularProgress color="primary" size={90} />
    </div>
  );
};

export default Loading;
