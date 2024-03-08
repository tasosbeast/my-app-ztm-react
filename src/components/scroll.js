import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid red",
        height: "800px",
        background: "#3D0C11",
        maxWidth: "80%",
        margin: "auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
