"use client";

import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

import dyeing from "./assets/Main/dyeing.JPG";
import design from "./assets/Main/design.JPG";
import cutting from "./assets/Main/cutting.JPG";
import printing from "./assets/Main/printing.JPG";
import sewing from "./assets/Main/sewing.JPG";
import warehousing from "./assets/Main/warehousing.JPG";

const processData = [
  {
    id: 0,
    head: "Dyeing",
    img: dyeing,
    data: "Our advanced dyeing machines ensure precise and consistent color application, delivering high-quality, vibrant fabrics with superior durability.",
    Title: "Dyeing Capacity: 550 tons Per Month",
  },
  {
    id: 1,
    head: "Printing",
    img: printing,
    data: "Fabric printing at our textile company utilizes various advanced techniques, including pigment, reactive, discharge, disperse, and burnout printing.",
    Title: "Printing Capacity: 180 tons Per Month",
  },
  {
    id: 2,
    head: "Design Studios",
    img: design,
    data: "The brand's design studios buzz with innovation, where talented designers conceptualize and sketch breathtaking fashion ideas. Equipped with the latest design software and an extensive library of resources, the studios inspire the creation of captivating collections.",
  },
  {
    id: 3,
    head: "Cutting and Pattern Making Departments",
    img: cutting,
    data: "Precision and meticulousness define the cutting and pattern making departments. Equipped with state-of-the-art equipment, skilled artisans ensure that each garment's pattern is flawless, maximizing fabric utilization and minimizing waste.",
  },
  {
    id: 4,
    head: "Sewing and Production Lines",
    img: sewing,
    data: "The heart of the factory lies in its production lines, where skilled tailors and seamstresses translate designs into reality. Combining traditional craftsmanship with modern techniques, they sew, stitch, and assemble garments with utmost care and attention to detail.",
  },
  {
    id: 5,
    head: "Warehousing and Distribution Facilities",
    img: warehousing,
    data: "The factory's warehousing and distribution facilities are efficient and well-organized, ensuring smooth inventory management and timely global deliveries.",
  },
];

export default function Caraosal() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div>{i + 1}</div>,
  };

  return (
    <Stack marginBottom={{ md: "100px", xs: "20px" }}>
      <Typography
        fontSize={{ lg: "2.8rem", md: "2rem", sm: "1.2rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Here's A Breakdown Of Our Daily Production
      </Typography>
      <Typography
        fontSize={{ lg: "3rem", md: "2rem", sm: "1.2rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"#FB5457"}
      >
        Capacities For Various Processes
      </Typography>
      <Stack margin={{ md: "70px 70px 0 70px", xs: "20px 0 20px 0" }}>
        <Slider ref={sliderRef} {...settings}>
          {processData.map((el, i) => {
            return (
              <Stack
                key={el.id}
                width={"100%"}
                height={"80vh"}
                sx={{
                  backgroundImage: `url(${el.img.src})`,
                  backgroundSize: { lg: "contain", xs: "cover" },
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: { lg: "100%", xs: "center center" },
                }}
              >
                <Stack
                  width={{ lg: "40%", md: "60%", xs: "80%" }}
                  height={{ lg: "50%", sm: "50%", xs: "70%" }}
                  backgroundColor={"#FB5457"}
                  padding={"30px"}
                  color={"white"}
                  gap={"10px"}
                  margin={{ xs: "10vh auto" }}
                  marginLeft={{ lg: "0px" }}
                  marginBottom={{ md: "10px", xs: "10px" }}
                >
                  <Typography
                    fontSize={{ lg: "1.5rem", md: "1.2rem", xs: "1rem" }}
                  >
                    {el.head}
                  </Typography>
                  <Typography
                    fontSize={{ lg: "1rem", md: "0.9rem", xs: "0.8rem" }}
                  >
                    {el.data}
                  </Typography>
                  <Typography
                    fontSize={{ lg: "1rem", md: "0.9rem", xs: "0.8rem" }}
                  >
                    {el.Title}
                  </Typography>
                </Stack>
                <Stack
                  width={{ lg: "40%", md: "50%", xs: "80%" }}
                  margin={{ lg: "0 100px 0 0", xs: "0 auto" }}
                  justifyContent={"space-evenly"}
                  direction={"row"}
                >
                  {processData.map((el, i) => {
                    return (
                      <Stack
                        onClick={() => sliderRef.current.slickGoTo(i)}
                        marginBottom={"100px"}
                        backgroundColor={"#FB5457"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        width={"35px"}
                        height={"35px"}
                        fontSize={currentSlide == i ? "1.4rem" : "1.2rem"}
                        borderRadius={"50%"}
                        color={currentSlide == i ? "white" : "#2d2d2d"}
                        sx={{ cursor: "pointer" }}
                      >
                        {i + 1}
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
    </Stack>
  );
}
