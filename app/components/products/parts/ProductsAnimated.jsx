"use client";
import { Stack } from "@mui/system";
import yarns from "./assets/yarns.jpg";
import fabric from "./assets/fabric.jpg";
import garments from "./assets/garments.jpg";
import { Typography } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

export default function ProductAnimated() {
  useGSAP(() => {
    const height = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.to(".images", {
      scrollTrigger: {
        trigger: ".images",
        start: "top 25%",
        endTrigger: ".garments",
        end: "top 25%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    })
      .fromTo(
        ".yarnsImage",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".fabrics",
            start: "top center",
            end: `+=100`,
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".fabricsImage",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".fabrics",
            endTrigger: ".garments",
            end: "top center",
            start: "top center",
            toggleActions: "play reverse play reset",
            // end: `+=100`,
            // scrub: true,
            // markers: true,
          },
        }
      )
      .to(".fabricsImage", {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".garments",
          start: "top center",
          toggleActions: "play reverse play reset",
          // end: `+=100`,
          // scrub: true,
          // markers: true,
        },
      })
      .fromTo(
        ".garmentsImage",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".garments",
            start: "top center",
            toggleActions: "play reverse play reset",
            // end: `+=100`,
            // scrub: true,
            // markers: true,
          },
        }
      );
  });
  return (
    <>
      <Stack
        margin={{ md: "0 70px 0 70px ", xs: "30px" }}
        justifyContent={"space-between"}
        direction={"row"}
        display={{ md: "flex", xs: "none" }}
      >
        <Stack width={"55%"} className="content">
          <Stack
            height={"90vh"}
            className="yarns"
            sx={{
              scrollSnapAlign: "start",
            }}
          >
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              Yarn
            </Typography>
            <Typography
              fontSize={{ md: "1.2rem", xs: "0.8rem" }}
              textAlign={"justify"}
            >
              We produce high-quality cotton yarns using the latest technology
              and state-of-the-art Swiss and German machinery. Our yarns are
              spun with precision, ensuring consistent strength, softness, and
              durability. With a focus on meeting global standards, we produce
              yarns suitable for various applications, including knitting and
              weaving. Each batch undergoes rigorous testing, guaranteeing the
              finest quality for our customers. As one of the best yarn
              suppliers in Ahmedabad, Gujarat, India, and Asia, we are committed
              to delivering excellence and reliability in every product we
              offer.
            </Typography>
          </Stack>
          <Stack
            height={"90vh"}
            className="fabrics"
            sx={{
              scrollSnapAlign: "start",
            }}
          >
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              Fabrics
            </Typography>
            <Typography
              fontSize={{ md: "1.2rem", xs: "0.8rem" }}
              textAlign={"justify"}
            >
              We manufacture a wide range of fabrics, utilizing advanced
              knitting and weaving techniques. Our fabrics are crafted from the
              finest yarns, ensuring excellent texture, durability, and comfort.
              We offer a variety of fabric types, catering to industries from
              fashion to home textiles. Our facility is equipped with the latest
              machinery, allowing us to produce fabrics that meet global
              standards for quality, appearance, and functionality. From basic
              cotton to specialized blends, including sustainable fabrics in
              Gujarat and multiple fabric blends, our fabrics are designed to
              exceed customer expectations. As a leading provider of the best
              fabrics in Ahmedabad, Gujarat, India, and Asia, we are recognized
              as a best greige fabric manufacturing company and a finished
              fabrics manufacturing company.
            </Typography>
          </Stack>
          <Stack
            height={"70vh"}
            className="garments"
            sx={{
              scrollSnapAlign: "start",
            }}
          >
            <Typography
              fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
              fontWeight={"bold"}
            >
              Garments
            </Typography>
            <Typography
              fontSize={{ md: "1.2rem", xs: "0.8rem" }}
              textAlign={"justify"}
            >
              Our garment division produces high-quality apparel with a focus on
              precision and craftsmanship. From design to finished product, we
              ensure that every garment reflects our commitment to quality. Our
              factory follows a meticulous process, including fabric selection,
              cutting, sewing, and finishing, ensuring each piece meets global
              fashion standards. Our skilled team and modern equipment enable us
              to deliver a wide range of garments, from casual wear to
              specialized items, always prioritizing comfort, style, and
              durability for our customers. As one of the best T-shirt
              manufacturers in Ahmedabad, Gujarat, India, and Asia, we also
              excel as shirt manufacturers in Ahmedabad, Gujarat, India, and
              Asia.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={"45%"}
          height={"700px"}
          className="images"
          position={"relative"}
        >
          <Stack
            height={{ lg: "300px", md: "200px" }}
            width={"100%"}
            className="yarnsImage"
            position={"absolute"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Stack>
          <Stack
            height={{ lg: "300px", md: "200px" }}
            width={"100%"}
            className="fabricsImage"
            position={"absolute"}
            sx={{
              backgroundImage: `url(${fabric.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Stack>
          <Stack
            height={{ lg: "300px", md: "200px" }}
            width={"100%"}
            className="garmentsImage"
            position={"absolute"}
            sx={{
              backgroundImage: `url(${garments.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Stack>
        </Stack>
      </Stack>

      {/* mobile view */}
      <Stack margin={"30px"} gap={"20px"} display={{ md: "none" }}>
        <Stack>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Yarn
          </Typography>
          <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
            We produce high-quality cotton yarns using the latest technology and
            state-of-the-art Swiss and German machinery. Our yarns are spun with
            precision, ensuring consistent strength, softness, and durability.
            With a focus on meeting global standards, producing yarns that are
            suitable for various applications, including knitting and weaving.
            Each batch undergoes rigorous testing, guaranteeing the finest
            quality for our customers.
          </Typography>
        </Stack>
        <Stack
          height={"150px"}
          width={"60%"}
          sx={{
            backgroundImage: `url(${yarns.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>

        <Stack>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Fabrics
          </Typography>
          <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
            We manufactures a wide range of fabrics, utilizing advanced knitting
            and weaving techniques. Our fabrics are crafted from the finest
            yarns, ensuring excellent texture, durability, and comfort. We offer
            a variety of fabric types, catering to industries from fashion to
            home textiles. Our facility is equipped with the latest machinery,
            allowing us to produce fabrics that meet global standards for
            quality, appearance, and functionality. From basic cotton to
            specialized blends, our fabrics are designed to exceed customer
            expectations.
          </Typography>
        </Stack>
        <Stack
          height={"150px"}
          width={"60%"}
          sx={{
            backgroundImage: `url(${fabric.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>

        <Stack>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Garments
          </Typography>
          <Typography fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
            Our garment division produces high-quality apparel with a focus on
            precision and craftsmanship. From design to finished product, we
            ensure that every garment reflects our commitment to quality. Our
            factory follows a meticulous process, including fabric selection,
            cutting, sewing, and finishing, ensuring each piece meets global
            fashion standards. Our skilled team and modern equipment enable us
            to deliver a wide range of garments, from casual wear to specialized
            items, always prioritizing comfort, style, and durability for our
            customers.
          </Typography>
        </Stack>
        <Stack
          height={"150px"}
          width={"60%"}
          sx={{
            backgroundImage: `url(${garments.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
      </Stack>
    </>
  );
}
