import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { dishesInfo } from "./components/Dish/dishesInfo";
import Dish from "./components/Dish";
import BigDish from "./components/BigDish";

import leaveTwo from "assets/imgs/backgroundSpices/leave2.svg";
import leaveThree from "assets/imgs/backgroundSpices/leave3.svg";
import onionSvg from "assets/imgs/backgroundSpices/onion.svg";
import onionCutSvg from "assets/imgs/backgroundSpices/onionMiddleCut.svg";
import garlicSvg from "assets/imgs/backgroundSpices/garlic.svg";
import romeroSvg from "assets/imgs/backgroundSpices/romero.svg";

const Specials = () => {
  return (
    <MKBox
      sx={{
        backgroundColor: "#F3F4F4",
        padding: { xs: "0 2rem", md: "0 5rem" },
      }}
      overflow="hidden"
    >
      <MKBox position="relative" width="100%">
        <MKTypography variant="h1" textAlign="center" pt={12}>
          Our Special Dishes
        </MKTypography>
        <MKBox
          component="img"
          src={leaveThree}
          alt="leaveThree"
          position="absolute"
          bottom="-75%"
          right="5%"
          maxHeight="257px"
        />
        <MKBox
          component="img"
          src={leaveTwo}
          alt="leaveTwo"
          position="absolute"
          top="25%"
          left="6.3%"
          maxWidth="220px"
        />
      </MKBox>
      <MKTypography variant="h5" textAlign="center" mt={3}>
        Our Special Dishes
      </MKTypography>
      <MKBox position="relative">
        <MKBox display="flex" justifyContent="space-between" flexWrap="wrap">
          {dishesInfo.map((dish) => {
            return (
              <Dish
                title={dish.title}
                description={dish.description}
                image={dish.image}
              />
            );
          })}
        </MKBox>
        <MKBox
          component="img"
          src={onionSvg}
          alt="onionSvg"
          position="absolute"
          bottom="-10%"
          right="-2%"
          objectFit="contain"
          zIndex="1"
        />
        <MKBox
          component="img"
          src={garlicSvg}
          alt="onionCutSvg"
          position="absolute"
          bottom="-10%"
          right="12%"
          objectFit="contain"
          zIndex="1"
        />
        <MKBox
          component="img"
          src={onionCutSvg}
          alt="garlicSvg"
          position="absolute"
          bottom="-10%"
          left="15%"
          objectFit="contain"
          opacity="0.15"
          zIndex={0}
        />
        <MKBox
          component="img"
          src={romeroSvg}
          alt="romeroSvg"
          position="absolute"
          bottom="-35%"
          left="40%"
          objectFit="contain"
        />
      </MKBox>
      <BigDish />
    </MKBox>
  );
};

export default Specials;
