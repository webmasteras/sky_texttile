"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import handShake from "./assets/handShake.png";
import tree from "./assets/sustainable.gif";
import sun from "./assets/sun.png";
import graph from "./assets/graph.png";
import bg from "./assets/skyInternational/bg.jpg"
import community from "./assets/skyPrimware/expertise.JPG";
import curiosity from "./assets/skyPrimware/quality.JPG";
import collab from "./assets/skyPrimware/product.JPG";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./assets/skyPrimware/Main/1.JPG";
import img2 from "./assets/skyPrimware/Main/2.JPG";
import img3 from "./assets/skyPrimware/Main/3.JPG";
import img4 from "./assets/skyPrimware/Main/4.JPG";

import trust from "./assets/Trust.png";
import back from "./assets/back.png";
import cert from "./assets/Certification.png";

import productIcon from "./assets/skyPrimware/ProductIcon.png";
import qualityIcon from "./assets/skyPrimware/QualityIcon.png";
import unrivaledIcon from "./assets/skyPrimware/UnrivaledIcon.png";

import cutting from "./assets/skyPrimware/gifs/Cutting.gif";
import design from "./assets/skyPrimware/gifs/Design.gif";
import location from "./assets/skyPrimware/gifs/Location.gif";
import quality from "./assets/skyPrimware/gifs/Quality.gif";
import sewing from "./assets/skyPrimware/gifs/Sewing.gif";
import warehousing from "./assets/skyPrimware/gifs/Warehousing.gif";

import designIcon1 from "./assets/skyPrimware/icons/Design/1x/1.png";
import designIcon2 from "./assets/skyPrimware/icons/Design/1x/2.png";

import cuttingIcon1 from "./assets/skyPrimware/icons/Cutting/1x/1.png";
import cuttingIcon2 from "./assets/skyPrimware/icons/Cutting/1x/2.png";

import locationIcon1 from "./assets/skyPrimware/icons/Location/Location And Overview/1.png";
import locationIcon2 from "./assets/skyPrimware/icons/Location/Location And Overview/2.png";

import qualityIcon1 from "./assets/skyPrimware/icons/Quality/1x/1.png";
import qualityIcon2 from "./assets/skyPrimware/icons/Quality/1x/2.png";

import sewingIcon1 from "./assets/skyPrimware/icons/Sewing/1x/1.png";
import sewingIcon2 from "./assets/skyPrimware/icons/Sewing/1x/2.png";

import warehousingIcon1 from "./assets/skyPrimware/icons/Warehousing/1x/1.png";

const processData = [
  {
    id: 0,
    head: "Location and Overview",
    gif: location,
    data1:
      "The strategically located factory serves aS the brand's creative hUb and prodUction center, foStering a Seamless workflow and timely deliveries.",
    data2:
      " ItS spacious layoUt allows for Unhindered collaboration among different departments.",
    data3: null,
    icon1: locationIcon1,
    icon2: locationIcon2,
  },
  {
    id: 1,
    head: "Design Studios",
    gif: design,
    data1:
      "The brand's design studios buzz with innovation, where talented designers conceptualize and sketch breathtaking fashion ideas.",
    data2:
      "Equipped with the latest design software and an extensive library of resources, the studios inspire the creation of captivating collections.",
    data3: null,
    icon1: designIcon1,
    icon2: designIcon2,
  },
  {
    id: 2,
    head: "Cutting and Pattern Making Departments",
    gif: cutting,
    data1:
      "Precision and meticulousness define the cutting and pattern making departments.",
    data2:
      "Equipped with state-of-the-art equipment, skilled artisans ensure that each garment's pattern is flawless, maximizing fabric utilization and minimizing waste.",
    data3: null,
    icon1: cuttingIcon1,
    icon2: cuttingIcon2,
  },
  {
    id: 3,
    head: "Sewing and Production Lines",
    gif: sewing,
    data1:
      "The heart of the factory lies in its production lines, where skilled tailors and seamstresses translate designs into reality.",
    data2:
      "Combining traditional craftsmanship with modern techniques, they sew, stitch, and assemble garments with utmost care and attention to detail.",
    data3: null,
    icon1: sewingIcon1,
    icon2: sewingIcon2,
  },
  {
    id: 4,
    head: "Quality Control and Inspection Units",
    gif: quality,
    data1:
      "Committed to maintaining exceptional quality, the brand's quality control and inspection units rigorously examine each garment.",
    data2:
      "The implementation of advanced technology and manual checks guarantees that only the finest products bear the SKY PRIMWEAR label.",
    data3: null,
    icon1: qualityIcon1,
    icon2: qualityIcon2,
  },
  {
    id: 5,
    head: "Warehousing and Distribution Facilities",
    gif: warehousing,
    data1:
      "The factory's warehousing and distribution facilities are efficient and well-organized, ensuring smooth inventory management and timely global deliveries.",
    data2: null,
    data3: null,
    icon1: warehousingIcon1,
  },
];

