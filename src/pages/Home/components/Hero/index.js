import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import bigHeroImg from "assets/imgs/bigHero.svg";
import CircularBox from "commons/CircularBox";

import { footerInfo } from "../Footer/footerInfo";

import imgHero from "assets/imgs/bigHero.svg";
import circlesLine from "assets/imgs/hero/circlesLine.svg";
import leaveOne from "assets/imgs/hero/leave1.svg";
import leaveTwo from "assets/imgs/hero/leave2.svg";
import leaveThree from "assets/imgs/hero/leave3.svg";

const Hero = () => {
  return (
    <MKBox display="relative" pt={6}>
      <MKBox
        component="img"
        src={circlesLine}
        alt="circlesLine"
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
        sx={{ maxWidth: { xs: "35%", lg: "25%" } }}
      />
      <MKBox
        my={10}
        display="flex"
        justifyContent="space-between"
        sx={{ padding: { xs: "0 2rem", md: "0 5rem" } }}
      >
        <MKBox sx={{width: {xs: "100%", md: "50%"}}}>
          <MKTypography variant="h1">
            We provide the <br />
            best food for you
          </MKTypography>
          <MKTypography
            mt={9}
            variant="h4"
            sx={{ maxWidth: { xs: "80%", md: "450px" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MKTypography>
          <MKBox mt={6} mb={9}>
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
          <MKBox display="flex">
            {footerInfo.socials.map((social, i) => {
              return (
                <React.Fragment key={i}>
                  <CircularBox icon={social} />
                </React.Fragment>
              );
            })}
          </MKBox>
        </MKBox>
        <MKBox
          width="50%"
          alignContent="center"
          justifyContent="center"
          position="relative"
          sx={{display: {xs: "none", md: "flex"}}}
        >
          <MKBox
            maxWidth="100%"
            component="img"
            src={imgHero}
            position="relative"
            zIndex="2"
          />
          <MKBox
            component="img"
            src={leaveOne}
            alt="leaveOne"
            position="absolute"
            top="0"
            zIndex="1"
            left="-5%"
          />
          <MKBox
            component="img"
            src={leaveTwo}
            alt="leaveTwo"
            position="absolute"
            top="-15%"
            zIndex="1"
            right="-7%"
          />
          <MKBox
            component="img"
            src={leaveThree}
            alt="leaveThree"
            position="absolute"
            bottom="0"
            zIndex="1"
            right="-5%"
          />
        </MKBox>
      </MKBox>
    </MKBox>
  );
};

export default Hero;
