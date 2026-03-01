"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import legacy from "./assets/legacy.png";
import yarn1 from "./assets/yarnUp.png";
import yarn2 from "./assets/yarnDown.png";
import cape from "./assets/Cape.png";
import Strength from "./SustainabilityStrength";
import { useState } from "react";

import people from "./assets/peopleImage.jpg";
import planet from "./assets/planetImage.jpg";

const futurePlans = [
  {
    name: "20%",
    data: "Energy mix from renewable sources by 2025(WIL).",
  },
  {
    name: "100%",
    data: "Energy from resources with carbon neutrality by 2030(WIL).",
  },
  {
    name: "Tracking",
    data: "Strict emmision regulations across operations with pollution control equipment and periodic reporting and tracking.",
  },
  {
    name: "EVs",
    data: "Promoting cleaner and more efficient transportation like EVs.",
  },
  {
    name: "Industries",
    data: "Local ancillary industries for lowering inward-transport emissions.",
  },
  {
    name: "SBTi",
    data: "Adoption of the SBTi framework for creating the GHG reduction blueprint (WIL).",
  },
];

const goals = [
  "To lead the textile industry by creating a fully integrated, sustainable ecosystem that uplifts local communities through job creation and skill development. We strive to provide society with high-quality, eco-friendly textiles and garments, ensuring that our innovations not only meet global standards but also support the growth and prosperity of rural regions. By empowering people and delivering sustainable solutions, we are shaping a brighter, greener future for generations to come.",
  "At Sky Group, we believe that success is not only measured by financial growth but also by the positive impact we create for our employees, communities, and the planet. Our workforce is a cornerstone of our mission, dedicated to upholding the highest standards of quality, ethics, and innovation. By offering opportunities for skill development and long-term growth, we contribute to uplifting local communities where we operate.",
];

const responsibility = [
  {
    aim: "To protect the environment by conserving resources, improving eǌciency, and enhancing innovation.",
    points: [
      {
        name: "Energy & Emissions Management",
        data: "Improve energy eǌciency and adopt renewable energy to mitigate emissions.",
      },
      {
        name: "Water Neutrality",
        data: "Reduce water consumption and aim for water neutrality and water positive.",
      },
      {
        name: "Chemical & Materials Stewardship",
        data: " Align with global standards for zero discharge of hazardous chemicals and source sustainable alternatives.",
      },
      {
        name: "Waste Towards Circularity",
        data: "Manage our waste to reduce, reuse, recycle, and ultimately close the loop.",
      },
    ],
  },
  {
    aim: "To nurture a growth-oriented environment for our employees and the communities we operate in.",
    points: [
      {
        name: "Empowered Workforce",
        data: "Enhance employees’ technical and soft skills.",
      },
      {
        name: "Employee Health & Well-being",
        data: "Ensure safety, create awareness, and tackle health issues our people face.",
      },
      {
        name: "Fair & Respectful Workplace",
        data: "Uphold human rights through executed policies and robust grievance management systems.",
      },
      {
        name: "Corporate Social Responsiblity",
        data: "Drive impact in health, education, skill development, and environmental management.",
      },
    ],
  },
];

