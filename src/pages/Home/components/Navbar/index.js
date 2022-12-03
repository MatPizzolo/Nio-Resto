import React from 'react'
import Grid from '@mui/material/Grid'
import MKBox from 'components/MKBox'

import logoImg from "assets/imgs/noodles.png"
import MKTypography from 'components/MKTypography'
import MKButton from 'components/MKButton'
import theme from 'assets/theme'

const Navbar = () => {
  const {palette} = theme;
  const {primary} = palette;
  return (
    <Grid display="flex" justifyContent="space-between" mt={6} sx={{ padding: { xs: "0 2rem", md: "0 5rem" } }}> 
        <Grid item width="25%" >
            <MKBox component="img" src={logoImg} height="55px"/>
        </Grid>
        <Grid item display="flex" justifyContent="space-between" width="50%" m="auto">
            <MKTypography variant="h5">Menu</MKTypography>
            <MKTypography variant="h5">Events</MKTypography>
            <MKTypography variant="h5">Gallery</MKTypography>
            <MKTypography variant="h5">About</MKTypography>
            <MKTypography variant="h5">Contact</MKTypography>
        </Grid>
        <Grid item width="25%" display="flex" alignItems="center" justifyContent="flex-end">
            <MKButton color="primary" sx={{borderRadius: "50 0 50 0 !important"}}>Book a table</MKButton>
        </Grid>
    </Grid>
  )
}

export default Navbar