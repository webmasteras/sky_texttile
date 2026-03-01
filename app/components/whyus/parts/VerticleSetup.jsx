"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import banner from "./assets/verticleBanner.png";
import snow from "./assets/snow.png";
import lady from "./assets/lady.png";
import couple from "./assets/couple.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function VerticleSetup() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={{ md: "70px 0 50px 0", xs: "20px 30px 30px 30px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Verticle Setup
        </Typography>
        <Typography
          width={{ md: "60%" }}
          margin={"0 auto"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
        >
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s.
        </Typography>
      </Stack>
      <Stack
        width={"100%"}
        height={{ md: "80vh", smm: "60vh", xs: "30vh" }}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack
        direction={{ md: "row" }}
        margin={{ lg: "100px 100px", md: "50px", xs: "30px" }}
        justifyContent={"space-between"}
        gap={"40px"}
      >
        <Stack width={{ md: "30%", xs: "100%" }} gap={"10px"}>
          <Image src={snow} alt="" height={50} width={50} />
          <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
            Lorem Ipsum
          </Typography>
          <Typography fontSize={{ lg: "1rem", xs: "0.7rem" }}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text.
          </Typography>
        </Stack>
        <Stack width={{ md: "30%", xs: "100%" }} gap={"10px"}>
          <Image src={snow} alt="" height={50} width={50} />
          <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
            Lorem Ipsum{" "}
          </Typography>
          <Typography fontSize={{ lg: "1rem", xs: "0.7rem" }}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text.
          </Typography>
        </Stack>
        <Stack width={{ md: "30%", xs: "100%" }} gap={"10px"}>
          <Image src={snow} alt="" height={50} width={50} />
          <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
            Lorem Ipsum
          </Typography>
          <Typography fontSize={{ lg: "1rem", xs: "0.7rem" }}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        justifyContent={"space-between"}
        direction={{ md: "row", xs: "column-reverse" }}
        alignItems={{ md: "center" }}
        gap="10px"
        margin={{ md: "100px 70px", xs: "20px 30px" }}
      >
        <Stack width={{ md: "50%" }}>
          <Typography fontSize={{ md: "2rem", xs: "1.2rem" }}>
            Lorem Ipsum
          </Typography>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Lorem Ipsum
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Stack>
        <Stack
          width={{ md: "40%", xs: "80%" }}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${lady.src})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            backgroundPosition: "right",
          }}
        ></Stack>
      </Stack>
      <Stack gap={{ md: "20px", xs: "5px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
        >
          Lorem Ipsum
        </Typography>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Lorem Ipsumm
        </Typography>
        <Typography
          margin={"0 auto"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          width={"90%"}
          textAlign={"center"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          margin={{ md: "50px 70px", xs: "30px" }}
          display={{ md: "flex", xs: "none" }}
        >
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
        </Stack>
        <Stack height={{ smm: "40vh" }} display={{ md: "none", xs: "flex" }}>
          <Slider {...settings}>
            <Box padding={"10px"}>
              <Box
                height={{ smm: "40vh", xs: "40vh" }}
                sx={{
                  backgroundImage: `url(${couple.src})`,
                  transition: "filter 0.5s ease",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  backgroundPosition: "center center",
                  filter: "grayscale(100%)",
                  cursor: "pointer",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              ></Box>
            </Box>
            <Box padding={"10px"}>
              <Box
                height={{ smm: "40vh", xs: "40vh" }}
                sx={{
                  backgroundImage: `url(${couple.src})`,
                  transition: "filter 0.5s ease",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  backgroundPosition: "center center",
                  filter: "grayscale(100%)",
                  cursor: "pointer",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              ></Box>
            </Box>
            <Box padding={"10px"}>
              <Box
                height={{ smm: "40vh", xs: "40vh" }}
                sx={{
                  backgroundImage: `url(${couple.src})`,
                  transition: "filter 0.5s ease",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  backgroundPosition: "center center",
                  filter: "grayscale(100%)",
                  cursor: "pointer",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              ></Box>
            </Box>
          </Slider>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
}
