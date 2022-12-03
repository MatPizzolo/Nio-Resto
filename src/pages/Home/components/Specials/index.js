import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { dishesInfo } from "./components/Dish/dishesInfo";
import Dish from "./components/Dish";
import BigDish from "./components/BigDish";

const Specials = () => {
  return (
    <MKBox
      sx={{
        backgroundColor: "#F3F4F4",
        padding: { xs: "0 2rem", md: "0 5rem" },
      }}
    >
      <MKTypography variant="h1" textAlign="center" pt={12}>
        Our Special Dishes
      </MKTypography>
      <MKTypography variant="h5" textAlign="center" mt={3}>
        Our Special Dishes
      </MKTypography>
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
      <BigDish />
    </MKBox>
  );
};

export default Specials;
