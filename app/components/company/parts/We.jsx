"use client";

import { Box, Stack, Typography } from "@mui/material";

import who1 from "./assets/who/1.JPG";
import who2 from "./assets/who/2.JPG";
import who3 from "./assets/who/3.JPG";
import who4 from "./assets/who/4.JPG";

import what1 from "./assets/what/1.JPG";
import what2 from "./assets/what/2.JPG";
import what3 from "./assets/what/3.JPG";
import what4 from "./assets/what/4.JPG";

import where1 from "./assets/where/1.JPG";
import where2 from "./assets/where/2.JPG";
import where3 from "./assets/where/3.JPG";
import where4 from "./assets/where/4.JPG";

import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const weData = [
  {
    img1: what1,
    img2: what2,
    img3: what3,
    img4: what4,
    title: '<b> What <span style="color: #FB5457;">We Are</span> </b>',
    para1:
      "We are a fully integrated textile company, providing a one-stop solution for all your textile and garment needs. From sourcing the finest cotton to delivering high-quality finished garments, our vertical setup ensures seamless production, reducing both costs and lead times. By streamlining the entire process under one roof, we eliminate the need for multiple vendors and minimize transportation delays, allowing for quicker, more efficient service. ",
    para2:
      "Our commitment to excellence is reflected in the top-notch quality of our products, paired with an unparalleled level of customer service. Equipped with cutting-edge technology and a focus on innovation, we continually push the boundaries of what’s possible in the textile industry. At Sky Textiles, we don’t just produce garments; we deliver solutions that meet your unique needs with speed, precision, and quality that stands out in the market.",
  },
  {
    img1: who1,
    img2: who2,
    img3: who3,
    img4: who4,
    title: '<b> Who <span style="color: #FB5457;">We Are</span> </b>',
    para1:
      "Founded in October 2020 under the Companies Act of 2013 (CIN: U17299GJ2020PTC116984), SKY Textiles is headquartered in Gujarat at B-105, Westgate Tower Unit 2, near YMCA Club, S.G. Highway, Makarba, Ahmedabad-380015. Our state-of-the-art facility is located in Cotton rich district of Gujarat ie:Botad  is equipped with advanced technology for producing premium cotton threads in various counts.",
    para2:
      "Specializing in high-quality, competitively priced garments for the global market, we offer a wide range of apparel, including polo t-shirts, crew necks, tracks, boxers, hoodies, and more, catering to men, women, kids, and infants. With cutting-edge infrastructure, advanced software, and a team of dedicated professionals, SKY Textiles is committed to innovation and excellence. From modest beginnings, we have grown rapidly, supplying some of the world’s top apparel brands and expanding our global reach.",
  },
  {
    img1: where1,
    img2: where2,
    img3: where3,
    img4: where4,
    title: '<b> Where <span style="color: #FB5457;">We Are</span> </b>',
    para1:
      "After four years of operation, SKY Textiles has evolved into a key player in the global textile industry. Our fully integrated, vertically structured setup has proven to be a game-changer, enabling us to reduce costs and production times while maintaining the highest standards of quality. With cutting-edge technology, we've expanded our capabilities to produce a wide range of garments, including polo t-shirts, crew necks, tracks, boxers, and hoodies, for men, women, kids, and infants.",
    para2:
      "Today, we proudly partner with some of the world's most recognized apparel brands, delivering tailored solutions that meet their unique needs. Our advanced infrastructure and innovative approach have allowed us to consistently push the boundaries of what's possible in garment manufacturing. As we continue to grow, we remain committed to providing excellence, innovation, and unmatched service, expanding our global reach and impact in the fashion industry.",
  },
];

export default function We() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  var contentSettings = {
    arrows: false,
    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleStringTyped = () => {
    console.log(sliderRef.current);
    console.log(currentSlide);
    // sliderRef.current.slickGoTo(currentSlide + 1); // Move to the next slide
    setCurrentSlide((currentSlide) => currentSlide + 1); // Update currentSlide state
  };

  return (
    <Stack margin={{ md: "70px", xs: "30px" }} gap={"20px"}>
      {/* <Box fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
        <Typewriter
          options={{
            strings: [
              '<b> What <span style="color: #FB5457;">We Are</span> </b>',
              '<b> Who <span style="color: #FB5457;">We Are</span> </b>',
              '<b> Where <span style="color: #FB5457;">We Are</span> </b>',
            ],
            autoStart: true,
            html: true,
            loop: true,
            // onStringTyped: handleStringTyped,
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => {
                handleStringTyped();
              })
              .start();
          }}
        />
      </Box> */}
      <Slider ref={sliderRef} {...contentSettings}>
        {weData.map((el, i) => {
          return <WeDataCard el={el} key={i} />;
        })}
      </Slider>
    </Stack>
  );
}

function WeDataCard({ el }) {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
  };
  return (
    <Stack>
      <Box fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
        <Typewriter
          options={{
            strings: [el.title],
            autoStart: true,
            html: true,
            loop: true,
            // onStringTyped: handleStringTyped,
          }}
        />
      </Box>
      <Stack>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          {el.para1}
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          {el.para2}
        </Typography>

        <Stack
          direction={"row"}
          display={{ md: "flex", xs: "none" }}
          height={"60vh"}
          sx={{ justifyContent: "space-between", margin: "40px 0" }}
        >
          <Box
            width={"23%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${el.img1.src})`,
              transition: "filter 0.5s ease",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
              filter: "grayscale(100%)",
              cursor: "pointer",
              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          ></Box>
          <Box
            width={"23%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${el.img2.src})`,
              transition: "filter 0.5s ease",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
              cursor: "pointer",
              filter: "grayscale(100%)",
              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          ></Box>
          <Box
            height={"100%"}
            width={"23%"}
            sx={{
              backgroundImage: `url(${el.img3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
              cursor: "pointer",
              filter: "grayscale(100%)",
              transition: "filter 0.5s ease",
              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          ></Box>
          <Box
            width={"23%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${el.img4.src})`,
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
        </Stack>
        <Stack height={{ smm: "60vh" }} display={{ md: "none", xs: "flex" }}>
          <Slider {...settings}>
            <Box padding={"10px"}>
              <Box
                height={{ smm: "60vh", xs: "30vh" }}
                sx={{
                  backgroundImage: `url(${el.img1.src})`,
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
                height={{ smm: "60vh", xs: "30vh" }}
                sx={{
                  backgroundImage: `url(${el.img2.src})`,
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
                height={{ smm: "60vh", xs: "30vh" }}
                sx={{
                  backgroundImage: `url(${el.img3.src})`,
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
                height={{ smm: "60vh", xs: "30vh" }}
                sx={{
                  backgroundImage: `url(${el.img4.src})`,
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
    </Stack>
  );
}
