import React from "react";
import  Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MKTypography from "components/MKTypography";

const BulletChef = ({content}) => {
  return (
    <Grid display="flex" alignItems="center" maxWidth={"50%"} padding="0 1rem">
      <CheckCircleIcon color="primary" fontSize={"medium"} sx={{marginBottom: 2}}/>
      <MKTypography variant="h5">
        {content}
      </MKTypography>
    </Grid>
  );
};

export default BulletChef;
