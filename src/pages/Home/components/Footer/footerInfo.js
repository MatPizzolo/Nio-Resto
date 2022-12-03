import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "assets/imgs/f.png";
import imgLogo from "assets/imgs/noodles.png";
import MKBox from "components/MKBox";

export const footerInfo = {
  generalInfo: {
    logo: imgLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more",
    openingHours: {
      monFri: "8:00 am to 9:00 pm",
      sat: "8:00 am to 9:00 pm",
      sun: "closed",
    },
  },
  navigation: ["menu", "about us", "contact us", "main dishes"],
  dishes: ["Fish & Viggis", "Tofu Chili", "Egg & Cocumber", "Steak with rice"],
  socials: [<InstagramIcon color="black" />, <TwitterIcon color="black" />, <MKBox component="img" src={FacebookIcon} maxWidth="30px" maxHeight="30px"/>],
};
