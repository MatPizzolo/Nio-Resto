import React from 'react'

import bigDish from "assets/imgs/dishes/big.svg"

import MKTypography from 'components/MKTypography'
import MKBox from 'components/MKBox'
import MKButton from 'components/MKButton'

const BigDish = () => {
  return (
    <MKBox py={12} display="flex" sx={{flexDirection: {xs: "column-reverse", md: "row"}, textAlign: {xs: "center", md: "left"}}}>
        <MKBox src={bigDish} component="img" height="auto" sx={{minWidth: {xs: "100%", md: "50%"}, marginTop: {xs: 3, md: 0} }}/>
        <MKBox margin="auto 0">
            <MKTypography variant="h2">Welcome to our restaurant</MKTypography>
            <MKTypography variant="h5" mt={6} sx={{maxWidth: {xs: "100%", md: "80%"} }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MKTypography>
            <MKBox mt={3}>
                <MKButton color="black" sx={{borderRadius: "15px 5px 15px 5px"}}>Menu</MKButton>
                <MKButton color="primary" sx={{marginLeft: "3rem", borderRadius: "15px 5px 15px 5px"}}>Book a table</MKButton>
            </MKBox>
        </MKBox>
    </MKBox>
  )
}

export default BigDish