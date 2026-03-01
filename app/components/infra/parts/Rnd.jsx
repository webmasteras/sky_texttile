"use client";

import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rnd from "./assets/Main/rnd.JPG";
import rnd2 from "./assets/Main/rnd2.JPG";
import rnd3 from "./assets/Main/rnd3.JPG";
import { useState } from "react";

const rndContent = [
  {
    head1: "Verticle setup from ",
    head2: "Cotton to Garment",
    data: "Our vertical setup streamlines the entire process from raw cotton to finished garments, ensuring complete control over quality and efficiency. This integrated approach allows us to deliver premium products while reducing lead times.",
  },
  {
    head1: "Research and Development",
    head2: "(Rnd) center",
    data: "Our Research and Development department continuously innovates to create high-quality, sustainable fabrics that meet evolving market trends. We focus on advanced materials and techniques to ensure exceptional performance and durability across all textiles.",
  },
  {
    head1: "Quality control and",
    head2: "Inspection Units",
    data: "Committed to maintaining exceptional quality, the brand's quality control and inspection units rigorously examine each garment. The implementation of advanced technology and manual checks guarantees that only the finest products bear the SKY PRIMWEAR label.",
  },
];

export default function Rnd() {
  const [content, setContent] = useState(0);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  return (
    <Stack
      margin={{ md: "0 70px 100px 70px ", xs: "0 20px" }}
      marginBottom={"150px"}
      gap={"10px"}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        lineHeight={"0.9"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        {rndContent[content].head1}
      </Typography>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"#FB5457"}
      >
        {rndContent[content].head2}
      </Typography>
      <Typography textAlign={"center"} width={"70vw"} margin={"0 auto"}>
        {rndContent[content].data}
      </Typography>
      <Stack
        direction={"row"}
        gap={"40px"}
        justifyContent={"center"}
        marginTop={"50px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Box
          width={"25%"}
          height={"30vh"}
          onMouseEnter={() => setContent(1)}
          borderRadius={"10px"}
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${rnd.src})`,
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          width={"25%"}
          height={"30vh"}
          onMouseEnter={() => setContent(0)}
          borderRadius={"10px"}
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${rnd2.src})`,
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          width={"25%"}
          height={"30vh"}
          onMouseEnter={() => setContent(2)}
          borderRadius={"10px"}
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${rnd3.src})`,
            backgroundSize: "cover",
          }}
        ></Box>
      </Stack>
      <Stack height={{ smm: "40vh" }} display={{ md: "none", xs: "flex" }}>
        <Slider {...settings}>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "40vh", xs: "40vh" }}
              sx={{
                backgroundImage: `url(${rnd.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                cursor: "pointer",
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "40vh", xs: "40vh" }}
              sx={{
                backgroundImage: `url(${rnd2.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                cursor: "pointer",
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "40vh", xs: "40vh" }}
              sx={{
                backgroundImage: `url(${rnd3.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                cursor: "pointer",
              }}
            ></Box>
          </Box>
        </Slider>
      </Stack>
    </Stack>
  );
}
