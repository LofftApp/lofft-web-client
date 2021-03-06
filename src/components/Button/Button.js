import React from "react";
import "./buttons.scss";
const Button = (props) => {
  return (
    <div
      className={`button ${props.color ? `button-${props.color}` : ""}`}
      style={props.style}
      onClick={props?.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
