import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import ReviewCard from "./components/ReviewCard";
import { reviewsInfo } from "./components/reviewsInfo";

import panSvg from "assets/imgs/backgroundSpices/panEggBacon.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MKBox
      textAlign="center"
      sx={{
        backgroundColor: "#F3F4F4",
        padding: { xs: "0 2rem", md: "0 5rem" },
      }}
      position="relative"
    >
      <MKTypography variant="h2" pt={12}>
        Our Happy Customers
      </MKTypography>
      <MKTypography variant="h5" mt={3} mb={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt{" "}
      </MKTypography>
      <Slider {...settings}>
        {reviewsInfo.map((review) => {
          return (
            <MKBox overflow="visible" marginTop="10%">
              <ReviewCard
                image={review.image}
                description={review.description}
                name={review.name}
                position={review.position}
              />
            </MKBox>
          );
        })}
      </Slider>
      <MKBox
        component="img"
        src={panSvg}
        position="absolute"
        bottom="-30%"
        left={0}
        zIndex="0"
      />
      <MKBox mb={6} />
      <MKBox pb={12} />
    </MKBox>
  );
};

export default Reviews;
