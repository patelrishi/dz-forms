import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        minheight: "100vh",
        justifyContent: "center",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/gif/error404.gif
        `}
        style={{ height: "100vh", width: 700 }}
        alt="not found"
      />
    </div>
  );
};

export default NotFound;
