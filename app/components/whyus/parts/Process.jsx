"use client";

import { useGSAP } from "@gsap/react";
import { Box, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

const data = [
  "The Yarns Department at SKY Textiles specializes in producing high-quality yarns with a focus on sustainability and innovation. We utilize advanced spinning technology to ensure superior strength and durability while minimizing environmental impact. Committed to ethical sourcing, we prioritize the use of eco-friendly materials. Our diverse range of yarns supports various textile applications, catering to both local and international markets.",
  " The Fabrics Department at SKY Textiles is dedicated to producing high-quality, sustainable fabrics through an integrated vertical setup. We prioritize eco-friendly practices, ethical labor standards, and innovation in sustainable materials. Our Fiber-to-Fashion model ensures transparency and traceability, while community engagement initiatives empower local workers. By focusing on quality and sustainability, we lead in responsible textile production.",
  "The Garmenting Department at SKY Primwear focuses on creating high-quality, stylish apparel while prioritizing sustainable practices. We utilize advanced manufacturing techniques to enhance efficiency and minimize waste. Committed to ethical labor standards, we ensure fair wages and safe working conditions for our employees. Our emphasis on innovation and quality positions us as a leader in the garment industry.",
];

gsap.registerPlugin(useGSAP);

export default function Process() {
  const [currentData, setCurrentData] = useState(0);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to(".ball1", {
      x: "-=250",
      opacity: 0.8,
      scrollTrigger: {
        trigger: ".container",
        start: "top 70%",
        end: "top center",
        scrub: true,
        // markers: true,
      },
    }).to(".ball3", {
      x: "+=250",
      opacity: 0.8,
      scrollTrigger: {
        trigger: ".container",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
    });
  });
  return (
    <>
      <Stack
        display={{ md: "flex", xs: "none" }}
        margin={{ md: "100px 70px", xs: "50px 30px" }}
      >
        <Typography
          fontSize={"2.5rem"}
          fontWeight={"bold"}
          textAlign={"center"}
          margin={"50px 0"}
        >
          Our Process
        </Typography>
        <Stack
          className="container"
          alignItems={"center"}
          direction={{ md: "row" }}
          justifyContent={"center"}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            color={"white"}
            backgroundColor={"#F95658"}
            height={"300px"}
            width={"300px"}
            minWidth={"300px"}
            borderRadius={"50%"}
            className="ball1"
            position={"relative"}
            onMouseEnter={() => setCurrentData(0)}
            sx={{
              cursor: "pointer",
              left: { md: "300px" },
            }}
          >
            Yarns
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            minWidth={"300px"}
            color={"white"}
            backgroundColor={"#9C3FEB"}
            height={"300px"}
            width={"300px"}
            borderRadius={"50%"}
            className="ball2"
            onMouseEnter={() => setCurrentData(1)}
            sx={{
              cursor: "pointer",
            }}
          >
            Fabrics
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            color={"white"}
            backgroundColor={"#5A59FF"}
            height={"300px"}
            width={"300px"}
            minWidth={"300px"}
            borderRadius={"50%"}
            className="ball3"
            position={"relative"}
            onMouseEnter={() => setCurrentData(2)}
            sx={{
              cursor: "pointer",
              right: { md: "300px" },
            }}
          >
            Garments
          </Stack>
        </Stack>
        <Stack marginTop={"100px"}>
          <Typography>{data[currentData]}</Typography>
        </Stack>
      </Stack>
      <Stack
        display={{ md: "none", xs: "flex" }}
        margin={{ md: "100px 70px", xs: "50px 30px" }}
      >
        <Typography
          fontSize={"2.5rem"}
          fontWeight={"bold"}
          textAlign={"center"}
          margin={"50px 0 0 0"}
        >
          Our Process
        </Typography>
        <Stack
          alignItems={"center"}
          direction={{ md: "row" }}
          justifyContent={"center"}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            color={"white"}
            backgroundColor={"#F95658"}
            height={"300px"}
            width={"300px"}
            fontSize={"1.5rem"}
            minWidth={"300px"}
            borderRadius={"50%"}
            position={"relative"}
            sx={{
              opacity: "0.8",
              top: "100px",
              left: { md: "300px" },
            }}
          >
            Yarns
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            minWidth={"300px"}
            color={"white"}
            fontSize={"1.5rem"}
            backgroundColor={"#9C3FEB"}
            height={"300px"}
            width={"300px"}
            borderRadius={"50%"}
          >
            Textiles
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={"1.5rem"}
            backgroundColor={"#5A59FF"}
            height={"300px"}
            width={"300px"}
            minWidth={"300px"}
            borderRadius={"50%"}
            position={"relative"}
            sx={{
              opacity: "0.8",
              right: { md: "300px" },
              top: "-100px",
            }}
          >
            Garments
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
