import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";

const Dish = ({ title, description, image }) => {
  return (
    <MKBox textAlign="center" zIndex="1">
      <MKBox component="img" src={image} position="relative" top="120px"/>
      <MKBox
        backgroundColor="#fff!important"
        maxWidth="265px"
        pt="120px" pb="80px"
        borderRadius="25px 5px 25px 5px"
      >
        <MKTypography variant="h5">{title}</MKTypography>
        <MKTypography variant="p">{description}</MKTypography>
      </MKBox>
    </MKBox>
  );
};

export default Dish;
