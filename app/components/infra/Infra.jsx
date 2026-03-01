import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import banner from "./parts/assets/Banner.jpg";
import Our from "./parts/Our";
import Rnd from "./parts/Rnd";
import Caraosal from "./parts/Caraousal";

export default function Infra() {
  return (
    <Stack>
      <Navbar />
      <Box
        height={{ lg: "80vh", smm: "50vh", xs: "30vh" }}
        width={"100%"}
        marginTop={"50px"}
        sx={{ backgroundImage: `url(${banner.src})`, backgroundSize: "cover" }}
      ></Box>
      <Our />
      <Caraosal />
      <Rnd />
      <Footer />
    </Stack>
  );
}
