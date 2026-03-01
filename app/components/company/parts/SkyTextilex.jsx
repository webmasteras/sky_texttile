"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import handShake from "./assets/handShake.png";
import tree from "./assets/sustainable.gif";
import sun from "./assets/sun.png";
import graph from "./assets/graph.png";

import community from "./assets/skyTextile/Knitting.JPG";
import curiosity from "./assets/skyTextile/DEYING.JPG";
import collab from "./assets/skyTextile/FABRIC.JPG";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./assets/skyTextile/1.1.JPG";
import img2 from "./assets/skyTextile/1.2.JPG";
import img3 from "./assets/skyTextile/1.3.JPG";
import img4 from "./assets/skyTextile/1.4.JPG";
import bg from "./assets/skyTextile/bannergr.jpg";

import trust from "./assets/Trust.png";
import back from "./assets/back.png";
import cert from "./assets/Certification.png";

import knittingIcon from "./assets/skyTextile/KnittingIcon.png";
import dyeingIcon from "./assets/skyTextile/DyeingIcon.png";
import finishingIcon from "./assets/skyTextile/FinishingIcon.png";

import innovationGif from "./assets/skyTextile/Innovations.gif";
import technologiesGif from "./assets/skyTextile/Technology.gif";
import economyGif from "./assets/skyTextile/EconomyScale.gif";
import verticleGif from "./assets/skyTextile/VerticleIntegration.gif";
import productGif from "./assets/skyTextile/ProductRange.gif";
import globalGif from "./assets/skyTextile/GlobalPresence.gif";

import innovationIcon1 from "./assets/skyTextile/icons/Innovations/1x/1.png";
import innovationIcon2 from "./assets/skyTextile/icons/Innovations/1x/2.png";
import innovationIcon3 from "./assets/skyTextile/icons/Innovations/1x/3.png";

import technologiesIcon1 from "./assets/skyTextile/icons/Technology/1x/Commitment.png";
import technologiesIcon2 from "./assets/skyTextile/icons/Technology/1x/techniques.png";
import technologiesIcon3 from "./assets/skyTextile/icons/Technology/1x/Technology.png";

import economyIcon1 from "./assets/skyTextile/icons/Economy Scale/1x/1.png";
import economyIcon2 from "./assets/skyTextile/icons/Economy Scale/1x/2.png";
import economyIcon3 from "./assets/skyTextile/icons/Economy Scale/1x/3.png";

import verticleIcon1 from "./assets/skyTextile/icons/Verticle Integration/Verticle Integration/1.png";
import verticleIcon2 from "./assets/skyTextile/icons/Verticle Integration/Verticle Integration/2.png";
import verticleIcon3 from "./assets/skyTextile/icons/Verticle Integration/Verticle Integration/3.png";

import globalIcon1 from "./assets/skyTextile/icons/Global Presence/1x/1.png";
import globalIcon2 from "./assets/skyTextile/icons/Global Presence/1x/2.png";
import globalIcon3 from "./assets/skyTextile/icons/Global Presence/1x/3.png";

import productIcon1 from "./assets/skyTextile/icons/Product Range/1x/1.png";
import productIcon2 from "./assets/skyTextile/icons/Product Range/1x/2.png";
import productIcon3 from "./assets/skyTextile/icons/Product Range/1x/3.png";

