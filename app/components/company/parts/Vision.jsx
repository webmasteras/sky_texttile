"use client";

import { useGSAP } from "@gsap/react";
import { Box, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import icon1 from "./assets/redIcon1.svg";
import icon2 from "./assets/redIcon2.svg";
import icon3 from "./assets/redIcon3.svg";
import Image from "next/image";

const data = [
  {
    id: 0,
    icon: icon1,
    head: "Quality",
    body: "Delivering uncompromised quality across yarns, textile fabrics, and garments, ensuring excellence at every stage of production.",
    alt: "Quality textile products",
  },
  {
    id: 1,
    icon: icon2,
    head: "Service",
    body: "Delivering end-to-end textile solutions, from yarn to finished garments, with a commitment to quality, innovation, and customer satisfaction.",
    alt: "Apparel production",
  },
  {
    id: 2,
    icon: icon3,
    head: "Transparency",
    body: "Building trust through complete transparency in every step of our process, ensuring clarity and confidence for our customers.",
    alt: "Textile market",
  },
];

gsap.registerPlugin(useGSAP);

export default function Vision() {
  useGSAP(() => {
    const height = window.innerHeight - 50;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to(".titles", {
      scrollTrigger: {
        trigger: ".titles",
        start: "top 15%",
        end: `+=${2 * height}`,
        anticipatePin: 0.1,
        inertia: false,
        pin: true,
        pinSpacing: true,
        scrub: true,
        // markers: true,
      },
    })
      .to(".visionHead", {
        color: "#B0B0B0",
        scrollTrigger: {
          trigger: ".mission",
          start: "top center",
          end: `+=100`,
          scrub: true,
          //   markers: true,
        },
      })
      .to(".missionHead", {
        color: "#9C38F1",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".mission",
          start: "top center",
          toggleActions: "play reverse play reset",
          // end: `+=100`,
          // scrub: true,
          // markers: true,
        },
      })
      .to(".missionHead", {
        color: "#B0B0B0",
        scrollTrigger: {
          trigger: ".values",
          start: "top center",
          end: `+=100`,
          scrub: true,
          //   markers: true,
        },
      })
      .to(".valuesHead", {
        color: "#5A57FF",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".values",
          start: "top center",
          toggleActions: "play reverse play reset",
          // end: `+=100`,
          // scrub: true,
          //   markers: true,
        },
      });
  });
  return (
    <Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        margin={{ md: "0 10vw", xs: "0 30px" }}
      >
        <Stack
          display={{ md: "flex", xs: "none" }}
          color={"#B0B0B0"}
          className="titles"
          height={{ md: "50vh" }}
        >
          <Typography
            color={"#FB5457"}
            fontSize={{ lg: "3.5rem", md: "2.5rem" }}
            fontWeight={"bold"}
            className="visionHead"
          >
            Yarns
          </Typography>
          <Typography
            fontSize={{ lg: "3.5rem", md: "2.5rem" }}
            fontWeight={"bold"}
            className="missionHead"
          >
            Fabrics
          </Typography>
          <Typography
            fontSize={{ lg: "3.5rem", md: "2.5rem" }}
            fontWeight={"bold"}
            className="valuesHead"
          >
            Garment
          </Typography>
        </Stack>
        <Stack width={{ md: "60%" }}>
          <Box height={{ md: "90vh" }}>
            <Typography
              display={{ md: "none" }}
              fontWeight={"bold"}
              marginTop={"20px"}
              color={"#FB5457"}
              fontSize={"3rem"}
            >
              Yarns
            </Typography>
            <Typography
              fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
              className="vision"
            >
              Delivering uncompromised quality across yarns, textile fabrics,
              and garments, we are proud to be among the best yarn suppliers,
              ensuring excellence at every stage of production
            </Typography>
          </Box>
          <Box height={{ md: "90vh" }}>
            <Typography
              display={{ md: "none" }}
              fontWeight={"bold"}
              marginTop={"20px"}
              color={"#9C38F1"}
              fontSize={"3rem"}
            >
              Fabrics
            </Typography>
            <Typography
              fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
              className="mission"
            >
              Where comfort meets innovation, creating a seamless blend of
              flexibility and style, we proudly offer the best fabrics in
              Gujarat.
            </Typography>
          </Box>
          <Box height={{ md: "90vh" }}>
            <Typography
              display={{ md: "none" }}
              fontWeight={"bold"}
              color={"#5A57FF"}
              marginTop={"20px"}
              fontSize={"3rem"}
            >
              Garment
            </Typography>
            <Typography
              fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
              className="values"
            >
              Crafting excellence with every stitch, turning vision into vibrant
              fashion.
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        margin={{ lg: "0 70px", xs: "30px" }}
        gap={"20px"}
        justifyContent={"space-between"}
      >
        {data.map((el) => {
          return (
            <Stack
              key={el.id}
              width={{ md: "30%" }}
              height={{ md: "40vh" }}
              borderRadius={"10px"}
              gap={"10px"}
              sx={{
                cursor: "pointer",
                padding: { lg: "50px", xs: "30px 30px" },
                backgroundColor: { md: "white", xs: "#f9f9f9" },
                "&:hover": {
                  backgroundColor: "#F9F9F9",
                },
              }}
            >
              <Image width={50} height={50} src={el.icon} alt={el.alt} />
              <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
                {el.head}
              </Typography>
              <Typography>{el.body}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
