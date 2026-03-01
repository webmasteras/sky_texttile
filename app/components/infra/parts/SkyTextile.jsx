"use client";

import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import banner from "./assets/banner2.png";
import mobileBanner from "./assets/mobileBanner.png";
import enterprise from "./assets/enterprise.png";
import buildings from "./assets/buildings.png";
import launch from "./assets/launch.png";
import payload from "./assets/payload.png";
import mission from "./assets/mission.png";
import { useRef } from "react";

const enterpriseData = [
  {
    id: 0,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
  {
    id: 1,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
  {
    id: 2,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
  {
    id: 3,
    image: enterprise,
    head: "Medium Enterprise",
    data: "There Are Many Variations of Passages of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour.",
  },
];

export default function SkyTextiles() {
  const sliderRef = useRef(null);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    centerPadding: "20%",
    centerMode: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  var settingsMobile = {
    arrows: false,
    dots: false,
    infinite: true,
    centerPadding: "8%",
    centerMode: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
  };
  return (
    <Stack>
      <Navbar />
      <Stack
        height={"80vh"}
        width={"100%"}
        sx={{
          backgroundImage: {
            md: `url(${banner.src})`,
            xs: `url(${mobileBanner.src})`,
          },
          backgroundSize: "cover",
          backgroundPosition: { md: "center right", xs: "center bottom" },
        }}
        padding={{ md: "0 70px", xs: "50px 30px" }}
        justifyContent={{ md: "center", xs: "start" }}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={{ md: "left", xs: "center" }}
        >
          It Is A Long
        </Typography>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={{ md: "left", xs: "center" }}
          fontWeight={"bold"}
        >
          Established Fact.
        </Typography>
        <Typography
          width={{ md: "40%" }}
          textAlign={{ md: "left", xs: "center" }}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          There Are Many Variations of Passages of Lorem Ipsum Available, But
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, or Randomised Words Which Don't Look Even Slightly Believable.
        </Typography>
      </Stack>
      <Stack margin={{ md: "70px", xs: "20px" }}>
        <Stack
          direction={{ md: "row" }}
          paddingRight={{ md: "10vw" }}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={{ md: "center", xs: "start" }}
        >
          <Stack>
            <Typography>We Advice More Than.</Typography>
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              We Advice More Than
            </Typography>
            <Typography
              marginBottom={"20px"}
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              1500 Companies.
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={"20px"}>
            <Stack
              sx={{
                border: "3px solid #707070",
                borderRadius: "50%",
                padding: "5px",
                color: "#707070",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&: hover": {
                  color: "black",
                  borderColor: "black",
                },
              }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <IoIosArrowBack style={{ width: "30px", height: "30px" }} />
            </Stack>
            <Stack
              sx={{
                border: "3px solid #707070",
                borderRadius: "50%",
                padding: "5px",
                color: "#707070",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&: hover": {
                  color: "black",
                  borderColor: "black",
                },
              }}
              onClick={() => sliderRef.current.slickNext()}
            >
              <IoIosArrowForward style={{ width: "30px", height: "30px" }} />
            </Stack>
          </Stack>
        </Stack>
        <Box display={{ md: "block", xs: "none" }}>
          <Slider ref={sliderRef} {...settings}>
            {enterpriseData.map((el, i) => {
              return (
                <Stack padding={"10px"}>
                  <Box
                    marginBottom={"20px"}
                    height={"40vh"}
                    width={"100%"}
                    sx={{
                      backgroundImage: `url(${el.image.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  ></Box>
                  <Typography
                    fontSize={"1.2rem"}
                    fontWeight={"bold"}
                    marginBottom={"5px"}
                  >
                    {el.head}
                  </Typography>
                  <Typography>{el.data}</Typography>
                </Stack>
              );
            })}
          </Slider>
        </Box>
        <Box display={{ md: "none" }}>
          <Slider ref={sliderRef} {...settingsMobile}>
            {enterpriseData.map((el, i) => {
              return (
                <Stack padding={"10px 10px 0 0"}>
                  <Box
                    marginBottom={"20px"}
                    height={"30vh"}
                    width={"100%"}
                    sx={{
                      backgroundImage: `url(${el.image.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  ></Box>
                  <Typography
                    fontSize={"0.9rem"}
                    fontWeight={"bold"}
                    marginBottom={"5px"}
                  >
                    {el.head}
                  </Typography>
                  <Typography fontSize={"0.8rem"}>{el.data}</Typography>
                </Stack>
              );
            })}
          </Slider>
        </Box>
      </Stack>
      <Stack position={"relative"}>
        <Typography
          margin={"0 auto"}
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
          width={"60%"}
        >
          We Design Places That Connect People To Their Environment.
        </Typography>
        <Box
          height={"70vh"}
          width={"80%"}
          sx={{
            backgroundImage: `url(${buildings.src})`,
            backgroundSize: "cover",
            position: "absolute",
            top: "150px",
            left: "10%",
          }}
          margin={"20px auto"}
          borderRadius={"20px"}
        ></Box>
        <Box height={"350px"}></Box>
        <Stack
          justifyContent={"center"}
          gap={{ smm: "50px", xs: "15px" }}
          backgroundColor={"#FB5457"}
          direction={"row"}
          padding={{ md: "100px 70px", xs: "50px 10px" }}
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <Stack
            width={{ smm: "200px", xs: "130px" }}
            height={{ smm: "200px", xs: "130px" }}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            backgroundColor={"white"}
            zIndex={"20"}
          >
            <Typography fontSize={"1rem"}>Award Won</Typography>
            <Typography fontSize={"3rem"} fontWeight={"bold"} color={"#FB5457"}>
              17
            </Typography>
          </Stack>
          <Stack
            width={{ smm: "200px", xs: "130px" }}
            height={{ smm: "200px", xs: "130px" }}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            backgroundColor={"white"}
            zIndex={"20"}
          >
            <Typography>Xp Years</Typography>
            <Typography fontWeight={"bold"} color={"#FB5457"} fontSize={"3rem"}>
              12+
            </Typography>
          </Stack>
          <Stack
            width={{ smm: "200px", xs: "130px" }}
            height={{ smm: "200px", xs: "130px" }}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            backgroundColor={"white"}
            zIndex={"20"}
          >
            <Typography>Clients</Typography>
            <Typography fontWeight={"bold"} color={"#FB5457"} fontSize={"3rem"}>
              108
            </Typography>
          </Stack>
          <Stack
            width={{ smm: "200px", xs: "130px" }}
            height={{ smm: "200px", xs: "130px" }}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            backgroundColor={"white"}
            zIndex={"20"}
          >
            <Typography>Projects</Typography>

            <Typography fontWeight={"bold"} color={"#FB5457"} fontSize={"3rem"}>
              150
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack margin={{ md: "100px 70px", xs: "50px 30px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          3 Ease and Fast Steps
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          width={{ md: "80%" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          Innovation drives us forward, and our dedicated R&D centre plays a
          vital role in fostering breakthroughs in our industry. Our team of
          experienced researchers, designers, and engineers work tirelessly to.
        </Typography>

        <Stack
          marginTop={"50px"}
          direction={{ md: "row" }}
          height={{ md: "70vh" }}
          justifyContent={"space-between"}
        >
          <Stack width={{ md: "30%", xs: "70%" }} marginBottom={"30px"}>
            <Typography>Step-1</Typography>
            <Typography
              fontSize={"1.4rem"}
              fontWeight={"bold"}
              marginBottom={"20px"}
            >
              Select Payload
            </Typography>
            <Box
              height={"40vh"}
              width={"100%"}
              sx={{
                backgroundImage: `url(${payload.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Stack>
          <Stack
            width={{ md: "30%", xs: "70%" }}
            marginBottom={"30px"}
            justifyContent={"center"}
            alignSelf={{ xs: "end", md: "center" }}
          >
            <Typography>Step-2</Typography>
            <Typography
              fontSize={"1.4rem"}
              fontWeight={"bold"}
              marginBottom={"20px"}
            >
              Configure Mission
            </Typography>
            <Box
              height={"40vh"}
              width={"100%"}
              sx={{
                backgroundImage: `url(${payload.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Stack>
          <Stack
            justifyContent={"end"}
            width={{ md: "30%", xs: "70%" }}
            marginBottom={"30px"}
          >
            <Typography>Step-3</Typography>
            <Typography
              fontSize={"1.4rem"}
              fontWeight={"bold"}
              marginBottom={"20px"}
            >
              Launch and Operate
            </Typography>
            <Box
              height={"40vh"}
              width={"100%"}
              sx={{
                backgroundImage: `url(${payload.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        height={"90vh"}
        width={"100%"}
        backgroundColor={"#f9f9f9"}
        marginBottom={"100px"}
      ></Stack>
      <Footer />
    </Stack>
  );
}
