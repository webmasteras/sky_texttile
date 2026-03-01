"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import handShake from "./assets/handShake.png";
import tree from "./assets/sustainable.gif";
import sun from "./assets/sun.png";
import graph from "./assets/graph.png";


import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import community from "./assets/skyInternational/unique.jpg";
import bg from "./assets/skyInternational/bg.jpg";


import curiosity from "./assets/skyInternational/quality.jpg";
import collab from "./assets/skyInternational/customer.jpg";

import img1 from "./assets/skyInternational/1.jpg";
import img2 from "./assets/skyInternational/2.jpg";
import img3 from "./assets/skyInternational/3.jpg";
import img4 from "./assets/skyInternational/4.jpg";





import trust from "./assets/Trust.png";
import back from "./assets/back.png";
import cert from "./assets/Certification.png";

import customerIcon from "./assets/skyInternational/CustomerIcon.png";
import productIcon from "./assets/skyInternational/ProductIcon.png";
import uniqueIcon from "./assets/skyInternational/UniqueIcon.png";

import authenticity from "./assets/skyInternational/gifs/Authenticity.gif";
import brand from "./assets/skyInternational/gifs/Brand.gif";
import customer from "./assets/skyInternational/gifs/Customer.gif";
import innovation from "./assets/skyInternational/gifs/Innovation.gif";
import market from "./assets/skyInternational/gifs/Market.gif";
import product from "./assets/skyInternational/gifs/Product.gif";

import authenticationIcon from "./assets/skyInternational/icons/Authenticity/1x/1.png";
import brandIcon from "./assets/skyInternational/icons/Brand Identity/1x/1.png";
import customerLoyalityIcon from "./assets/skyInternational/icons/Customer Loyality/1x/1.png";
import innovationIcon from "./assets/skyInternational/icons/Innovation/1x/1.png";
import marketIcon from "./assets/skyInternational/icons/Market Presence/1x/1.png";
import productQualityIcon from "./assets/skyInternational/icons/Product Quality/1x/1.png";

const processData = [
  {
    id: 0,
    head: "Brand Identity",
    gif: brand,
    data1:
      "A clear, distinct, and memorable image that resonates with customers and sets the brand apart.",
    data2: null,
    data3: null,
    icon1: brandIcon,
  },
  {
    id: 1,
    head: "Product Quality",
    gif: product,
    data1:
      " Consistent delivery of high-quality products that meet or exceed customer expectations.",
    data2: null,
    data3: null,
    icon1: productIcon,
  },
  {
    id: 2,
    head: "Customer Loyality",
    gif: customer,
    data1:
      "Strong emotional connection and trust built with customers, leading to repeat business and advocacy.",
    data2: null,
    data3: null,
    icon1: customerLoyalityIcon,
  },
  {
    id: 3,
    head: "Innovation",
    gif: innovation,
    data1:
      "Continuous improvement and creativity in products, services, or experiences that keep the brand relevant.",
    data2: null,
    data3: null,
    icon1: innovationIcon,
  },
  {
    id: 4,
    head: "Market Presence",
    gif: market,
    data1:
      " A wide and strong distribution network, both online and offline, ensuring accessibility and visibility.",
    data2: null,
    data3: null,
    icon1: marketIcon,
  },
  {
    id: 5,
    head: "Authenticity",
    gif: authenticity,
    data1:
      "Genuine communication and ethical practices that align with brand values, fostering credibility and trust.",
    data2: null,
    data3: null,
    icon1: authenticationIcon,
  },
];

const PassionateData = [
  {
    id: 0,
    name: "Unique Brand Identity",
    data: "A strong, recognizable image that differentiates the brand from competitors and resonates with the target audience.",
    img: community,
  },
  {
    id: 1,
    name: "Product Quality and Design",
    data: "Consistently delivering well-crafted, stylish garments that meet customer expectations in terms of comfort, durability, and aesthetics.",
    img: curiosity,
  },
  {
    id: 2,
    name: "Customer Experience and Engagement",
    data: "Building strong relationships through excellent service, personalized experiences, and a responsive approach to customer needs and feedback.",
    img: collab,
  },
];

const milestoneData = [
  {
    name: "Vision",
    data: "To deliver stylish, high-quality garments that blend innovation with sustainability, catering to the diverse fashion needs of our customers.",
  },
  {
    name: "Mission",
    data: "To become a global leader in fashion, recognized for creating trendsetting, eco-conscious clothing that empowers individuals worldwide.",
  },
  {
    name: "Values",
    data: "Innovation, sustainability, quality, customer satisfaction, and integrity in every garment we create.",
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
          marginTop={"70px"}
          width={"100%"}
          sx={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "contain",
            backgroundRepeat:"no-repeat"
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
          Sky International Llp
        </Typography>

        <Typography
          textAlign={"center"}
          width={{ md: "50%", xs: "80%" }}
          fontSize={{ md: "1.0rem", xs: "0.8rem" }}
          margin={"0 auto"}
        >
          We are thrilled to announce the exciting journey of Sky International
          LLP under our brand ONE SKY! We’re expanding our horizons by offering
          a seamless shopping experience both online and offline, bringing our
          premium garments closer to you than ever before. You can now find ONE
          SKY apparel on all major platforms including Myntra, Amazon, Flipkart,
          Ajio, Limeroad, and Nykaa, making it easier than ever to shop your
          favorite styles. As a part of the best textile industry in Ahmedabad,
          we are committed to delivering quality and style in every piece
        </Typography>
      </Stack>
      <Stack
        backgroundColor={"#F9F9F9"}
        padding={{ md: "100px 70px", xs: "50px 50px" }}
        direction={{ md: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
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
          That's not all! We are also proud to be trusted B2B suppliers,
          providing ONE SKY garments to retailers across India. From trendy
          outfits to timeless classics, we’re delivering high-quality clothing
          nationwide, bringing the ONE SKY brand to every corner of the country.
          As a leader in textile infrastructure, whether you’re shopping for
          yourself or stocking your retail shelves, ONE SKY is your go-to for
          fashionable, top-tier garments. Let’s make this journey unforgettable,
          together
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
            height={"50vh"}
            // onMouseEnter={() => setContent(1)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"50vh"}
            // onMouseEnter={() => setContent(0)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"50vh"}
            // onMouseEnter={() => setContent(2)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img3.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"50vh"}
            // onMouseEnter={() => setContent(2)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img4.src})`,
              backgroundSize: "cover",
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
                    height={{ xs: "30vh", md: "60vh" }}
                    width={{ lg: "33%", md: "50%", xs: "90%" }}
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
        backgroundColor={"#f9f9f9"}
        padding={{ lg: "50px 70px", xs: "30px" }}
        marginBottom={"70px"}
        display={{ md: "flex", xs: "none" }}
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
              <Image src={uniqueIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Unique Brand Identity
                </Typography>
                <Typography fontSize={"1rem"}>
                  A strong, recognizable image that differentiates the brand
                  from competitors and resonates with the target audience.
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
              <Image src={productIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Product Quality and Design
                </Typography>
                <Typography fontSize={"1rem"}>
                  Consistently delivering well-crafted, stylish garments that
                  meet customer expectations in terms of comfort, durability,
                  and aesthetics.
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
              <Image src={customerIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Customer Experience and Engagement
                </Typography>
                <Typography fontSize={"1rem"}>
                  Building strong relationships through excellent service,
                  personalized experiences, and a responsive approach to
                  customer needs and feedback.
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
