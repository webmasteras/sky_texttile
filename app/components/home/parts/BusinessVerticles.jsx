"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import yarnImage from "./assets/Yarn.gif";
// import fabricImage from "./assets/Fabric.gif";
// import garmentImage from "./assets/Garment.gif";
import { useRef, useState } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import { FaCircle } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

export default function BusinessVerticles({ mapRef }) {
  const container = useRef(null);
  const [tl] = useState(gsap.timeline({ delay: 0.8 }));
  console.log(mapRef.current);

  useGSAP(() => {
    const innerHeight = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger);

    // let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    let tl4 = gsap.timeline();

    tl.to(".imageContainer", {
      scrollTrigger: {
        trigger: ".imageContainer",
        start: "top 15%",
        endTrigger: ".mapContainer",
        end: "top bottom",
        anticipatePin: 0.1,
        inertia: false,
        pin: true,
        scrub: true,
        // markers: true,
      },
    })
      .to(".yarns", {
        scrollTrigger: {
          trigger: ".yarns",
          start: "top 15%",
          endTrigger: ".fabricsContainer",
          end: "top center",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      })
      .to(".fabrics, .garments", {
        y: 150,
        opacity: 0,
        scrollTrigger: {
          trigger: ".fabrics",
          start: "top center",
          end: "+=50",
          scrub: true,
          // markers: true,
        },
      })
      .to(".yarnsText", {
        x: 70,
        stagger: 0.5,
        display: "block",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fabrics",
          start: "top 30%",
          endTrigger: ".fabricsContainer",
          end: "top 70%",
          scrub: true,
          // markers: true,
        },
      })
      .to(".fabricsContainer", {
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 45%",
          endTrigger: ".garmentsContainer",
          end: "top center",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      })
      .to(".fabricImage", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 65%",
          end: "+=10",
          scrub: true,
        },
      })
      .to(".fabricsText", {
        x: 70,
        stagger: 0.5,
        display: "block",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fabricsContainer",
          start: "center 45%",
          end: "+=150",
          scrub: true,
          // markers: true,
        },
      })
      .to(".garmentsContainer", {
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 45%",
          endTrigger: ".imageContainer",
          end: "top bottom",
          anticipatePin: 0.1,
          inertia: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      })
      .to(".garmentImage", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 65%",
          end: "+=10",
          scrub: true,
        },
      })
      .to(".garmentsText", {
        x: 70,
        stagger: 0.5,
        display: "block",
        opacity: 1,
        scrollTrigger: {
          trigger: ".garmentsContainer",
          start: "center 45%",
          end: "+=150",
          scrub: true,
          // markers: true,
        },
      });

    // tl4.to(".imageContainer", {
    //   scrollTrigger: {
    //     trigger: ".imageContainer",
    //     start: "top 15%",
    //     endTrigger: mapRef.current,
    //     end: "top bottom",
    //     anticipatePin: 0.1,
    //     inertia: false,
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: true,
    //     // markers: true,
    //   },
    // });
  });

  return (
    <Stack
      margin={{ lg: "50px 150px", md: "50px", smm: "30px", xs: "10px" }}
      ref={container}
    >
      <Typography
        color="#D88684"
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        paddingBottom={"50px"}
      >
        Business Verticles
      </Typography>
      <Stack direction={"row"} height={"100vh"} gap={"50px"}>
        <Stack>
          <Stack className="yarns" gap={{ md: "20px" }}>
            <Stack
              marginBottom={"10px"}
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
            >
              <Stack
                sx={{
                  border: "1.5px solid black",
                  width: "60px",
                  height: "60px",
                  borderRadius: "100%",
                  padding: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    backgroundColor: "#FB5457",
                  }}
                ></Box>
              </Stack>
              <Typography
                fontSize={{
                  lg: "4.5rem",
                  md: "3rem",
                  smm: "2.5rem",
                  xs: "2rem",
                }}
                fontWeight={"bold"}
              >
                Yarns
              </Typography>
            </Stack>
            <Stack
              width={{ md: "25vw", sm: "75vw", xs: "65vw" }}
              sx={{ opacity: 0, display: "none" }}
              className="yarnsText"
            >
              <Stack direction={"row"} gap={"10px"} alignItems={"baseline"}>
                <Stack justifyContent={"start"}>
                  <FaCircle
                    color="#FB5457"
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  High-quality natural and synthetic yarns
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
                <Stack>
                  <FaCircle
                    color="#FB5457"
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  Ensures strength and longevity
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
                <Stack>
                  <FaCircle
                    color="#FB5457"
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  Rigorous testing for quality
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
                <Stack>
                  <FaCircle
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                    color="#FB5457"
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  Reliable foundation for fabrics
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
                <Stack>
                  <FaCircle
                    style={{ width: "10px", height: "10px" }}
                    color="#FB5457"
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  Available in various counts
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
                <Stack>
                  <FaCircle
                    color="#FB5457"
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  Versatile for diverse applications
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
                <Stack>
                  <FaCircle
                    color="#FB5457"
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </Stack>
                <Typography
                  fontSize={{
                    lg: "1.2rem",
                    md: "1rem",
                    smm: "0.9rem",
                    xs: "0.7rem",
                  }}
                >
                  Best yarn suppliers
                </Typography>
              </Stack>
              <Box display={{ md: "none" }}>
                <Image width={200} height={200} src="/assets/Yarn.gif" alt="Yarn" />
              </Box>
            </Stack>
          </Stack>

          <Stack className="fabrics">
            <Stack
              marginBottom={"10px"}
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
            >
              <Stack
                sx={{
                  border: "1.5px solid black",
                  width: "60px",
                  height: "60px",
                  borderRadius: "100%",
                  padding: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    backgroundColor: "#5857F9",
                  }}
                ></Box>
              </Stack>
              <Typography
                fontSize={{
                  lg: "4.5rem",
                  md: "3rem",
                  smm: "2.5rem",
                  xs: "2rem",
                }}
                fontWeight={"bold"}
              >
                Fabrics
              </Typography>
            </Stack>
          </Stack>
          <Stack className="garments">
            <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
              <Stack
                sx={{
                  border: "1.5px solid black",
                  width: "60px",
                  height: "60px",
                  borderRadius: "100%",
                  padding: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    backgroundColor: "#9C34F0",
                  }}
                ></Box>
              </Stack>
              <Typography
                fontSize={{
                  lg: "4.5rem",
                  md: "3rem",
                  smm: "2.5rem",
                  xs: "2rem",
                }}
                fontWeight={"bold"}
              >
                Garments
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{ lg: "40vw", md: "40vw" }}
          display={{ xs: "none", md: "flex" }}
          height={"60vh"}
          position={"relative"}
          className="imageContainer"
        >
          <Image
            src="/assets/Yarn.gif"
            alt=""
            fill
            objectPosition="top"
            objectFit="contain"
            className="yarnImage"
          />
          <Image
            src="/assets/Fabric.gif"
            alt=""
            fill
            objectPosition="top"
            objectFit="contain"
            style={{ opacity: 0 }}
            className="fabricImage"
          />
          <Image
            src="/assets/Garment.gif"
            alt=""
            fill
            objectPosition="top"
            objectFit="contain"
            style={{ opacity: 0 }}
            className="garmentImage"
          />
        </Stack>
      </Stack>

      <Stack
        className="fabricsContainer"
        height={{ md: "100vh", xs: "120vh" }}
        justifyContent={"center"}
      >
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <Stack
            sx={{
              border: "1.5px solid black",
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                backgroundColor: "#5857F9",
              }}
            ></Box>
          </Stack>
          <Typography
            fontSize={{
              lg: "4.5rem",
              md: "3rem",
              smm: "2.5rem",
              xs: "2rem",
            }}
            fontWeight={"bold"}
          >
            Fabrics
          </Typography>
        </Stack>
        <Stack
          width={{ md: "25vw", xs: "70vw", xs: "60vw" }}
          fontSize={{ lg: "1.2rem", md: "1rem", smm: "0.9rem", xs: "0.7rem" }}
          sx={{ opacity: 0 }}
          className="fabricsText"
        >
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>
            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Advanced technology for softness
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Excellent breathability and comfort
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Ideal for casual, athletic wear{" "}
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Variety of textures and patterns{" "}
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Best Multiple fabric blend
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Best Fabrics in Gujarat
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#5857F9"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Durable and stylish fabrics
            </Typography>
          </Stack>
          <Box display={{ md: "none" }}>
            <Image width={200} height={200} src="/assets/Fabric.gif" alt="Fabric" />
          </Box>
        </Stack>
      </Stack>
      <Stack
        className="garmentsContainer"
        height={{ md: "100vh", xs: "120vh" }}
        justifyContent={"center"}
      >
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <Stack
            sx={{
              border: "1.5px solid black",
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                backgroundColor: "#9C34F0",
              }}
            ></Box>
          </Stack>
          <Typography
            fontSize={{
              lg: "4.5rem",
              md: "3rem",
              smm: "2.5rem",
              xs: "2rem",
            }}
            fontWeight={"bold"}
          >
            Garments
          </Typography>
        </Stack>
        <Stack
          width={{ md: "25vw", xs: "70vw", xs: "60vw" }}
          fontSize={{ lg: "1.2rem", md: "1rem", smm: "0.9rem", xs: "0.7rem" }}
          sx={{ opacity: 0 }}
          className="garmentsText"
        >
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Precision and quality focused
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Global standards in apparel
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Best T-shirt manufacturers
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Durable, comfortable, and stylish
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Best Shirt manufacturers
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Casual, formal, and industrial wear
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Wide variety of fashion needs
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"baseline"} gap={"10px"}>
            <Stack>
              <FaCircle
                color="#9C34F0"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </Stack>

            <Typography
              fontSize={{
                lg: "1.2rem",
                md: "1rem",
                smm: "0.9rem",
                xs: "0.7rem",
              }}
            >
              Best Garments manufacturers
            </Typography>
          </Stack>
          <Box display={{ md: "none" }}>
            <Image width={200} height={200} src="/assets/Garment.gif" alt="Garments" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
