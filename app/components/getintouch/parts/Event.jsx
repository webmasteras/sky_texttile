"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import banner from "./assets/conference.png";
import Image from "next/image";
import time from "./assets/clock.png";
import location from "./assets/location.png";
import flowers from "./assets/flowers.png";
import laptop from "./assets/laptop.png";
import girlOnLaptop from "./assets/girlOnLaptop.png";

const data = [
  {
    Date: "Wednesday, March 29",
    Title: " Microsoft Teams: The Productivity Swiss Army Knife.",
    time: "11 AM - 1 PM",
    location: "The Kitchen American Bistro",
    description:
      "Join Tecnologia And Ingram Micro To Explore How Teams Can Enable Better Hybrid Work For Businesses.",
  },
  {
    Date: "Wednesday, March 29",
    Title: " Microsoft Teams: The Productivity Swiss Army Knife.",
    time: "11 AM - 1 PM",
    location: "The Kitchen American Bistro",
    description:
      "Join Tecnologia And Ingram Micro To Explore How Teams Can Enable Better Hybrid Work For Businesses.",
  },
  {
    Date: "Wednesday, March 29",
    Title: " Microsoft Teams: The Productivity Swiss Army Knife.",
    time: "11 AM - 1 PM",
    location: "The Kitchen American Bistro",
    description:
      "Join Tecnologia And Ingram Micro To Explore How Teams Can Enable Better Hybrid Work For Businesses.",
  },
];

export default function Event() {
  return (
    <Stack>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
          width: "100vw",
        }}
      ></Box>
      <Stack margin={{ md: "50px", smm: "30px", xs: "20px" }} gap={"10px"}>
        <Typography fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}>
          Exploring Generative AI in Content Creation
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}>
          Steering Clear of Common AI Writing Pitfalls
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Stack
          direction={"row"}
          gap={"20px"}
          justifyContent={"space-between"}
          marginTop={"30px"}
        >
          <Box
            sx={{
              backgroundImage: `url(${laptop.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "110vh",
              width: "48%",
            }}
          ></Box>
          <Stack width={"48%"} justifyContent={"space-between"} gap={"20px"}>
            <Box
              sx={{
                backgroundImage: `url(${girlOnLaptop.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "50vh",
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${flowers.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "50vh",
                width: "100%",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          margin={{ md: "0 50px", smm: "0 30px", xs: "0 20px" }}
          fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}
        >
          Events
        </Typography>

        <Stack
          margin={{
            xl: "50px 70px 200px 70px",
            md: "50px 40px 200px 40px",
            smm: "50px 30px 200px 30px",
            sm: "50px 20px 200px 20px",
          }}
          justifyContent={"space-between"}
          direction={{ md: "row", sm: "column" }}
          flexWrap={"wrap"}
        >
          {data.map((d) => (
            <Stack
              gap={"10px"}
              fontSize={"5px"}
              width={{ xl: "30%", lg: "50%", md: "50%", sm: "100%" }}
              padding={"20px"}
              backgroundColor={"#f9f9f9"}
            >
              <Box
                width="100%"
                height="30vh"
                sx={{
                  backgroundImage: `url(${banner.src})`,
                  backgroundSize: "cover",
                  borderRadius: "5px",
                }}
              ></Box>
              <Typography
                fontSize={"0.9rem"}
                backgroundColor={"#D9D9D9"}
                padding={"5px 8px"}
                borderRadius={"3px"}
                width={"fit-content"}
                margin={"10px 0"}
              >
                {d.Date}
              </Typography>
              <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
                {d.Title}
              </Typography>
              <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Image src={time} alt="" height={15} width={15} />
                <Typography>{d.time}</Typography>
              </Stack>
              <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Image src={location} alt="" height={16} width={12} />
                <Typography>{d.Title}</Typography>
              </Stack>
              <Typography>{d.description}</Typography>
              <button
                style={{
                  marginTop: "20px",
                  width: "200px",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "1.2rem",
                  border: "none",
                  backgroundColor: "#F85658",
                  color: "white",
                }}
              >
                Register Now
              </button>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
