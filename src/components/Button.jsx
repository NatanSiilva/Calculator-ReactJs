import React from "react";
import "./Button.css";

export default (props) => {
  // let classes = 'button'
  // classes += props.opration ? 'operation' : ""
  // classes += props.bouble ? 'double' : ""
  // classes += props.triple ? 'triple' : ""

  return (
    <button
      className={`
            button
            ${props.operation ? "operation" : ""}
            ${props.double ? "double" : ""}
            ${props.triple ? "triple" : ""}
        
        `}
        onClick={event => props.click && props.click(props.label) }
    >
      {props.label}
    </button>
  );
};
