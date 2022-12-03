import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import ReviewCard from "./components/ReviewCard";
import { reviewsInfo } from "./components/reviewsInfo";

const Reviews = () => {
  return (
    <MKBox
      textAlign="center"
      sx={{
        backgroundColor: "#F3F4F4",
        padding: { xs: "0 2rem", md: "0 5rem" },
      }}
    >
        <MKTypography variant="h2" pt={12}>Our Happy Customers</MKTypography>
        <MKTypography variant="h5" mt={3} mb={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </MKTypography>
        {reviewsInfo.map(review => {
            return (<ReviewCard image={review.image} description={review.description} name={review.name} position={review.position} />)
        })}
        <MKBox mb={6}/>
        tres puntitos
        <MKBox pb={6}/>
    </MKBox>
  );
};

export default Reviews;
