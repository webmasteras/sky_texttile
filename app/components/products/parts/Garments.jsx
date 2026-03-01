"use client";

import { Box, Stack, Typography } from "@mui/material";
import banner from "./assets/yarnsBanner.png";
import bannerMobile from "./assets/yarnsBannerMobile.png";
import Navbar from "../../navbar/Navbar";
import Strength from "./StrengthGarments";
import yarns from "./assets/popularYarns.png";
import gradient from "./assets/gradient.png";
import Footer from "../../footer/Footer";
import Grid from "@mui/material/Grid";

import flowChart from "./assets/garmentsFlowChart.jpg";

import img1 from "./assets/Garments/INNERWEAR.JPG";
import img2 from "./assets/Garments/CASUALWEAR.JPG";
import img3 from "./assets/Garments/LOUNGEWEAR.JPG";
import img4 from "./assets/Garments/WINTERWEAR.JPG";
import img5 from "./assets/Garments/Athleisure.JPG";
import img6 from "./assets/Garments/Outerwear.jpg";

const gridData = [
  {
    id: 0,
    name: "Inner Wear",
    data: "Comfortable, breathable garments designed for daily use, offering excellent fit and durability.",
    img: img1,
  },
  {
    id: 1,
    name: "Casual Wear",
    data: " Relaxed, stylish clothing perfect for everyday comfort and informal occasions.",
    img: img2,
  },
  {
    id: 2,
    name: "Sleep Wear",
    data: "Lightweight, breathable garments designed for a restful sleep experience, ensuring all-night comfort.",
    img: img3,
  },
  {
    id: 3,
    name: "Winter Wear",
    data: "Warm, insulating clothing engineered to retain body heat during cold weather conditions.",
    img: img4,
  },
  {
    id: 4,
    name: "Athleisure",
    data: "Versatile, performance-driven apparel combining athletic functionality with everyday fashion.",
    img: img5,
  },
  {
    id: 5,
    name: "Outer Wear",
    data: "Protective, weather-resistant clothing designed to shield against the elements while maintaining style.",
    img: img6,
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
          Introduction to Garments
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }} textAlign={"center"}>
          SKY Primwear is a state-of-the-art garment manufacturing unit,
          equipped with cutting-edge machinery and staffed by highly trained
          professionals dedicated to delivering superior quality at every stage
          of production. Our facility operates with a meticulously designed
          workflow, ensuring efficiency and precision in every garment we
          produce, with a capacity of 4 lakh garments per month.
          <br />
          The garmenting process at SKY Primwear begins with the selection of
          high-quality fabrics, which are inspected at various quality control
          checkpoints to ensure they meet our strict standards before moving
          into the cutting phase. From there, the fabric is processed through
          advanced sewing machines operated by skilled workers trained to handle
          everything from basic stitching to intricate designs. Each stage of
          production, including cutting, sewing, and finishing, undergoes
          rigorous quality checks to ensure consistency and flawlessness.
          <br />
          After the garments are finished, they pass through a final quality
          control checkpoint before being packed and dispatched to our clients.
          We pride ourselves on our ability to cater to a diverse range of
          garment types, including innerwear, casual wear, loungewear,
          sleepwear, thermals, athleisure, outerwear, and fashion styles. As one
          of the best t-shirt manufacturing companies in Ahmedabad, Gujarat,
          India, and Asia and among the best shirt manufacturers in Ahmedabad,
          Gujarat, India, and Asia, SKY Primwear delivers garments that meet the
          highest standards of craftsmanship, making us a trusted partner in the
          global fashion industry
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
          Popular Garments
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
                      height={"55vh"}
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
