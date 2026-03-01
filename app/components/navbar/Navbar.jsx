"use client";

import { Box, Button, Fade, Slide, Stack, Typography } from "@mui/material";
import logo from "./parts/assets/logo.png";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineClose } from "react-icons/io";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FaPlus } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
import menu from "./parts/assets/menu.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
    id: 5,
    name: "Blog",
    route: "/blog",
    subRoutes: [],
  },
  {
    id: 6,
    name: "Get in Touch",
    route: "/contact-us",
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

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSubRoutes, setShowSubRoutes] = useState(false);
  const [subRoutes, setSubRoutes] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const [expanded, setExpanded] = useState("");
  const containerRef = useRef(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });

  function handleShowSubRoutes(el) {
    if (el.subRoutes.length > 0) {
      setShowSubRoutes(true);
      setSubRoutes(el.subRoutes);
    } else {
      setShowSubRoutes(false);
    }
  }

  return (
    <>
      <Box
        display={{ xs: "none", lg: "flex" }}
        direction={"row"}
        width={"100%"}
        height={"80px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={"15px 0"}
        position={"fixed"}
        backgroundColor={"white"}
        zIndex={"100"}
        top={"0"}
      >
        <Box width={"10vw"} height={"100%"} position={"relative"}>
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
        <Box sx={{ display: "flex" }}>
          {navData.map((el, i) => {
            return (
              <Stack key={el.id}>
                <Link
                  className="nav-link"
                  href={el.route}
                  onMouseEnter={() => handleShowSubRoutes(el)}
                >
                  <Typography
                    fontSize={"1rem"}
                    color={pathname.startsWith(el.route) ? "#FB5457" : "black"}
                    sx={{
                      "&:hover": {
                        color: "#FB5457",
                      },
                    }}
                  >
                    {el.name}
                  </Typography>
                </Link>

                {/* <Fade in={showSubRoutes} easing="enter"> */}
                {showSubRoutes && (
                  <Stack
                    className="subRoute"
                    direction={"row"}
                    position={"absolute"}
                    backgroundColor={"white"}
                    padding={"0 20px"}
                    sx={{
                      top: "100%",
                      left: "0",
                      width: "100%",
                      justifyContent: "center",
                      gap: "20px",
                      borderTop: "1px solid black",
                      borderBottom: "1px solid black",
                    }}
                    onMouseLeave={() => setShowSubRoutes(false)}
                  >
                    {subRoutes.map((element, i) => {
                      return (
                        <Stack
                          key={element.id}
                          backgroundColor={element.color}
                          onClick={() => router.push(element.route)}
                          width={`${100 / subRoutes.length}%`}
                          maxWidth={"30%"}
                          sx={{
                            margin: "20px 0",
                            padding: "20px 30px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            boxShadow: "inset 0 0 0 0 rgba(255, 255, 255, 0.4)",
                            transition: "ease-out 0.5s",
                            "&: hover": {
                              boxShadow:
                                "inset 0 -300px 0 0 rgba(255, 255, 255, 0.9)",
                            },
                          }}
                        >
                          <Typography fontSize={"1.9rem"} fontWeight={"bold"}>
                            {element.head}
                          </Typography>
                          <Typography>{element.data}</Typography>
                        </Stack>
                      );
                    })}
                  </Stack>
                )}
              </Stack>
            );
          })}
        </Box>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onClick={() => router.push("/contact-us")}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>Contact</span>
            <span style={getTrasformStyles(isHovered)}>Contact</span>
          </span>
        </button>
        {!showSubRoutes && (
          <hr
            style={{
              width: "100%",
              outline: "none",
              border: "none",
              backgroundColor: "black",
              height: "1px",
              position: "absolute",
              top: "100%",
              left: "0",
            }}
          />
        )}
      </Box>
      <Box
        display={{ xs: "flex", lg: "none" }}
        direction={"row"}
        width={"100%"}
        height={"80px"}
        justifyContent={"space-between"}
        ref={containerRef}
        alignItems={"center"}
        padding={"15px 20px"}
        position={"fixed"}
        backgroundColor={"white"}
        zIndex={100}
        top={"0"}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Box
          onClick={() => {
            router.push("/");
          }}
          width={"20vw"}
          height={"100%"}
          position={"relative"}
        >
          <Image
            src={logo}
            alt="Sky Textiles"
            fill
            objectFit="contain"
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Box zIndex={showNav ? "0" : "200"}>
          <Image
            src={menu}
            alt=""
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
            onClick={() => setShowNav(true)}
          />
        </Box>
        <Stack
          width={"100vw"}
          height={"100vh"}
          display={showNav ? "flex" : "none"}
          position={showNav ? "fixed" : "absolute"}
          top={0}
          left={0}
          alignItems={"end"}
          backgroundColor={
            showNav ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)"
          }
        >
          <Stack
            // backgroundColor={"#fff"}
            width={{ smm: "50%", xs: "80%" }}
            height={"100vh"}
          >
            <Slide
              direction="left"
              in={showNav}
              container={containerRef.current}
            >
              <Stack
                // justifyContent={""}
                backgroundColor={"white"}
                padding={"20px"}
                sx={{
                  width: "100%",
                  height: "100vh",
                  zIndex: "0",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  margin={"5px 5px"}
                  marginBottom={"30px"}
                >
                  <Typography fontSize={"1.2rem"}>Menu</Typography>
                  <Stack
                    justifyContent={"space-between"}
                    width={"30px"}
                    height={"30px"}
                    onClick={() => {
                      setShowNav(false);
                    }}
                  >
                    <Box
                      width={"30px"}
                      height={"2px"}
                      backgroundColor={"#333"}
                      sx={{
                        translate: "0 14px",
                        transform: `rotate(45deg)`,
                      }}
                    ></Box>
                    <Box
                      backgroundColor={"#333"}
                      width={"30px"}
                      height={"2px"}
                      sx={{
                        translate: "0 -14px",
                        transform: `rotate(-45deg)`,
                      }}
                    ></Box>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent={"space-between"}
                  height={"100%"}
                  overflow={"scroll"}
                >
                  <Stack>
                    {navData.map((el, i) => {
                      return (
                        <Accordion
                          expanded={
                            el.subRoutes.length > 0 &&
                            expanded === `panel${i + 1}`
                          }
                          onChange={handleChange(`panel${i + 1}`)}
                        >
                          <AccordionSummary
                            length={el.subRoutes.length}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                          >
                            <Link
                              style={{ textDecoration: "none", color: "black" }}
                              href={el.route}
                            >
                              <Typography fontWeight={"bold"}>
                                {el.name}
                              </Typography>
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            {el.subRoutes.map((d, i) => {
                              return (
                                <Stack
                                  key={d.id}
                                  backgroundColor={d.color}
                                  sx={{
                                    margin: "10px 0",
                                    padding: "10px 15px",
                                    borderRadius: "10px",
                                  }}
                                  onClick={() => router.push(d.route)}
                                >
                                  <Typography
                                    fontSize={"1.2rem"}
                                    fontWeight={"bold"}
                                  >
                                    {d.head}
                                  </Typography>
                                  <Typography fontSize={"1rem"}>
                                    {d.data}
                                  </Typography>
                                </Stack>
                              );
                            })}
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </Stack>
                  <Stack>
                    <Typography
                      fontSize={"0.8rem"}
                      color={"#FB5457"}
                      marginBottom={"10px"}
                    >
                      info@skytextiles.in
                    </Typography>
                    <Typography fontSize={"0.8rem"} color={"#2d2d2d"}>
                      India
                    </Typography>
                    <Typography fontSize={"0.8rem"}>+ 91-4542369874</Typography>
                    <button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        outline: "none",
                        color: "white",
                        width: "fit-content",
                        padding: "5px 30px",
                        borderRadius: "2px",
                        marginTop: "10px",
                      }}
                      onClick={() => router.push("/contact-us")}
                    >
                      Contact
                    </button>
                  </Stack>
                </Stack>
              </Stack>
            </Slide>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
