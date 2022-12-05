import MKTypography from "components/MKTypography";
import React from "react";
import MKBox from "components/MKBox";
import chefImg from "assets/imgs/chef.svg";
import MKButton from "components/MKButton";
import Grid from "@mui/material/Grid";
import { bulletsInfo } from "./components/BulletChef/bulletsInfo";
import BulletChef from "./components/BulletChef";

import onionSvg from "assets/imgs/backgroundSpices/onion.svg";

const Chef = () => {
  return (
    <MKBox
      my={12}
      display="flex"
      justifyContent="space-between"
      sx={{
        padding: { xs: "0 2rem", md: "0 5rem" },
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <MKBox
        sx={{
          maxWidth: { xs: "100%", lg: "40%" },
          textAlign: { xs: "center", lg: "left" },
        }}
        position="relative"
      >
        <MKTypography variant="h1" whiteSpace="nowrap">
          Our experts chef
        </MKTypography>
        <MKTypography
          variant="h5"
          mt={3}
          sx={{ maxWidth: { xs: "100%", lg: "80%" } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MKTypography>
        <Grid mt={6} display="flex" flexWrap="wrap" gap="2rem 0">
          {bulletsInfo.map((bullet) => {
            return <BulletChef content={bullet.description} />;
          })}
        </Grid>
        <MKBox mt={12} display="flex" justifyContent="center">
          <MKButton
            color="black"
            sx={{ margin: "0 1rem", borderRadius: "15px 5px 15px 5px" }}
            size="large"
          >
            Menu
          </MKButton>
          <MKButton
            color="primary"
            sx={{ margin: "0 1rem", borderRadius: "15px 5px 15px 5px" }}
            size="large"
          >
            Book a table
          </MKButton>
        </MKBox>
        <MKBox
          component="img"
          src={onionSvg}
          alt="onionCutSvg"
          position="absolute"
          top="-20%"
          left="-20%"
          width="290px"
          zIndex="1"
        />
      </MKBox>
      <MKBox
        sx={{
          textAlign: { xs: "center", lg: "left" },
          marginTop: { xs: 6, lg: 0 },
        }}
      >
        <MKBox component="img" src={chefImg} maxWidth="100%" />
      </MKBox>
    </MKBox>
  );
};

export default Chef;