const processData = [
  {
    id: 0,
    head: "Innovations",
    gif: innovationGif,
    data1:
      "SKY Textiles drives innovation by responding to customer needs for unique, high-quality products that reflect emerging trends and changing consumer preferences.",
    data2:
      "We stay ahead of the curve, consistently delivering tailored, differentiated solutions to meet market demands.",
    data3:
      "By monitoring trends and end-user expectations, we provide cutting-edge designs and superior products that exceed client expectations in a dynamic industry.",
    icon1: innovationIcon1,
    icon2: innovationIcon2,
    icon3: innovationIcon3,
  },
  {
    id: 1,
    head: "Technologies",
    gif: technologiesGif,
    data1:
      "SKY Textiles integrates technology into every facet of production, quality assurance, and R&D, ensuring precision, efficiency, and innovation.",
    data2:
      "Our use of cutting-edge tools and techniques allows us to maintain top-quality standards while fostering continuous improvement and creativity in our products.",
    data3:
      "This commitment to technology empowers us to meet the evolving needs of our clients and stay ahead in the market.",
    icon1: technologiesIcon1,
    icon2: technologiesIcon2,
    icon3: technologiesIcon3,
  },
  {
    id: 2,
    head: "Economy Scale",
    gif: economyGif,
    data1:
      "SKY Textiles' large production capacity optimizes every stage, from sourcing raw materials to delivering a wide range of products across the vertical.",
    data2:
      "Our capacity advantage allows us to efficiently meet diverse customer demands while maintaining flexibility and offering a superior variety of products.",
    data3:
      "Operating at scale enables us to provide clients with both quality and choice, ensuring competitiveness and responsiveness to market needs.",
    icon1: economyIcon1,
    icon2: economyIcon2,
    icon3: economyIcon3,
  },
  {
    id: 3,
    head: "Verticle Integration",
    gif: verticleGif,
    data1:
      "SKY Textiles has established a strong presence across the entire textile and garment value chain, from yarns and fabrics to finished garments.",
    data2:
      "Our comprehensive integration allows us to oversee every production stage, ensuring quality and consistency throughout the process.",
    data3:
      "With end-to-end capabilities, we efficiently meet diverse customer needs, making us a trusted partner in the textile and garment industry.",
    icon1: verticleIcon1,
    icon2: verticleIcon2,
    icon3: verticleIcon3,
  },
  {
    id: 4,
    head: "Product Range",
    gif: productGif,
    data1:
      "SKY Textiles offers an end-to-end solution across a wide range of product categories, from raw cotton to finished garments.",
    data2:
      "Our fully integrated services manage every aspect of the textile production process, ensuring quality and efficiency at each stage.",
    data3:
      "This comprehensive approach enables us to meet diverse client needs, making us a reliable partner for all textile and garment requirements.",
    icon1: productIcon1,
    icon2: productIcon2,
    icon3: productIcon3,
  },
  {
    id: 5,
    head: "Global Presence",
    gif: globalGif,
    data1:
      "SKY Textiles has established a global presence in 14 countries, delivering exceptional quality and innovation as one of India's fastest-growing textile units.",
    data2:
      "We cater to the biggest domestic brands, providing high-quality garments and fabrics, making us a trusted partner in the industry.",
    data3:
      "Our commitment to excellence and innovation drives growth and expansion both in India and internationally, keeping us ahead in the competitive global market.",
    icon1: globalIcon1,
    icon2: globalIcon2,
    icon3: globalIcon3,
  },
];

const PassionateData = [
  {
    id: 0,
    name: "Knitting",
    icon: knittingIcon,
    data: "The process of creating fabric by interlocking yarn loops to form flexible, stretchable textiles.",
    img: community,
  },
  {
    id: 1,
    name: "Dyeing",
    icon: dyeingIcon,
    data: "Applying color to fabric through various methods to achieve vibrant and consistent shades.",
    img: curiosity,
  },
  {
    id: 2,
    name: "Finishing",
    icon: finishingIcon,
    data: "Enhancing fabric properties like texture, strength, and appearance through treatments and processes after knitting and dyeing.",
    img: collab,
  },
];

