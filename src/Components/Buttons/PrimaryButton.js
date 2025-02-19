import React from "react";

const PrimaryButton = (props) => {
  return (
    <button {...props} className={props.className}>
      {props?.label}
    </button>
  );
};

export default PrimaryButton;
