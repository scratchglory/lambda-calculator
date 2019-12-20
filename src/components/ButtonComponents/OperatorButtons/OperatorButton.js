import React from "react";

const OperatorButton = props => {
  //   console.log(props);
  return (
    <p>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.char}</button>
    </p>
  );
};

export default OperatorButton;
