import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import banner from "./parts/assets/Video.png";
import Sus from "./parts/Sus";
import Eco from "./parts/Eco";
import Conservation from "./parts/conservation";
import DidYouKnow from "./parts/DidYouKnow";

export default function () {
  return (
    <Stack>
      <Navbar />
      <Box
        width={"100%"}
        height={{ lg: "80vh", smm: "50vh", xs: "30vh" }}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Sus />
      <Eco />
      <DidYouKnow />
      <Conservation />
      <Footer />
    </Stack>
  );
}