export default function Overview() {
  const [planetData, setPlanetData] = useState(0);
  const [visionData, setVisionData] = useState(true);
  return (
    <Stack>
      <Navbar />
      <Stack position={"relative"} gap={"20px"} margin={"150px 70px"}>
        <Box
          width={"200px"}
          height={"200px"}
          sx={{
            backgroundImage: `url(${yarn2.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "-100px",
            right: "-70px",
          }}
        ></Box>
        <Box
          width={"200px"}
          height={"200px"}
          sx={{
            backgroundImage: `url(${yarn1.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            bottom: "0px",
            left: "-50px",
          }}
        ></Box>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Overview
        </Typography>
        <Typography
          width={{ md: "80%", xs: "90%" }}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          At Sky Group, sustainability is more than a commitment—it’s at the
          heart of everything we do. As an aspired leader in the textile and
          garment manufacturing industry, we are dedicated to driving positive
          environmental and social impact through every stage of our value
          chain. Our approach blends innovation, efficiency, and ethical
          practices, focusing on creating a better tomorrow. We are proud to be
          recognized for producing the best sustainable textiles in Gujarat.
        </Typography>

        <Box
          height={"15vh"}
          width={"60%"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${cape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Stack>

      <Stack
        gap={"20px"}
        margin={"50px 0"}
        padding={{ md: "60px 70px", xs: "30px" }}
        backgroundColor={"#f9f9f9"}
        display={{ md: "none", xs: "flex" }}
      >
        <Typography
          fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Responsiblity for planet
        </Typography>
        <Typography
          width={{ md: "80%" }}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          {responsibility[0].aim}
        </Typography>
        <Stack
          textAlign={"left"}
          gap={"20px"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          {responsibility[0].points.map((el, i) => {
            return (
              <Stack key={i}>
                <Typography fontWeight={"bold"}>{`${i + 1}. ${
                  el.name
                }`}</Typography>
                <Typography>{el.data}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Typography
          fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Responsiblity for people
        </Typography>
        <Typography
          width={{ md: "80%" }}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          {responsibility[1].aim}
        </Typography>
        <Stack
          textAlign={"left"}
          gap={"20px"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          {responsibility[1].points.map((el, i) => {
            return (
              <Stack key={i}>
                <Typography fontWeight={"bold"}>{`${i + 1}. ${
                  el.name
                }`}</Typography>
                <Typography>{el.data}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack
        gap={"20px"}
        margin={"50px 0"}
        padding={{ md: "60px 70px", xs: "30px" }}
        backgroundColor={"#f9f9f9"}
        display={{ md: "flex", xs: "none" }}
      >
        <Typography
          fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          {planetData === 0
            ? "Responsiblity For Planet"
            : "Responsiblity For People"}
        </Typography>
        <Typography
          width={{ md: "80%" }}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          {planetData === 0 ? responsibility[0].aim : responsibility[1].aim}
        </Typography>
        <Stack
          textAlign={"left"}
          gap={"20px"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          {responsibility[planetData].points.map((el, i) => {
            return (
              <Stack key={i}>
                <Typography fontWeight={"bold"}>{`${i + 1}. ${
                  el.name
                }`}</Typography>
                <Typography>{el.data}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack direction={{ md: "row" }} gap="30px" justifyContent={"center"}>
          <Box
            width={{ md: "50%", xs: "100%" }}
            height={"55vh"}
            margin={"20px auto"}
            onMouseEnter={() => setPlanetData(0)}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${planet.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Box>
          <Box
            width={{ md: "50%", xs: "100%" }}
            height={"55vh"}
            margin={"20px auto"}
            onMouseEnter={() => setPlanetData(1)}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${people.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Box>
        </Stack>
      </Stack>

      <Stack margin={"10px 20px"} display={{ md: "none", xs: "flex" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Our Goals
        </Typography>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Vision
        </Typography>
        <Typography>{goals[0]}</Typography>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Mission
        </Typography>
        <Typography>{goals[1]}</Typography>
      </Stack>

      <Stack margin={"50px 70px"} display={{ md: "flex", xs: "none" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Our Goals
        </Typography>
        <Stack
          direction={{ md: "row" }}
          justifyContent={{ md: "center" }}
          marginTop={{ md: "50px", xs: "20px" }}
          position={"relative"}
        >
          <Stack
            width={{ md: "300px", xs: "200px" }}
            height={{ md: "300px", xs: "200px" }}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            onMouseEnter={() => setVisionData(true)}
            sx={{
              border: "1px solid black",
              borderRadius: "50%",
              left: { md: "20px" },
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#FB5457",
                color: "white",
                border: "none",
                zIndex: "20",
              },
            }}
          >
            Vision
          </Stack>
          <Stack
            width={{ md: "300px", xs: "200px" }}
            height={{ md: "300px", xs: "200px" }}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            onMouseEnter={() => setVisionData(false)}
            sx={{
              left: { md: "-20px" },
              top: { md: "0px", xs: "-40px" },
              border: "1px solid black",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#9C3FEB",
                color: "white",
                border: "none",
              },
            }}
          >
            Mission
          </Stack>
        </Stack>
        <Stack marginTop={"50px"}>
          <Typography textAlign={"center"}>
            {visionData ? goals[0] : goals[1]}
          </Typography>
        </Stack>
      </Stack>
      <Strength />
      <Stack
        gap={"20px"}
        margin={{ md: "40px 70px", xs: "30px" }}
        marginBottom={"100px"}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Future Initiatives
        </Typography>
        <Stack
          textAlign={"left"}
          gap={"20px"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          direction={{ md: "row" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {futurePlans.map((el, i) => {
            return (
              <Stack
                key={i}
                width={{ md: "30%" }}
                sx={{
                  cursor: "pointer",
                  boxShadow: "4px 2px 20px 2px rgba(0, 0, 0, 0.2)",
                  padding: "20px",
                  borderRadius: "5px",
                  gap: "5px",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
              >
                <Typography fontWeight={"bold"}>{`${i + 1}. ${
                  el.name
                }`}</Typography>
                <Typography>{el.data}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Box
          height={"15vh"}
          width={"60%"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${cape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
