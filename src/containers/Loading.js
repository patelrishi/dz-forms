import React from "react";
import { ReactComponent as Loader } from "../assets/icons/Loader.svg";
const Loading = () => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Loader />
    </div>
  );
};

export default Loading;
