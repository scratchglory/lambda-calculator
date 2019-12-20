import React from "react";

const NumberButton = props => {
  //   console.log(props);
  return (
    <p>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.value}</button>
    </p>
  );
};

export default NumberButton;
