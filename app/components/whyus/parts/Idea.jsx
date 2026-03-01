"use client";

import { Box, Stack, Typography } from "@mui/material";
import idea from "./assets/Idea.png";
import research from "./assets/Research.png";
import team from "./assets/Team.png";
import Image from "next/image";
import { useState } from "react";

import icon4 from "./assets/Artboard4.png";
import icon5 from "./assets/Artboard5.png";
import icon6 from "./assets/Artboard6.png";

export default function Idea() {
  const [showIdea, setShowIdea] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  return (
    <Stack alignItems={"center"} sx={{ marginBottom: "100px" }}>
      <Typography
        sx={{
          marginBottom: "50px",
        }}
        fontSize={{ md: "2.5rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        display={{ md: "flex", xs: "none" }}
      >
        Verticle Setup. Cotton Rich District. Compliances.
      </Typography>
      <Stack direction={"row"} gap="50px" display={{ md: "flex", xs: "none" }}>
        <Box
          position={"relative"}
          borderRadius={"100%"}
          backgroundColor={"#F95758"}
          padding={"10px"}
        >
          <Image
            src={icon4}
            alt=""
            width={150}
            height={150}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setTimeout(() => setShowIdea(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowIdea(false), 200)}
          />
          {showIdea && (
            <Stack
              position={"absolute"}
              width={"300px"}
              justifyContent={"center"}
              sx={{
                boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
                right: "120%",
                top: "40px",
              }}
              borderRadius={"15px"}
              padding={"20px 30px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"1.6rem"}
                textAlign={"center"}
              >
                Verticle Setup
              </Typography>
              <Typography textAlign={"center"} fontSize={"0.7rem"}>
                SKY Textiles operates a fully integrated vertical setup,
                streamlining production from raw material sourcing to finished
                products, enhancing efficiency, quality control, and
                sustainability.
              </Typography>
            </Stack>
          )}
        </Box>
        <Box
          position={"relative"}
          borderRadius={"100%"}
          backgroundColor={"#9C3FEB"}
          padding={"10px"}
        >
          <Image
            src={icon5}
            onMouseEnter={() => setTimeout(() => setShowResearch(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowResearch(false), 200)}
            alt=""
            style={{ cursor: "pointer" }}
            width={150}
            height={150}
          />
          {showResearch && (
            <Stack
              position={"absolute"}
              width={"300px"}
              justifyContent={"center"}
              sx={{
                boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
                left: "120%",
                top: "40px",
              }}
              borderRadius={"15px"}
              padding={"20px 30px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"1.6rem"}
                textAlign={"center"}
              >
                Cotton Rich
              </Typography>
              <Typography textAlign={"center"} fontSize={"0.7rem"}>
                Located in a cotton-rich district, SKY Textiles ensures access
                to high-quality raw materials, supporting local farmers and
                promoting sustainable agricultural practices within the
                community.
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
      <Stack display={{ md: "flex", xs: "none" }}>
        <Box
          position={"relative"}
          borderRadius={"100%"}
          backgroundColor={"#5A59FF"}
          padding={"25px"}
        >
          <Image
            src={icon6}
            style={{ cursor: "pointer" }}
            alt=""
            width={135}
            onMouseEnter={() => setTimeout(() => setShowTeam(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowTeam(false), 200)}
            height={135}
          />
          {showTeam && (
            <Stack
              position={"absolute"}
              width={"300px"}
              justifyContent={"center"}
              sx={{
                boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
                left: "120%",
                top: "40px",
              }}
              borderRadius={"15px"}
              padding={"20px 30px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"1.6rem"}
                textAlign={"center"}
              >
                Compliances
              </Typography>
              <Typography textAlign={"center"} fontSize={"0.7rem"}>
                SKY Textiles maintains rigorous compliance with international
                standards, ensuring ethical labor practices, environmental
                sustainability, and product safety to uphold our commitment to
                social responsibility and transparency.
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
      <Stack gap="20px" margin={"20px"} display={{ md: "none", xs: "flex" }}>
        <Typography fontWeight={"bold"} fontSize={"1rem"}>
          Vertical Setup
        </Typography>
        <Typography fontSize={"0.8rem"}>
          SKY Textiles maintains rigorous compliance with international
          standards, ensuring ethical labor practices, environmental
          sustainability, and product safety to uphold our commitment to social
          responsibility and transparency.
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"1rem"}>
          Cotton Rich
        </Typography>
        <Typography fontSize={"0.8rem"}>
          SKY Textiles maintains rigorous compliance with international
          standards, ensuring ethical labor practices, environmental
          sustainability, and product safety to uphold our commitment to social
          responsibility and transparency.
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"1rem"}>
          Compliances
        </Typography>
        <Typography fontSize={"0.8rem"}>
          SKY Textiles maintains rigorous compliance with international
          standards, ensuring ethical labor practices, environmental
          sustainability, and product safety to uphold our commitment to social
          responsibility and transparency.
        </Typography>
      </Stack>
    </Stack>
  );
}
