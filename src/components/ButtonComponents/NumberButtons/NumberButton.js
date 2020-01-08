import React from "react";

const NumberButton = props => {
  //   console.log(props);

  return (
    <button
      onClick={() =>
        props.setDigits(previousDigit => previousDigit + props.value)
      }
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.value}
    </button>
  );
};

export default NumberButton;
