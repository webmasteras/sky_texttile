import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import banner from "./parts/assets/Banner.jpeg";
import We from "./parts/We";
import Strength from "./parts/Strength";
import Vision from "./parts/Vision";
import Core from "./parts/Core";

export default function Company() {
  return (
    <Stack>
      <Navbar />
      <Box
        height={{ lg: "80vh", smm: "50vh", xs: "30vh" }}
        marginTop={"50px"}
        width={"100%"}
        sx={{ backgroundImage: `url(${banner.src})`, backgroundSize: "cover" }}
      ></Box>
      <We />
      <Strength />
      <Box height={{ md: "40vh" }}></Box>
      <Vision />
      <Core />
      <Footer />
    </Stack>
  );
}
