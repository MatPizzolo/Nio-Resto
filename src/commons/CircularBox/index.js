import MKBox from "components/MKBox";
import React from "react";

const CircularBox = ({ icon }) => {
  return (
    <MKBox
      mx={1}
      border="1px solid black"
      borderRadius="50%"
      width="45px"
      height="45px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {icon}
    </MKBox>
  );
};

export default CircularBox;