const PassionateData = [
  {
    id: 0,
    name: "Unrivled Experties",

    data: "SKY PRIMWEAR's journey began with skilled professionals mastering the art of knitting. Over time, they’ve refined their expertise, using premium yarns and advanced knitting technologies to produce high-quality, expertly crafted knitted clothing.",
    img: community,
  },
  {
    id: 1,
    name: "Quality Assurance",
    data: "We are dedicated to uncompromising quality, with rigorous control at every stage of production. Skilled technicians ensure consistency, durability, and flawless finishing in all our knitted garments. As the best quality textile infrastructure and manufacturing company in Ahmedabad, Gujarat, India, and Asia, we pride ourselves on offering Premium Quality Fabrics in Gujarat",
    img: curiosity,
  },
  {
    id: 2,
    name: "Product Range",
    data: "SKY PRIMWEAR offers a diverse range of knitted apparel for men, women, and children, including stylish sweaters, cardigans, and dresses. Blending classic designs with modern aesthetics, our products provide timeless style and comfort for various occasions. With a GSM Range of 120 GSM – 450 GSM in Gujarat, we ensure the best textile products in Gujarat. Additionally, we are recognized as the best cotton mill , delivering high-quality fabrics for all your clothing needs.",
    img: collab,
  },
];

const milestoneData = [
  {
    name: "Vision",
    data: "To be a leading global garment manufacturer, recognized for innovation, sustainability, and unmatched quality.",
  },
  {
    name: "Mission",
    data: "To produce high-quality, sustainable garments that exceed customer expectations while fostering innovation and ethical practices in every step of our process.",
  },
  {
    name: "Values",
    data: "Quality, sustainability, integrity, innovation, and customer satisfaction drive everything we do in crafting exceptional garments.",
  },
];

