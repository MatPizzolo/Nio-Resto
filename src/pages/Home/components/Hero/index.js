import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import bigHeroImg from "assets/imgs/bigHero.svg";
import CircularBox from "commons/CircularBox";

import { footerInfo } from "../Footer/footerInfo";

const Hero = () => {
  return (
    <MKBox
      my={10}
      display="flex"
      justifyContent="space-between"
      sx={{ padding: { xs: "0 2rem", md: "0 5rem" } }}
    >
      <MKBox pt="10vh">
        <MKTypography variant="h1">
          We provide the <br/>best food for you
        </MKTypography>
        <MKTypography mt={9} variant="h4" sx={{maxWidth: {xs: "80%", md: "450px"} }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MKTypography>
        <MKBox mt={6} mb={9}>
          <MKButton color="black" sx={{borderRadius: "15px 5px 15px 5px"}}>Menu</MKButton>
          <MKButton color="primary" sx={{ marginLeft: "3rem", borderRadius: "15px 5px 15px 5px" }}>
            Book a table
          </MKButton>
        </MKBox>
        <MKBox display="flex">
          {footerInfo.socials.map((social, i) => {
            return <React.Fragment key={i}><CircularBox icon={social}/></React.Fragment>;
          })}
        </MKBox>
      </MKBox>
      <MKBox>
        <MKBox component="img" src={bigHeroImg} />
      </MKBox>
    </MKBox>
  );
};

export default Hero;
