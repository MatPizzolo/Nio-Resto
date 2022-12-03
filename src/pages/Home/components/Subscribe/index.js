import React from "react";
import MKBox from "components/MKBox";

import img from "assets/imgs/subscribeImg.svg";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

const Subscribe = () => {
  return (
    <MKBox
      textAlign="center"
      sx={{
        background: "linear-gradient(0, #FFF 50%, #F3F4F4 50%)",
        padding: { xs: "0 2rem", md: "0 5rem" },
      }}
    >
      <MKBox
        width="100%"
        minHeight="400px"
        sx={{
          borderRadius: 7.5,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <MKTypography variant="h3" color="white" mb={6} width="70%" mx="auto">
          Get out promo code by subscribing to out newsletter
        </MKTypography>
        <MKInput
          multiline="true"
          rows={3}
          outline="none"
          sx={{
            backgroundColor: "white !important",
            width: "70%",
            height: "80px",
            margin: "0 auto",
            padding: "0 1rem",
            borderRadius: "20px",
            minHeight: "80px",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            endAdornment: (
              <MKButton color="primary" sx={{ textTransform: "none" }}>
                Subscribe
              </MKButton>
            ),
          }}
        />
      </MKBox>
    </MKBox>
  );
};

export default Subscribe;