export default function SkyTextiles() {
  const [img, setImg] = useState(community);
  const [activeDiv, setActiveDiv] = useState(0);
  const [activeMileStone, setActiveMileStone] = useState(0);

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  var settingsImages = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
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

  var settingsPassionalte = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Stack>
      <Navbar />
      <Box
        height={{ lg: "100vh", smm: "50vh", xs: "30vh" }}
        marginTop={"40px"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      ></Box>
      <Stack margin={{ md: "150px 0", xs: "150px 0" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          width={{ md: "65%", xs: "80%" }}
          margin={"20px auto"}
          marginTop={"0"}
        >
          Premier Knitted Clothing Manufacturer
        </Typography>

        <Typography
          textAlign={"center"}
          width={{ md: "50%", xs: "80%" }}
          fontSize={{ md: "1.0rem", xs: "0.8rem" }}
          margin={"0 auto"}
        >
          Welcome to SKY PRIMWEAR, your trusted partner in premium knitted
          clothing manufacturing! As the best quality textile manufacturing and
          infrastructure company in Ahmedabad, Gujarat, India, and Asia, we
          proudly stand as an industry leader. Our strong foundation in quality
          and innovation, combined with our status as one of the leading textile
          manufacturers in Gujarat and the best T-shirt manufacturers in
          Gujarat, reflects our unwavering commitment to craftsmanship and
          precision. We have earned a stellar reputation as a finished fabrics
          manufacturing company, delivering top-tier knitted garments that meet
          the highest standards. Serving a global clientele, we continue to set
          the benchmark for excellence in the world of knitted fashion.
        </Typography>
      </Stack>
      <Stack
        backgroundColor={"#F9F9F9"}
        padding={{ md: "100px 70px", xs: "50px 50px" }}
        direction={{ md: "row" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"20px"}
      >
        <Stack alignItems={"center"} width={"30%"}>
          <Image src={trust} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            150+
          </Typography>
          <Typography fontSize={"1.2rem"} textAlign={"center"}>
            Trusted by companies who believe in us.
          </Typography>
        </Stack>
        <Stack alignItems={"center"} width={"30%"}>
          <Image src={back} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            2021
          </Typography>
          <Typography fontSize={"1.2rem"} textAlign={"center"}>
            Since we are
          </Typography>
        </Stack>
        <Stack alignItems={"center"} width={"30%"}>
          <Image src={cert} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            150+
          </Typography>
          <Typography fontSize={"1.2rem"} textAlign={"center"}>
            Valid Certifications
          </Typography>
        </Stack>
      </Stack>
      <Stack margin={{ md: "100px 70px", xs: "50px 30px" }}>
        <Typography
          width={{ md: "70%" }}
          margin={"5px auto"}
          textAlign={"center"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          At SKY Primwear, we boast an impressive production capacity that
          enables us to meet large-scale demands with efficiency and precision.
          We produce 3,000 Polo T-shirts, 6,000 Crew Neck T-shirts, and 7,500
          Tracks per day, ensuring a consistent supply of high-quality garments.
          Additionally, we manufacture 8,000 undergarments, 3,000 boxers, and
          offer 6,000 embroidery and 5,000 panel printing units daily. Our
          robust production capabilities ensure timely delivery and exceptional
          product standards, making us a trusted partner for all your garment
          needs. We take pride in offering the best textile products in
          Ahmedabad, Gujarat, India, and Asia.
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
            // onMouseEnter={() => setContent(1)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"30vh"}
            // onMouseEnter={() => setContent(0)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"30vh"}
            // onMouseEnter={() => setContent(2)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img3.src})`,
              backgroundPosition: "center top",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"30vh"}
            // onMouseEnter={() => setContent(2)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></Box>
        </Stack>
        <Stack height={{ smm: "40vh" }} display={{ md: "none", xs: "flex" }}>
          <Slider {...settingsImages}>
            <Box padding={"10px"}>
              <Box
                height={{ smm: "40vh", xs: "40vh" }}
                sx={{
                  backgroundImage: `url(${img1.src})`,
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
                  backgroundImage: `url(${img2.src})`,
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
                  backgroundImage: `url(${img3.src})`,
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
                  backgroundImage: `url(${img4.src})`,
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
      <Stack backgroundColor={{ smm: "#FB5457" }} padding={{ smm: 5, md: 10 }}>
        <Slider ref={sliderRef} {...settings}>
          {processData.map((el, i) => {
            return (
              <Stack
                // height={"70vh"}
                direction={{ md: "row", xs: "column-reverse" }}
                justifyContent={"space-between"}
                gap={{ md: "40px", xs: "10px" }}
                alignItems={"center"}
                backgroundColor={"#F9F9F9"}

                // margin={{ lg: "70px 100px", xs: "40px 30px" }}
                // padding={{ md: "40px", xs: "10px" }}
              >
                <Stack
                  direction={{ md: "row" }}
                  padding={5}
                  justifyContent={"space-evenly"}
                  gap={"30px"}
                  alignItems={"center"}
                >
                  <Stack width={{ md: "62%" }}>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
                      color={"#FB5457"}
                      marginBottom={"20px"}
                    >
                      {el.head}
                    </Typography>
                    <Box
                      height={"1.5px"}
                      width={"200px"}
                      backgroundColor={"black"}
                      marginBottom={"40px"}
                    ></Box>
                    <Stack
                      direction={"row"}
                      gap={"20px"}
                      alignItems={"center"}
                      border={"1px solid #FB5457"}
                      padding={"15px"}
                      backgroundColor={"white"}
                      marginBottom={"20px"}
                    >
                      <Image src={el.icon1} alt="" width={20} height={20} />
                      <Typography>{el.data1}</Typography>
                    </Stack>
                    {el.data2 && (
                      <Stack
                        direction={"row"}
                        gap={"20px"}
                        alignItems={"center"}
                        border={"1px solid #FB5457"}
                        padding={"15px"}
                        backgroundColor={"white"}
                        marginBottom={"20px"}
                      >
                        <Image src={el.icon2} alt="" width={20} height={20} />
                        <Typography>{el.data2}</Typography>
                      </Stack>
                    )}

                    {el.data3 && (
                      <Stack
                        direction={"row"}
                        gap={"20px"}
                        alignItems={"start"}
                        border={"1px solid #FB5457"}
                        padding={"15px"}
                        backgroundColor={"white"}
                        marginBottom={"20px"}
                      >
                        <Image
                          src={sun}
                          alt=""
                          width={"10px"}
                          height={"10px"}
                        />
                        <Typography>{el.data3}</Typography>
                      </Stack>
                    )}
                  </Stack>
                  <Stack
                    width={{ lg: "33%", md: "50%", xs: "90%" }}
                    height={{ xs: "30vh", md: "60vh" }}
                    position={"relative"}
                  >
                    <Image src={el.gif} fill objectFit="contain" />
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
      <Stack display={{ md: "none" }} margin={"50px 0"} width={"100%"}>
        <Typography
          fontWeight={"bold"}
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          margin={"0 20px 30px 20px"}
        >
          We Are Passionate About
        </Typography>
        <Slider {...settingsPassionalte}>
          {PassionateData.map((el, i) => (
            <PassionateCard key={i} el={el} />
          ))}
        </Slider>
      </Stack>
      <Stack
        direction={{ md: "row" }}
        gap={"20px"}
        display={{ md: "flex", xs: "none" }}
        backgroundColor={"#f9f9f9"}
        padding={{ lg: "50px 70px", xs: "30px" }}
        marginBottom={"70px"}
        alignItems={"center"}
      >
        <Stack width={{ md: "60%" }}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          >
            We Are Passionate About Solving Problems
          </Typography>

          <Stack margin={{ lg: "40px 0" }}>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
              color={activeDiv === 0 ? "black" : "#d2d2d2"}
              onMouseEnter={() => {
                setImg(community), setActiveDiv(0);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Image src={unrivaledIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Unrivaled Expertise
                </Typography>
                <Typography fontSize={"1rem"}>
                  SKY PRIMWEAR's journey began with skilled professionals
                  mastering the art of knitting. Over time, they’ve refined
                  their expertise, using premium yarns and advanced knitting
                  technologies to produce high-quality, expertly crafted knitted
                  clothing.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
              color={activeDiv === 1 ? "black" : "#d2d2d2"}
              onMouseEnter={() => {
                setImg(curiosity), setActiveDiv(1);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Image src={qualityIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Quality Assurance
                </Typography>
                <Typography fontSize={"1rem"}>
                  We are dedicated to uncompromising quality, with rigorous
                  control at every stage of production. Skilled technicians
                  ensure consistency, durability, and flawless finishing in all
                  our knitted garments.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
              color={activeDiv === 2 ? "black" : "#d2d2d2"}
              onMouseEnter={() => {
                setImg(collab), setActiveDiv(2);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Image src={productIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Product Range
                </Typography>
                <Typography fontSize={"1rem"}>
                  SKY PRIMWEAR offers a diverse range of knitted apparel for
                  men, women, and children, including stylish sweaters,
                  cardigans, and dresses. Blending classic designs with modern
                  aesthetics, our products provide timeless style and comfort
                  for various occasions.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          height={"90vh"}
          width={{ md: "40%" }}
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "30px",
          }}
        ></Stack>
      </Stack>
      {/* <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        margin={{ md: "100px 70px", xs: "50px 30px" }}
        gap={"10px"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Stack gap={"10px"} width={{ md: "50%", smm: "70%", xs: "100%" }}>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            What Is Lorem Ipsum?
          </Typography>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            width={{ md: "70%" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
          <button
            style={{
              backgroundColor: "#FB5457",
              border: "none",
              width: "100px",
              padding: "10px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Button
          </button>
        </Stack>
        <Stack
          width={{ md: "50%", xs: "100%" }}
          height={{ md: "30vw", xs: "30vh" }}
          sx={{
            backgroundImage: `url(${maskGroup.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
      </Stack> */}
      <Stack
        margin={{ md: "50px 0", xs: "30px 0" }}
        display={{ xs: "flex", md: "none" }}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Milestones
        </Typography>
        {milestoneData.map((el, i) => {
          return (
            <Stack key={i} margin={"20px"}>
              <Typography fontWeight={"bold"}>{el.name}</Typography>
              <Typography fontSize={"0.8rem"}>{el.data}</Typography>
            </Stack>
          );
        })}
      </Stack>

      <Stack
        margin={{ md: "50px 0", xs: "30px 0" }}
        display={{ xs: "none", md: "flex" }}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Milestones
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
          width={"60%"}
          margin={"0 auto"}
        >
          {milestoneData[activeMileStone].data}
        </Typography>
        <Stack
          direction={{ md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          margin={"30px 0"}
        >
          <Stack
            minWidth={{ lg: "150px", xs: "100px" }}
            maxWidth={{ lg: "150px", xs: "100px" }}
            height={{ lg: "150px", xs: "100px" }}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&: hover": {
                scale: 1.1,
              },
            }}
            onMouseEnter={() => setActiveMileStone(0)}
          >
            Vision
          </Stack>
          <Stack
            minWidth={{ lg: "150px", xs: "100px" }}
            maxWidth={{ lg: "150px", xs: "100px" }}
            height={{ lg: "150px", xs: "100px" }}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&: hover": {
                scale: 1.1,
              },
            }}
            onMouseEnter={() => setActiveMileStone(1)}
          >
            Mission
          </Stack>
          <Stack
            minWidth={{ lg: "150px", xs: "100px" }}
            maxWidth={{ lg: "150px", xs: "100px" }}
            height={{ lg: "150px", xs: "100px" }}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&: hover": {
                scale: 1.1,
              },
            }}
            onMouseEnter={() => setActiveMileStone(2)}
          >
            Values
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}

function PassionateCard({ el }) {
  return (
    <Stack margin={"0 20px"} gap={"20px"} justifyContent={"space-between"}>
      <Stack gap={"10px"}>
        <Typography fontWeight={"bold"}>{el.name}</Typography>
        <Typography fontSize={"0.8rem"}>{el.data}</Typography>
      </Stack>
      <Stack
        height={"70vh"}
        width={{ md: "40%" }}
        sx={{
          backgroundImage: `url(${el.img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "30px",
        }}
      ></Stack>
    </Stack>
  );
}
