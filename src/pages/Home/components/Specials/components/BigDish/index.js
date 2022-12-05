import React from "react";

import bigDish from "assets/imgs/dishes/big.svg";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

import garlicSvg from "assets/imgs/backgroundSpices/garlic.svg";
import romeroSvg from "assets/imgs/backgroundSpices/romeroLong.svg";
import leaveSvg from "assets/imgs/backgroundSpices/leave2.svg";

const BigDish = () => {
  return (
    <MKBox
      py={12}
      mt={6}
      mb={12}
      display="flex"
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <MKBox
        src={bigDish}
        component="img"
        height="auto"
        sx={{ width: { xs: "100%", md: "50%" }, marginTop: { xs: 3, md: 0 } }}
      />
      <MKBox
        position="relative"
        sx={{ margin: { sx: "auto 0", md: "auto auto auto 4rem" } }}
      >
        <MKTypography variant="h3">Welcome to our restaurant</MKTypography>
        <MKTypography
          variant="h5"
          color="text"
          mt={6}
          sx={{ maxWidth: { xs: "100%", md: "80%" } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MKTypography>
        <MKBox mt={3}>
          <MKButton color="black" sx={{ borderRadius: "15px 5px 15px 5px" }}>
            Menu
          </MKButton>
          <MKButton
            color="primary"
            sx={{ marginLeft: "3rem", borderRadius: "15px 5px 15px 5px" }}
          >
            Book a table
          </MKButton>
        </MKBox>
        <MKBox
          component="img"
          src={leaveSvg}
          alt="leaveTwo"
          position="absolute"
          top="-25%"
          left="-15%"
          maxWidth="220px"
        />
        <MKBox
          component="img"
          src={garlicSvg}
          alt="garlicSvg"
          position="absolute"
          bottom="-35%"
          left="5%"
          objectFit="contain"
          sx={{
            transform: "rotate(100deg)",
          }}
        />
        <MKBox
          component="img"
          src={garlicSvg}
          alt="garlicSvg"
          position="absolute"
          bottom="-5%"
          left="-25%"
          objectFit="contain"
        />
        <MKBox
          component="img"
          src={romeroSvg}
          alt="romeroSvg"
          position="absolute"
          bottom="-55%"
          right="-30%"
          objectFit="contain"
        />
      </MKBox>
    </MKBox>
  );
};

export default BigDish;
