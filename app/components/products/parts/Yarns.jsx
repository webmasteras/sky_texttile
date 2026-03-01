import { Box, Stack, Typography } from "@mui/material";
import banner from "./assets/yarnsBanner.png";
import bannerMobile from "./assets/yarnsBannerMobile.png";
import Navbar from "../../navbar/Navbar";
import Strength from "./Strength";
import yarns from "./assets/popularYarns.png";
import gradient from "./assets/gradient.png";
import Footer from "../../footer/Footer";

import flowChart from "./assets/yarnsFlowCharts.jpg";

import heena from "./assets/Yarns/Heena.jpeg";
import lurex from "./assets/Yarns/Lurex.jpeg";
import sorona from "./assets/Yarns/Sorona.jpeg";
import valvateen from "./assets/Yarns/valvateen.jpeg";

export default function Yarns() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={{ md: "100px 100px 30px 100px", xs: "50px 30px" }}>
        <Typography
          marginBottom={"10px"}
          textAlign={"center"}
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Introduction to Yarns
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
        >
          At Sky Textiles, we utilize cutting-edge technology to transform
          cotton into premium, sustainable yarns. Our unique plant,
          strategically located and equipped with advanced operational methods,
          sets us apart in both capacity and innovation. It’s our superior
          production techniques and commitment to quality that allow us to craft
          a wide range of high-demand yarns for domestic and international
          markets. With our state-of-the-art technology, we are pioneering the
          production of "no touch yarns," delivering 100% cotton combed compact
          yarns, crafted to perfection using the latest spinning machines.
        </Typography>
      </Stack>
      <Stack
        width={"80%"}
        margin={"0 auto"}
        height={{ md: "40vh", xs: "10vh" }}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Stack>
      <Strength />
      <Stack>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Popular Yarns
        </Typography>
        <Typography
          textAlign={"center"}
          width={"80%"}
          margin={"10px auto"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          Our specialty yarns are crafted with precision, offering exceptional
          strength, softness, and versatility. Designed for diverse
          applications, they meet the highest global standards in quality and
          performance.
        </Typography>
        <Stack
          marginTop={"30px"}
          flexWrap={"wrap"}
          direction={"row"}
          gap={{ md: "20px", xs: "20px" }}
          margin={{ md: "70px 50px 30px 50px", xs: "50px 30px" }}
          justifyContent={"center"}
        >
          <Stack direction={"column"} width={"20%"} gap={1}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
              Heena Polyster
            </Typography>
            <Box
              width={{ md: "100%", xs: "40%" }}
              height={"30vh"}
              sx={{
                backgroundImage: `url(${heena.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "15px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"column"} width={"20%"} gap={1}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
              Lurex
            </Typography>
            <Box
              width={{ md: "100%", xs: "40%" }}
              height={"30vh"}
              sx={{
                backgroundImage: `url(${lurex.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "15px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"column"} width={"20%"} gap={1}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
              Sorona Pique
            </Typography>
            <Box
              width={{ md: "100%", xs: "40%" }}
              height={"30vh"}
              sx={{
                backgroundImage: `url(${sorona.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "15px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"column"} width={"20%"} gap={1}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
              NM Yarn
            </Typography>
            <Box
              width={{ md: "100%", xs: "40%" }}
              height={"30vh"}
              sx={{
                backgroundImage: `url(${valvateen.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "15px",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={{
          xl: "800px",
          lg: "600px",
          md: "500px",
          smm: "600px",
          sm: "300px",
          xs: "200px",
        }}
        margin={{ xl: "0 0 50px 0" }}
        sx={{
          backgroundImage: `url(${flowChart.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Stack>
      <Footer />
    </Stack>
  );
}
