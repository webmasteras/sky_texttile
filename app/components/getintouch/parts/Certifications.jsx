"use client";

import { Box, Stack, Typography } from "@mui/material";
import cert from "./assets/Certification.jpg";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import community from "./assets/3.jpg";

import cert61 from "./assets/certs/skyTextiles/61.png";

import certi25 from "./assets/certs/skyPrimware/25.png";


export default function Certifications() {

  return (
    <Stack>
      <Navbar />
      <Stack margin={"100px 0"}>
        <Typography
          fontSize={{ md: "3rem", sm: "1.9rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Global Recognition And
        </Typography>
        <Typography
          fontSize={{ md: "3rem", sm: "1.9rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Certifications
        </Typography>

        <Typography
          width={{ md: "80%", xs: "90%" }}
          margin={"0 auto"}
          marginTop={"30px"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          textAlign={"center"}
        >
          Certifications in fabric and garment manufacturing show our commitment
          to quality, safety, and sustainability, ensuring products meet
          international standards for durability and ethics. With certifications
          like ISO, Oeko-Tex, and GOTS, we prioritize eco-friendly materials,
          safe conditions, and non-toxic processes. Our factory strictly follows
          these standards, conducting audits and staff training to maintain
          compliance, building trust with partners and customers while
          delivering responsibly produced, high-quality fabrics and garments.
        </Typography>
      </Stack>

      <Stack
        width={"100%"}
        marginTop={"30px"}
        display={{ md: "flex", xs: "none" }}
      >
        
        <Box
        width={"100%"}
          height={{ md: "100vh", xs: "30vh" }}
          sx={{
            backgroundImage: `url(${cert61.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Stack>
      <Stack
        height={{ smm: "60vh" }}
        display={{ md: "none", xs: "flex" }}
        margin={"30px 20px"}
      >
        {/* <Slider {...settingsSkyTextiles}>
          {skyTextileImages.map((el, i) => (
            <Box
              width={"20vw"}
              height={{ md: "50vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${el.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 10px",
                padding: "0 10px",
              }}
            ></Box>
          ))}
        </Slider> */}
        <Box
        width={"100%"}
          height={{ md: "100vh", xs: "30vh" }}
          sx={{
            backgroundImage: `url(${cert61.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Stack>

      <Stack
        width={"90%"}
        margin={"50px auto"}
        marginTop={"30px"}
        display={{ md: "flex", xs: "none" }}
      >
        {/* <Slider {...settingSkyTextilesLarge}>
          {skyPrimwareImages.map((el, i) => (
            <Box
              width={"20vw"}
              height={{ md: "50vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${el.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 10px",
                padding: "0 10px",
              }}
            ></Box>
          ))}
        </Slider>
         */}
        <Box
        width={"100%"}
          height={{ md: "100vh", xs: "30vh" }}
          sx={{
            backgroundImage: `url(${certi25.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Stack>
      <Stack
        height={{ smm: "60vh" }}
        display={{ md: "none", xs: "flex" }}
        margin={"30px 20px"}
      >
        <Box
        width={"100%"}
          height={{ md: "100vh", xs: "30vh" }}
          sx={{
            backgroundImage: `url(${certi25.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Stack>

      <Footer />
    </Stack>
  );
}
