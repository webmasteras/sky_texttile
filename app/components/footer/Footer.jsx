"use client";

import { Box, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { FaPlus } from "react-icons/fa6";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import logo from "./parts/assets/logo.png";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <FaPlus
        display={props.length === 0 && "none"}
        sx={{ fontSize: "0.9rem" }}
        color={"black"}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const navData = [
  {
    id: 0,
    name: "Company Profile",
    route: "/company-profile",
    subRoutes: [
      {
        id: 0,
        head: "Sky Textiles.",
        data: "Fabrics & Processing",
        color: "#FFDFE6",
        route: "/company-profile/sky-textiles",
      },
      {
        id: 1,
        head: "SKY Primwear.",
        data: "Garmenting & Finishing",
        color: "#DFDFFD",
        route: "/company-profile/sky-primware",
      },
      {
        id: 2,
        head: "SKY International.",
        data: "D2C and B2B Trading",
        color: "#DFD5E6",
        route: "/company-profile/sky-international",
      },
    ],
  },
  {
    id: 1,
    name: "Infrastructure",
    route: "/infrastructure",
    subRoutes: [],
  },
  {
    id: 2,
    name: "Product Range",
    route: "/products",
    subRoutes: [
      {
        id: 0,
        head: "Yarns",
        data: "Foundation for textile creation",
        color: "#FFDFE6",
        route: "/products/yarns",
      },
      {
        id: 1,
        head: "Fabrics",
        data: "Versatile textiles for design",
        color: "#DFDFFD",
        route: "/products/fabrics",
      },
      {
        id: 2,
        head: "Garments",
        data: "Clothing for fashion",
        color: "#DFD5E6",
        route: "/products/garments",
      },
    ],
  },
  {
    id: 3,
    name: "Sustainability",
    route: "/sustainability",
    subRoutes: [
      {
        id: 0,
        head: "Social Responsiblity",
        data: "Commitment to community welfare",
        color: "#FFDFE6",
        route: "/sustainability/csr",
      },
      {
        id: 1,
        head: "Events",
        data: "Empowering growth, celebrating milestones, and shaping the future.",
        color: "#DFD5E6",
        route: "/sustainability/event",
      },
      {
        id: 2,
        head: "Why Us",
        data: "Quality, trust, and innovation",
        color: "#DFDFFD",
        route: "/sustainability/why-us",
      },
      {
        id: 3,
        head: "Certifications",
        data: "Assurance of quality standards",
        color: "#DFD5E6",
        route: "/sustainability/certifications",
      },
    ],
  },
  {
    id: 4,
    name: "Clients",
    route: "/clients",
    subRoutes: [],
  },
  {
    id: 6,
    name: "Get in Touch",
    route: "/contact-us/enquiry",
    subRoutes: [
      {
        id: 0,
        head: "Enquiry",
        data: "Your questions, our answers",
        color: "#FFDFE6",
        route: "/contact-us/enquiry",
      },
      {
        id: 1,
        head: "Careers",
        data: "Opportunities for professional growth",
        color: "#DFDFFD",
        route: "/contact-us/careers",
      },
    ],
  },
];

export default function Footer() {
  const router = useRouter();
  const [expanded, setExpanded] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "https://skytextiles.in/api/v1/newsletter/create",
        { email }
      );

      if (response.data.statusCode === 200) {
        alert("Newsletter subscribed successfully!");
        setEmail("");
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Stack display={{ xs: "none", lg: "flex" }} gap={"30px"}>
        <Stack
          margin={"50px"}
          direction={"row"}
          justifyContent={"space-evenly"}
          gap={"100px"}
        >
          <Stack gap={"10px"}>
            <Typography fontWeight={"bold"}>Links</Typography>
            <Stack color={"#393737"} gap={"6px"}>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/company-profile")}
              >
                Company Profile
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/infrastructure")}
              >
                Infrastructure
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/products")}
              >
                Product Range
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/sustainability")}
              >
                Sustainability
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/clients")}
              >
                Clients
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/contact-us/enquiry")}
              >
                Get In Touch
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={"10px"}>
            <Typography fontWeight={"bold"}>Products</Typography>
            <Stack color={"#393737"} gap={"6px"}>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/products/yarns")}
              >
                Yarns
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/products/fabrics")}
              >
                Fabrics
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/products/garments")}
              >
                Garments
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={"10px"}>
            <Typography fontWeight={"bold"}>Company</Typography>
            <Stack color={"#393737"} gap={"6px"}>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/company-profile/sky-textiles")}
              >
                Sky Textile
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() => router.push("/company-profile/sky-primware")}
              >
                Sky Primware
              </Typography>
              <Typography
                sx={{ cursor: "pointer", "&:hover": { color: "#FB5457" } }}
                onClick={() =>
                  router.push("/company-profile/sky-international")
                }
              >
                Sky International
              </Typography>
            </Stack>
          </Stack>
          <Stack
            backgroundColor={"#F9F9F9"}
            gap={"10px"}
            padding={"40px"}
            position={"relative"}
            sx={{ top: "-40px", zIndex: "0" }}
            width={"30%"}
          >
            <Typography fontWeight={"bold"}>Subscribe</Typography>
            <Stack direction={"row"}>
              <TextField
                label="Email address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                style={{
                  position: "relative",
                  left: "-5px",
                  backgroundColor: "#D88684",
                  color: "white",
                  border: "none",
                  borderRadius: "0 5px 5px 0",
                  outline: "none",
                  padding: "0 20px",
                  cursor: "pointer",
                }}
                onClick={handleSubscribe}
              >
                <FaArrowRight />
              </button>
            </Stack>
            <Typography color={"#2E2D2D"} fontSize={"0.8rem"}>
              At Sky Textiles, we focus on producing high-quality textile
              products that meet international standards.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          padding={"40px 0"}
          direction={"row"}
          justifyContent={"space-around"}
          borderTop={"1px black solid"}
        >
          <Image src={logo} alt="Sky Textiles" height={50} width={100} />
          <Stack direction={"row"} gap={"20px"}>
            <Typography>Terms</Typography>
            <Typography>Privacy</Typography>
            <Typography>Contacts</Typography>
          </Stack>
          <Stack direction={"row"} gap={"10px"}>
            <a
              style={{ color: "black" }}
              href="https://www.linkedin.com/company/skytextilesindia"
              target="blank"
            >
              <Stack
                borderRadius={"100%"}
                sx={{
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FaLinkedinIn />
              </Stack>
            </a>
            <a
              href="https://www.facebook.com/Skytextilesinda"
              style={{ color: "black" }}
              target="blank"
            >
              <Stack
                borderRadius={"100%"}
                sx={{
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FaFacebookF />
              </Stack>
            </a>
            <a
              href="https://www.instagram.com/sky_textiles/"
              style={{ color: "black" }}
              target="blank"
            >
              <Stack
                borderRadius={"100%"}
                sx={{
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <AiFillInstagram />
              </Stack>
            </a>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        display={{ xs: "flex", lg: "none" }}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={"white"}
        marginTop={"50px"}
      >
        <Box width={"100px"} height={"100px"} position={"relative"}>
          <Image
            src={logo}
            alt="Sky Textiles"
            fill
            objectFit="contain"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          />
        </Box>
        <Stack direction={"row"} margin={"0 0 20px 0"} gap={"10px"}>
          <Stack
            sx={{
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaLinkedinIn />
          </Stack>
          <Stack
            sx={{
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFacebookF />
          </Stack>
          <Stack
            sx={{
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiFillInstagram />
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
          }}
        >
          {navData.map((el, i) => {
            return (
              <Accordion
                key={el.id}
                expanded={
                  el.subRoutes.length > 0 && expanded === `panel${i + 1}`
                }
                onChange={handleChange(`panel${i + 1}`)}
              >
                <AccordionSummary
                  length={el.subRoutes.length}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Link
                    href={el.route}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography fontWeight={"bold"}>{el.name}</Typography>
                  </Link>
                </AccordionSummary>
                <AccordionDetails>
                  {el.subRoutes.map((d) => {
                    return (
                      <Typography key={d.id} onClick={() => router.push(d.route)}>
                        {d?.head}
                      </Typography>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
