import { Box, Stack } from "@mui/material";
import banner from "./parts/assets/Banner.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Pdt from "./parts/Pdt";
import ProductAnimated from "./parts/ProductsAnimated";

export default function Products() {
  return (
    <Stack sx={{ scrollSnapType: "mandatory y" }}>
      <Navbar />
      <Box
        height={{ lg: "80vh", smm: "50vh", xs: "30vh" }}
        width={"100%"}
        marginTop={"50px"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Pdt />
      <ProductAnimated />
      <Footer />
    </Stack>
  );
}