const milestoneData = [
  {
    name: "Vision",
    data: "Providing the best textile products in Ahmedabad, Gujarat, India, and Asia, we strive to be a leading global garment manufacturer known for innovation, sustainability, and superior quality",
  },
  {
    name: "Mission",
    data: "To produce the best textiles in the industry, we prioritize high-quality, sustainable fabrics through innovation and ethical practices, while supporting community growth and minimizing environmental impact.",
  },
  {
    name: "Values",
    data: "With the best textile infrastructure, we emphasize quality, sustainability, innovation, integrity, customer focus, collaboration, and responsibility in all our practices",
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
          Where innovation meets tradition, we weave quality into every thread.
        </Typography>

        <Typography
          textAlign={"center"}
          width={{ md: "50%", xs: "80%" }}
          fontSize={{ md: "1.0rem", xs: "0.8rem" }}
          margin={"0 auto"}
        >
          We are thrilled to announce that SKY Textiles has emerged as a premier
          fully vertical facility, providing a one-stop solution for all your
          garment needs. From raw cotton to finished apparel, we handle every
          stage of production, including design, sourcing, and industrial
          manufacturing.As one of the Best Spinning Mills in Ahmedabad, Gujarat,
          India, we offer the Best Fabrics in Gujarat, utilizing advanced
          Textile Processing Techniques. Our facility features the Best Speed
          Frame Process in Gujarat and a refined Raw Material Mixing Process,
          ensuring top-notch quality and consistency.
        </Typography>
      </Stack>
      <Stack
        backgroundColor={"#F9F9F9"}
        padding={{ md: "100px 70px", xs: "50px 50px" }}
        direction={{ md: "row" }}
        justifyContent={"space-around"}
        gap={"20px"}
      >
        <Stack alignItems={"center"} width={{ md: "30%" }}>
          <Image src={trust} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            150+
          </Typography>
          <Typography fontSize={"1.2rem"} textAlign={"center"}>
            Trusted by companies who believe in us.
          </Typography>
        </Stack>
        <Stack alignItems={"center"} width={{ md: "30%" }}>
          <Image src={back} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            2020
          </Typography>
          <Typography fontSize={"1.2rem"} textAlign={"center"}>
            Since we are
          </Typography>
        </Stack>
        <Stack alignItems={"center"} width={{ md: "30%" }}>
          <Image src={cert} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            100+
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
          Founded in October 2020 under the Companies Act of 2013 (CIN:
          U17299GJ2020PTC116984), SKY Textiles is headquartered at B-105,
          Westgate Tower Unit 2, near YMCA Club, S.G. Highway, Makarba,
          Ahmedabad, Gujarat. We take pride in our cutting-edge vertical
          facility, located at Survey No Paiki, 32 & 33, Bhavnagar Road,
          Lathidad, District Botad, Gujarat. With our commitment to excellence,
          innovation, and customer satisfaction, SKY Textiles is poised to
          become a leading partner for all your garment production needs. We
          look forward to an exciting journey ahead, creating world-class
          apparel together !
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
              backgroundPosition: "center center",
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
              backgroundPosition: "center center",
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
              backgroundSize: "cover",
              backgroundPosition: "center center",
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
              backgroundPosition: "center center",
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
                    <Stack
                      direction={"row"}
                      gap={"20px"}
                      alignItems={"center"}
                      border={"1px solid #FB5457"}
                      padding={"15px"}
                      backgroundColor={"white"}
                      marginBottom={"20px"}
                    >
                      <Image src={el.icon3} alt="" width={20} height={20} />
                      <Typography>{el.data3}</Typography>
                    </Stack>
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
        display={{ md: "flex", xs: "none" }}
        gap={"20px"}
        backgroundColor={"#f9f9f9"}
        padding={{ lg: "50px 70px", xs: "30px" }}
        marginBottom={"70px"}
      >
        <Stack width={{ md: "60%" }}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          >
            We Are Passionate About
          </Typography>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Solving Problems
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
              <Image src={knittingIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Knitting
                </Typography>
                <Typography fontSize={"1rem"}>
                  The process of creating fabric by interlocking yarn loops to
                  form flexible, stretchable textiles.
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
              <Image src={dyeingIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Dyeing
                </Typography>
                <Typography fontSize={"1rem"}>
                  Applying color to fabric through various methods to achieve
                  vibrant and consistent shades.
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
              <Image src={finishingIcon} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Finishing
                </Typography>
                <Typography fontSize={"1rem"}>
                  Enhancing fabric properties like texture, strength, and
                  appearance through treatments and processes after knitting and
                  dyeing.
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
            backgroundPosition: "center center",
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
