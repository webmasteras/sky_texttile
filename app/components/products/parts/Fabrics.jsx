"use client";

import { Box, Stack, Typography } from "@mui/material";
import banner from "./assets/yarnsBanner.png";
import bannerMobile from "./assets/yarnsBannerMobile.png";
import Navbar from "../../navbar/Navbar";
import Strength from "./StrengthFabrics";
import yarns from "./assets/popularYarns.png";
import gradient from "./assets/gradient.png";
import Footer from "../../footer/Footer";
import Grid from "@mui/material/Grid";

import flowChart from "./assets/fabricsFlowCharts.jpg";

import img1 from "./assets/Fabrics/SingleJersey.jpeg";
import img2 from "./assets/Fabrics/DoubleJersey.jpeg";
import img3 from "./assets/Fabrics/RIBKNIT.jpeg";
import img4 from "./assets/Fabrics/Jacquard.jpeg";
import img5 from "./assets/Fabrics/Fleece.jpeg";
import img6 from "./assets/Fabrics/Waffle.jpeg";
import img7 from "./assets/Fabrics/Pointel.jpeg";
import img8 from "./assets/Fabrics/Polyster.jpeg";
import img9 from "./assets/Fabrics/Pique.jpeg";

const gridData = [
  {
    id: 0,
    name: "Single Jersey",
    data: "A lightweight, stretchy fabric commonly used for t-shirts and casual wear.",
    img: img1,
  },
  {
    id: 1,
    name: "Double Jersey",
    data: "2.Thicker and more stable than single jersey, with a smooth finish on both sides. Used for more structured garments like polo shirts.",
    img: img2,
  },
  {
    id: 2,
    name: "Rib Knit",
    data: "A fabric with a textured, ribbed pattern created by alternating knit and purl stitches. It offers great elasticity and is used for cuffs, collars, and waistbands.",
    img: img3,
  },
  {
    id: 3,
    name: "Jacquard Knit",
    data: "Complex knit patterns, typically used for textured or patterned garments.",
    img: img4,
  },
  {
    id: 4,
    name: "Fleece",
    data: "5.A knitted fabric that is brushed on one or both sides to create a soft, fluffy texture. Commonly used for sweatshirts and jackets",
    img: img5,
  },
  {
    id: 5,
    name: "Waffle",
    data: "Waffle fabric, also known as honeycomb fabric, has raised threads that form small rectangles. It can be made by either weaving or knitting.",
    img: img6,
  },
  {
    id: 6,
    name: "Pointelle",
    data: "Pointelle is a knit fabric pattern with tiny holes typically in the shape of chevrons; the structure is geometric in shape and with repeated design similar to lace.",
    img: img7,
  },
  {
    id: 7,
    name: "Polyster",
    data: "Polyester knit fabric is a synthetic, man-made fabric made of the most widely used fiber in the world.",
    img: img8,
  },
  {
    id: 8,
    name: "Pique",
    data: "Pique is a durable cotton knit fabric covered with a tiny, textured pattern. The cross-tuck knit construction creates a cellular effect with a unique, subtle texture.",
    img: img9,
  },
];

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
          Introduction to Fabrics
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
        >
          Knitted fabrics are textiles created by interlooping yarns in a series
          of connected loops, producing a stretchy and flexible material. These
          fabrics can be made by hand or machine, and their structure provides
          more elasticity compared to woven fabrics, making them ideal for
          garments requiring flexibility, such as t-shirts, sweaters, and
          activewear. At Sky Textiles, we pride ourselves on offering the best
          fabrics in Ahmedabad, Gujarat, India, and Asia. We are recognized as a
          leading best greige and finished fabric manufacturing company,
          specializing in multiple fabric blends in Gujarat.
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
      <Stack margin={{ md: "10px 70px", xs: "10px 30px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Popular Fabrics
        </Typography>
        <Typography
          textAlign={"center"}
          width={"80%"}
          margin={"10px auto"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          Amazing finished knitting, crochet, and weaving projects start with
          amazing yarn. WEBS is committed to sourcing and producing the best
          quality we can find and bringing them direct to you at stashable
          prices.
        </Typography>

        <Box margin={"40px 0"}>
          <Grid container spacing={8}>
            {gridData.map((el, i) => {
              return (
                <Grid key={el.id} item md={4} smm={6} xs={12}>
                  <Stack height={"100%"} justifyContent={"space-between"}>
                    <Stack>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={{ md: "1.2rem", xs: "1rem" }}
                      >
                        {el.name}
                      </Typography>
                      <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
                        {el.data}
                      </Typography>
                    </Stack>
                    <Box
                      width={"100%"}
                      height={"30vh"}
                      marginTop={"20px"}
                      sx={{
                        backgroundImage: `url(${el.img.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    ></Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        {/* <Stack
          marginTop={"30px"}
          flexWrap={"wrap"}
          direction={"row"}
          gap={{ md: "20px", xs: "20px" }}
          margin={{ md: "70px 100px 30px 100px", xs: "50px 30px" }}
          justifyContent={"center"}
        >
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
        </Stack> */}
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
