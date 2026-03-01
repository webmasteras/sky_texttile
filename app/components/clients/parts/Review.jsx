"use client";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

import hannah from "./assets/hannah.png";
import stars from "./assets/stars.png";
import quotes from "./assets/quotes.png";
import Image from "next/image";
import richa from "./assets/richa.png";
import shakti from "./assets/shakti.png";
import tropic from "./assets/tropic.png";

const reviewData = [
  {
    id: 0,
    name: "Richa Global Export",
    data: "Thank you for consistently providing high-quality products and timely deliveries. Your reliability and dedication have greatly contributed to improving our business operations. We truly value your support and look forward to continuing our successful partnership.",
    img: richa,
  },
  {
    id: 1,
    name: "Shakti Knitting",
    data: "Thank you for consistently providing tested quality fabrics. Your commitment ensures we achieve the best results, greatly benefiting our business.",
    img: shakti,
  },
  {
    id: 2,
    name: "Tropic Knitting India",
    data: "We are truly impressed by your vertical setup, from cotton to garment production. This seamless integration ensures exceptional quality and efficiency, which has greatly benefited our business.",
    img: tropic,
  },
];

export default function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Stack margin={"100px 0 0 0"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        What clients say
      </Typography>
      <Box
        width={{ md: "60vw", xs: "100%" }}
        margin={"auto"}
        padding={{ md: "50px", xs: "10px 10px 50px 10px" }}
        backgroundColor={"#F9F9F9"}
        borderRadius={"10px"}
      >
        <Slider {...settings}>
          {reviewData.map((el, i) => (
            <ReviewsCard image={el.img} name={el.name} data={el.data} />
          ))}
        </Slider>
      </Box>
    </Stack>
  );
}

function ReviewsCard({ name, data, image }) {
  return (
    <Stack
      padding={{ md: "0 10px 20px 10px", xs: "10px" }}
      direction={{ md: "row", xs: "column" }}
      gap={"40px"}
      width={"100%"}
      alignItems={"center"}
    >
      <Stack textAlign={"center"} width={{ md: "30%" }} alignItems={"center"}>
        <Box
          height={100}
          width={100}
          sx={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
        <Typography fontSize={"1.2rem"} marginTop={"10px"}>
          {name}
        </Typography>
      </Stack>
      <Stack
        position={"relative"}
        width={{ md: "60%", xs: "85%" }}
        marginLeft={{ xs: "10%", md: "0" }}
      >
        <Box position={"absolute"} sx={{ left: "-40px" }}>
          <Image src={quotes} alt="" width={30} height={30} />
        </Box>
        <Image src={stars} alt="" width={100} height={18} />
        <Typography
          margin={"10px 0"}
          fontSize={{ md: "1rem", smm: "0.8rem", xs: "0.7rem" }}
        >
          {data}
        </Typography>
      </Stack>
    </Stack>
  );
}
