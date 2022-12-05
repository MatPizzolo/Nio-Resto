import React from "react";

import { footerInfo } from "./footerInfo";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import CircularBox from "commons/CircularBox";
import { Grid } from "@mui/material";

const Footer = () => {
  const { generalInfo } = footerInfo;
  const { openingHours } = generalInfo;

  return (
    <MKBox my={18} sx={{ padding: { xs: "0 2rem", md: "0 5rem" } }}>
      <MKBox
        display="flex"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <MKBox sx={{ width: { sx: "100%", md: "35%" } }}>
          <MKBox component="img" src={generalInfo.logo} maxWidth="55px" />
          <MKTypography variant="h6" color="text">
            {generalInfo.description}
          </MKTypography>
          <MKBox>
            <MKTypography my={3} variant="h6" textTransform="uppercase">
              <strong>opening hours</strong>
            </MKTypography>
            <Grid
              display="flex"
              justifyContent="space-between"
              sx={{
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Grid>
                <MKTypography variant="h6" color="text">
                  Monday - Friday
                </MKTypography>
                <MKTypography variant="h6" color="text">
                  {openingHours.monFri}
                </MKTypography>
              </Grid>
              <Grid>
                <MKTypography variant="h6" color="text">
                  Saturday
                </MKTypography>
                <MKTypography variant="h6" color="text">
                  {openingHours.sat}
                </MKTypography>
              </Grid>
              <Grid>
                <MKTypography variant="h6" color="text">
                  Sunday
                </MKTypography>
                <MKTypography variant="h6" color="text">
                  {openingHours.sun}
                </MKTypography>
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
        <MKBox>
          <MKTypography variant="h6" textTransform="uppercase">
            <strong>Navigation</strong>
          </MKTypography>
          {footerInfo.navigation.map((nav) => {
            return (
              <MKTypography
                variant="h6"
                textTransform="capitalize"
                color="text"
                my={1.25}
              >
                {nav}
              </MKTypography>
            );
          })}
        </MKBox>
        <MKBox>
          <MKTypography variant="h6" textTransform="uppercase">
            <strong>Dishes</strong>
          </MKTypography>
          {footerInfo.dishes.map((dish) => {
            return (
              <MKTypography
                variant="h6"
                textTransform="capitalize"
                color="text"
                my={1.25}
              >
                {dish}
              </MKTypography>
            );
          })}
        </MKBox>
        <MKBox>
          <MKTypography variant="h6" textTransform="uppercase">
            <strong>Follow us</strong>
          </MKTypography>
          <MKBox mt={6} display="flex" justifyContent="center">
            {footerInfo.socials.map((social, i) => {
              return (
                <React.Fragment key={i}>
                  <CircularBox icon={social} />
                </React.Fragment>
              );
            })}
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox
        width="100%"
        height="2px"
        backgroundColor="#F3F4F4 !important"
        my={3}
      />
      <MKBox display="flex" justifyContent="space-between">
        <MKTypography variant="h6" color="text">
          © 2022 Restaurants. All Right Reserved. Designed by <a>Isaac</a>
        </MKTypography>
        <MKBox display="flex">
          <MKTypography variant="h6" color="text" mr={3}>
            Terms of Service
          </MKTypography>
          <MKTypography variant="h6" color="text">
            Privacy Policy
          </MKTypography>
        </MKBox>
      </MKBox>
    </MKBox>
  );
};

export default Footer;
