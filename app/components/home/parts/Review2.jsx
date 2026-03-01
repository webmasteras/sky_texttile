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

export default function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Stack margin={"100px 0 0 0"}>
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        What clients say
      </Typography>
      <Box
        width={"60vw"}
        margin={"auto"}
        padding={"50px"}
        backgroundColor={"#F9F9F9"}
        borderRadius={"10px"}
      >
        <Slider {...settings}>
          <Stack padding={"0 10px 20px 10px"} direction={"row"} width={"100%"}>
            <Stack
              textAlign={"center"}
              width={"30%"}
              display={"inline-block"}
              marginRight={"10%"}
            >
              <Image
                src={hannah}
                width={100}
                height={100}
                alt=""
                style={{ margin: "auto" }}
              />
              <Typography fontSize={"1.2rem"}>Hannah Schimet</Typography>
              <Typography fontSize={"0.9rem"}> CEO - Marvish</Typography>
            </Stack>
            <Stack position={"relative"} width={"60%"} display={"inline-block"}>
              <Box position={"absolute"} sx={{ left: "-40px" }}>
                <Image src={quotes} alt="" width={30} height={30} />
              </Box>
              <Image src={stars} alt="" width={100} height={18} />
              <Typography margin={"10px 0"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                lacus arcu.
              </Typography>
              <Typography fontSize={"0.9rem"}>May 8, 2020</Typography>
            </Stack>
          </Stack>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Box>
    </Stack>
  );
}
