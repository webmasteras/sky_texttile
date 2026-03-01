"use client";

import React from "react";
import Image from "next/image";
import yarn from "./assets/pinkYarn.png";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";

export default function Core() {
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [rotation, setRotation] = useState(0);
  const position = useMousePosition();
  //   console.log(rotation);
  useEffect(() => {
    if (isMouseIn) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate the angle of rotation
      let angle =
        Math.atan2(position.y - centerY, position.x - centerX) *
        (180 / Math.PI);
      angle = Math.ceil(angle);
      setRotation(angle * 2);
    }
  }, [position]);
  return (
    <>
      <Stack
        display={{ xs: "none", md: "flex" }}
        backgroundColor={"#FB5457"}
        margin={"80px 0 0 0"}
        position={"relative"}
      >
        <Typography
          fontSize={"3rem"}
          color={"white"}
          textAlign={"center"}
          fontWeight={"bold"}
          margin={"30px 0 0 0"}
        >
          Core Values
        </Typography>
        <Stack
          height={"70vh"}
          alignItems={"center"}
          justifyContent={"center"}
          className="yarnContainer"
          onMouseEnter={() => setIsMouseIn(true)}
          onMouseLeave={() => setIsMouseIn(false)}
          sx={{
            cursor: "pointer",
          }}
        >
          <Box>
            <Image
              src={yarn}
              alt=""
              width={245}
              height={400}
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center",
                transition: "transform 0.1s ease-out",
              }}
              className="yarn"
            />
          </Box>
        </Stack>
        <Stack>
          <Stack
            position={"absolute"}
            sx={{
              top: "20%",
              left: "15%",
              gap: "10px",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover div::after": {
                display: "none", // Hide the ::after element on hover
              },
            }}
          >
            <Box
              width={"80px"}
              height={"80px"}
              // backgroundColor={"white"}
              border={"1px solid white"}
              padding={"15px"}
              borderRadius={"100%"}
              margin={"0 auto"}
              sx={{
                position: "relative",
                cursor: "pointer",

                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "100px",
                  height: "0px",
                  top: "100%",
                  left: "100%",
                  border: "1px dashed white",
                  transform: "rotate(30deg)",
                },
              }}
            >
              <Image src={icon1} alt="" width={50} height={50} />
            </Box>
            <Typography color="white" textAlign={"center"}>
              Customer Focus
            </Typography>
          </Stack>
          <Stack
            position={"absolute"}
            sx={{
              top: "50%",
              left: "10%",
              gap: "10px",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover div::after": {
                display: "none", // Hide the ::after element on hover
              },
            }}
          >
            <Box
              width={"80px"}
              height={"80px"}
              border={"1px solid white"}
              // backgroundColor={"white"}
              padding={"15px"}
              borderRadius={"100%"}
              margin={"0 auto"}
              sx={{
                position: "relative",
                cursor: "pointer",

                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "100px",
                  height: "0px",
                  top: "50%",
                  left: "120%",
                  border: "1px dashed white",
                },
              }}
            >
              <Image src={icon2} alt="" width={50} height={50} />
            </Box>
            <Typography color="white" textAlign={"center"}>
              Team Work
            </Typography>
          </Stack>
          <Stack
            position={"absolute"}
            sx={{
              top: "80%",
              left: "15%",
              gap: "10px",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover div::after": {
                display: "none", // Hide the ::after element on hover
              },
            }}
          >
            <Box
              width={"80px"}
              height={"80px"}
              border={"1px solid white"}
              // backgroundColor={"white"}
              padding={"15px"}
              borderRadius={"100%"}
              margin={"0 auto"}
              sx={{
                position: "relative",
                cursor: "pointer",

                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "100px",
                  height: "0px",
                  bottom: "100%",
                  left: "100%",
                  border: "1px dashed white",
                  transform: "rotate(-30deg)",
                },
              }}
            >
              <Image src={icon3} alt="" width={50} height={50} />
            </Box>
            <Typography color="white" textAlign={"center"}>
              Accountablity
            </Typography>
          </Stack>
          <Stack
            position={"absolute"}
            sx={{
              top: "20%",
              right: "15%",
              gap: "10px",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover div::before": {
                display: "none", // Hide the ::after element on hover
              },
            }}
          >
            <Box
              width={"80px"}
              height={"80px"}
              border={"1px solid white"}
              // backgroundColor={"white"}
              padding={"15px"}
              borderRadius={"100%"}
              margin={"0 auto"}
              sx={{
                position: "relative",
                cursor: "pointer",

                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100px",
                  height: "0px",
                  top: "100%",
                  right: "100%",
                  border: "1px dashed white",
                  transform: "rotate(-30deg)",
                },
              }}
            >
              <Image src={icon4} alt="" width={50} height={50} />
            </Box>
            <Typography color="white" textAlign={"center"}>
              Integrity
            </Typography>
          </Stack>
          <Stack
            position={"absolute"}
            sx={{
              top: "50%",
              right: "10%",
              gap: "10px",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover div::before": {
                display: "none", // Hide the ::after element on hover
              },
            }}
          >
            <Box
              width={"80px"}
              border={"1px solid white"}
              height={"80px"}
              // backgroundColor={"white"}
              padding={"15px"}
              borderRadius={"100%"}
              margin={"0 auto"}
              sx={{
                position: "relative",
                cursor: "pointer",

                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100px",
                  height: "0px",
                  top: "50%",
                  right: "120%",
                  border: "1px dashed white",
                },
              }}
            >
              <Image src={icon5} alt="" width={50} height={50} />
            </Box>
            <Typography color="white" textAlign={"center"}>
              Respect
            </Typography>
          </Stack>
          <Stack
            position={"absolute"}
            sx={{
              top: "80%",
              right: "15%",
              gap: "10px",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover div::before": {
                display: "none", // Hide the ::after element on hover
              },
            }}
          >
            <Box
              width={"80px"}
              height={"80px"}
              border={"1px solid white"}
              // backgroundColor={"white"}
              padding={"15px"}
              borderRadius={"100%"}
              margin={"0 auto"}
              sx={{
                position: "relative",
                cursor: "pointer",

                "&::before": {
                  content: "''",
                  position: "absolute",
                  width: "100px",
                  height: "0px",
                  bottom: "100%",
                  right: "100%",
                  border: "1px dashed white",
                  transform: "rotate(30deg)",
                },
              }}
            >
              <Image src={icon6} alt="" width={50} height={50} />
            </Box>
            <Typography color="white" textAlign={"center"}>
              Passion for Excellence
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        position={"relative"}
        top={"-2px"}
        height={{ md: "100px" }}
        backgroundColor={"#FB5457"}
        width={"100%"}
        margin={{ md: "0 0 100px 0", xs: "0" }}
      >
        <Stack
          display={{ md: "none" }}
          color={"white"}
          margin={{ smm: "70px", xs: "30px" }}
          gap={"40px"}
        >
          <Typography
            fontSize={{ smm: "2rem", xs: "1.2rem" }}
            textAlign={"center"}
          >
            Core Values
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            gap={{ smm: "50px", xs: "20px" }}
          >
            <Stack alignItems={"center"}>
              <Stack
                width={"80px"}
                height={"80px"}
                border={"1px solid white"}
                // backgroundColor={"white"}
                padding={"15px"}
                borderRadius={"100%"}
                sx={{}}
              >
                <Image src={icon1} alt="" width={50} height={50} />
              </Stack>
              <Typography textAlign={"center"} fontSize={"0.8rem"}>
                Customer
                <br />
                Focus
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Stack
                width={"80px"}
                height={"80px"}
                border={"1px solid white"}
                // backgroundColor={"white"}
                padding={"15px"}
                borderRadius={"100%"}
                sx={{}}
              >
                <Image src={icon2} alt="" width={50} height={50} />
              </Stack>
              <Typography textAlign={"center"} fontSize={"0.8rem"}>
                Team Work
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Stack
                width={"80px"}
                height={"80px"}
                border={"1px solid white"}
                // backgroundColor={"white"}
                padding={"15px"}
                borderRadius={"100%"}
                sx={{}}
              >
                <Image src={icon3} alt="" width={50} height={50} />
              </Stack>
              <Typography textAlign={"center"} fontSize={"0.8rem"}>
                Accountablity
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Stack
                width={"80px"}
                height={"80px"}
                border={"1px solid white"}
                // backgroundColor={"white"}
                padding={"15px"}
                borderRadius={"100%"}
                sx={{}}
              >
                <Image src={icon4} alt="" width={50} height={50} />
              </Stack>
              <Typography textAlign={"center"} fontSize={"0.8rem"}>
                Integrity
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Stack
                width={"80px"}
                height={"80px"}
                border={"1px solid white"}
                // backgroundColor={"white"}
                padding={"15px"}
                borderRadius={"100%"}
                sx={{}}
              >
                <Image src={icon5} alt="" width={50} height={50} />
              </Stack>
              <Typography textAlign={"center"} fontSize={"0.8rem"}>
                Respect
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Stack
                width={"80px"}
                height={"80px"}
                border={"1px solid white"}
                // backgroundColor={"white"}
                padding={"15px"}
                borderRadius={"100%"}
                sx={{}}
              >
                <Image src={icon6} alt="" width={50} height={50} />
              </Stack>
              <Typography textAlign={"center"} fontSize={"0.8rem"}>
                Passion
                <br />
                for Excellence
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
