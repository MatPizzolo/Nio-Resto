import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";

const ReviewCard = ({ image, description, name, position }) => {
  return (
    <MKBox
      backgroundColor="#fff !important"
      maxWidth="639px"
      padding="5%"
      position="relative"
      sx={{ borderRadius: "70px 15px 70px 15px" }}
    >
      <MKBox
        component="img"
        src={image}
        width="110px"
        height="110px"
        position="absolute"
        top="0"
        left="50%"
        ml="-55px"
        mt="-55px"
      />
      <MKTypography variant="h6" mt={3}>{description}</MKTypography>
      <MKTypography variant="h6" mt={3}>
        <strong>{name}</strong>
      </MKTypography>
      <MKTypography variant="h6">{position}</MKTypography>
    </MKBox>
  );
};

export default ReviewCard;
