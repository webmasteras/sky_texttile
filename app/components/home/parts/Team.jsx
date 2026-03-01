"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import megan from "./assets/team.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import uday from "./assets/team/uday.jpg";
import travadi from "./assets/team/MohammadTravadi.jpg";
import arishu from "./assets/team/arishu.jpg";
import arvinf from "./assets/team/arvinf.jpg";
import bhupendra from "./assets/team/bhupendra.jpg";
import harbir from "./assets/team/harbir.jpg";
import jagmohan from "./assets/team/jagmohan.jpg";
import jayant from "./assets/team/jayant.jpg";
import puneet from "./assets/team/puneet.jpg";
import rajesh from "./assets/team/rajesh.jpg";
import rajiv from "./assets/team/rajiv.jpg";
import rakesh from "./assets/team/rakesh.jpg";
import shanmugunanath from "./assets/team/shanmugunanath.jpg";
import Chandresh from "./assets/team/ChandreshVasani.jpg";
import anuragdug from "./assets/team/AnuragDulgach.jpg";
import vipul from "./assets/team/VipulMatholiya.jpg";

const teamData = [

  {
    id: 4,
    name: "Uday Kambe",
    designation: "Head IT",
    img: uday,
  },
  {
    id: 5,
    name: "Mohammad Travadi",
    designation: "GM B2B Garments",
    img: travadi,
  },
  {
    id: 6,
    name: "Arishu Mittal",
    designation: "Planning Head Fabrics",
    img: arishu,
  },
  {
    id: 7,
    name: "Arvinf Bhature",
    designation: "Quality Head Garments",
    img: arvinf,
  },
  {
    id: 8,
    name: "Bhupendra Mahant",
    designation: "Printing Head Fabrics",
    img: bhupendra,
  },
  {
    id: 9,
    name: "Harbir Yadav",
    designation: "Quality Head Fabrics",
    img: harbir,
  },
  {
    id: 10,
    name: "Jagmohan Singh",
    designation: "HR Head Fabrics",
    img: jagmohan,
  },
  {
    id: 11,
    name: "Jayant Menon",
    designation: "Plant Head Garments",
    img: jayant,
  },
  {
    id: 12,
    name: "Puneet Arora",
    designation: "VP Marketing Fabrics",
    img: puneet,
  },
  {
    id: 13,
    name: "Rajesh Mishra",
    designation: "Manager Knitting",
    img: rajesh,
  },
  {
    id: 14,
    name: "Rajiv Sharma",
    designation: "Plant Head Fabrics",
    img: rajiv,
  },
  {
    id: 15,
    name: "Rakesh Jayaraman",
    designation: "VP Marketing Garments",
    img: rakesh,
  },
  {
    id: 16,
    name: "Shanmugunanath",
    designation: "GM Marketing Fabrics",
    img: shanmugunanath,
  },
  {
    id: 17,
    name: "Vipul Matholiya",
    designation: "Admin Head",
    img: vipul,
  },
  {
    id: 18,
    name: "Anurag Dulgach",
    designation: "Head Ecommerce & Social Media",
    img: anuragdug,
  },
  {
    id: 19,
    name: "Chandresh Vasani ",
    designation: "Payroll HR",
    img: Chandresh,
  },





];






export default function () {
  var settings = {
    // arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 500,
    autoplay: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  var settingLarge = {
    arrows: true,
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "8%",
  };

  return (
    <Stack margin={{ md: "100px 0 0 0", xs: "30px 0 0 0" }}>
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Meet some of Our 2000+
      </Typography>
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Professionals
      </Typography>
      <Stack
        width={"90%"}
        margin={"0px auto"}
        marginTop={"40px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Slider {...settingLarge}>
          {teamData.map((el, i) => (
            <Card key={el.id} el={el} />
          ))}
        </Slider>
      </Stack>
      <Stack
        height={{ smm: "60vh" }}
        display={{ md: "none", xs: "flex" }}
        margin={"30px 20px"}
      >
        <Slider {...settings}>
          {teamData.map((el, i) => (
            <CardSmall key={el.id} el={el} />
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
}

function CardSmall({ el }) {
  return (
    <Stack
      height={{ smm: "60vh", xs: "30vh" }}
      width={"90%"}
      alignItems={"center"}
    >
      <Box
        height={{ smm: "60vh", xs: "30vh" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${el.img.src})`,
          backgroundSize: "contain",
          backgroundColor: "#E7E7E7",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Typography
        textAlign={"center"}
        fontSize={{ smm: "1.2rem", xs: "1rem" }}
        fontWeight={"bold"}
      >
        {el.name}
      </Typography>
      <Typography textAlign={"center"} fontSize={{ smm: "1rem", xs: "0.8rem" }}>
        {el.designation}
      </Typography>
    </Stack>
  );
}

function Card({ el }) {
  return (
    <Stack
      height={"fit-content"}
      width={"20vw"}
      marginBottom={"50px"}
      alignItems={"center"}
    >
      <Box
        position={"relative"}
        height={{ lg: "40vh", xs: "30vh" }}
        width={"100%"}
        backgroundColor={"#E7E7E7"}
        borderRadius={"5px"}
      >
        <Image
          src={el.img}
          alt=""
          fill
          objectPosition="bottom"
          objectFit="contain"
          sizes="100vw"
        />
      </Box>
      <Typography
        textAlign={"center"}
        fontSize={{ lg: "1.2rem", xs: "1rem" }}
        fontWeight={"bold"}
      >
        {el.name}
      </Typography>
      <Typography
        textAlign={"center"}
        fontSize={{ lg: "0.9rem", xs: "0.8rem" }}
      >
        {el.designation}
      </Typography>
    </Stack>
  );
}
