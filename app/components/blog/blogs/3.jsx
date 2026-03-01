"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";
import location from "../assets/location.png";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import ganesh from "../assets/Events/ganeshChaturthi/1.jpg";
import independence from "../assets/Events/independenceDay/2.jpg";
import navratri from "../assets/Events/navratri/1.jpg";
import { useRouter } from "next/navigation";

const data = [
  {
    Title:
      "Best Single Jersey machines in Ahmedabad, Gujarat, India and Asia : Sky Textiles",
    route:
      "/best-single-jersey-machines-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
    image: image1,
    description:
      "1st Founders Day marked with commitments, uniform policy, and annual event.",
  },
  {
    Title:
      "Best greige fabric manufacturing company in Ahmedabad, Gujarat, India and Asia: Sky Textiles",
    route:
      "/best-greige-fabric-manufacturing-company-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
    image: image2,
    description:
      "Independence Day celebration fostering patriotism and unity among our team.",
  },
  {
    route:
      "/finished-fabrics-manufacturing-company-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
    Title:
      "Finished fabrics manufacturing company in Ahmedabad, Gujarat, India and Asia: Sky Textiles",
    image: image3,
    description:
      "Joyful Ganesh Chaturthi celebration uniting our factory team in devotion.",
  },
];

export default function Event() {
  const router = useRouter();
  return (
    <Stack>
      <Navbar />
      <Box
        height={{ lg: "80vh", smm: "50vh", xs: "30vh" }}
        sx={{
          backgroundImage: `url(${image3.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100vw",
          marginTop: "50px",
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></Box>
      </Box>
      <Stack margin={{ md: "50px", smm: "30px", xs: "20px" }} gap={"10px"}>
        <Typography fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}>
          Finished fabrics manufacturing company in Ahmedabad, Gujarat, India
          and Asia: Sky Textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          When it comes to sourcing finished fabrics that meet the highest
          standards of quality and style, Sky Textiles stands out as a leading
          finished fabrics manufacturing company in Ahmedabad, Gujarat, India
          and Asia. Offering an extensive range of premium fabrics, Sky Textiles
          ensures that every piece is crafted to perfection, making them an
          ideal choice for designers, manufacturers, and textile enthusiasts
          alike. Here’s why should be your preferred partner for all your
          finished fabric needs.
        </Typography>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            1. Superior Quality and Diverse Range
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles is renowned for its commitment to quality in every
            finished fabric in Ahmedabad, Gujarat, India and Asia they produce.
            Their collection includes a variety of textures, patterns, and
            colors, catering to diverse applications from fashion apparel to
            home décor. Whether you need elegant silk for evening wear or
            durable cotton for everyday clothing, Sky Textiles delivers fabrics
            that meet rigorous standards and exceed expectations.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            2. Advanced Manufacturing Techniques
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            As a leading finished fabrics manufacturing company in Ahmedabad,
            Gujarat, India and Asia, Sky Textiles employs state-of-the-art
            manufacturing techniques to ensure precision and consistency in
            every roll of fabric. Their advanced processes guarantee that each
            fabric maintains high durability, vibrant color retention, and
            exceptional texture, making them suitable for both high-end and
            everyday use.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            3. Customization and Flexibility
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles understands that each project has unique requirements.
            That’s why they offer customization options for their finished
            fabrics. Whether you need specific colors, patterns, or fabric
            weights, their flexible manufacturing capabilities can accommodate
            bespoke requests, providing tailored solutions that align with your
            project’s vision.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            4. Sustainable and Ethical Practices
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            In today’s market, sustainability is key. Sky Textiles is committed
            to ethical manufacturing practices and environmental responsibility.
            They prioritize sustainable sourcing of raw materials and adopt
            eco-friendly processes in their production lines, ensuring that
            their finished fabrics not only look great but also align with green
            practices.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            5. Streamlined Ordering Process
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            With an intuitive online platform, Sky Textiles makes it easy to
            browse their extensive catalog of finished fabrics. Their
            user-friendly website allows you to select and order fabrics
            efficiently, with direct delivery to your location. This streamlined
            process saves you time and ensures that you receive high-quality
            fabrics without hassle.
          </Typography>
        </Stack>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }} fontWeight={"bold"}>
          Finished fabrics manufacturing company in Ahmedabad, Gujarat, India
          and Asia
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          <i>
            Discover the beauty and versatility of Sky Textiles’ finished
            fabrics. From luxurious silks to sturdy cottons, our fabrics are
            designed to enhance your creations with unmatched quality and style.
          </i>
        </Typography>

        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In conclusion, Sky Textiles excels as a premier finished fabrics
          manufacturing company in Ahmedabad, Gujarat, India and Asia, offering
          top-quality fabrics, customization options, and sustainable practices.
          For your next textile project, trust Sky Textiles to provide the
          finished fabrics that deliver both excellence and innovation.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          For more information and to explore their full range of finished
          fabrics, visit Sky Textiles.
        </Typography>

        {/* <Stack
          direction={{ md: "row" }}
          gap={"20px"}
          justifyContent={"space-between"}
          marginTop={"30px"}
        >
          <Box
            sx={{
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "110vh",
            }}
            width={{ md: "48%", xs: "100%" }}
          ></Box>
          <Stack
            width={{ md: "48%", xs: "100%" }}
            justifyContent={"space-between"}
            gap={"20px"}
          >
            <Box
              sx={{
                backgroundImage: `url(${img3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { md: "50vh", xs: "70vh" },
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${img4.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "50vh",
                width: "100%",
              }}
            ></Box>
          </Stack>
        </Stack> */}
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
            xl: "20px 70px 200px 70px",
            md: "20px 40px 200px 40px",
            smm: "10px 30px 200px 30px",
            sm: "10px 20px 200px 20px",
          }}
          justifyContent={"center"}
          direction={{ md: "row" }}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          {data.map((d) => (
            <Stack
              fontSize={"5px"}
              width={{ xl: "30%", lg: "40%", md: "40%", sm: "95%" }}
              padding={"20px"}
              backgroundColor={"#f9f9f9"}
              sx={{
                cursor: "pointer",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "2px 1px 20px 0 rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Stack gap={"10px"}>
                <Box
                  width="100%"
                  height="30vh"
                  sx={{
                    backgroundImage: `url(${d.image.src})`,
                    backgroundSize: "cover",
                    borderRadius: "5px",
                  }}
                ></Box>
                <Typography fontSize={"1.2rem"}>{d.Title}</Typography>
                {/* <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Image src={time} alt="" height={15} width={15} />
                <Typography>{d.time}</Typography>
              </Stack> */}
              </Stack>
              <Button
                sx={{
                  marginTop: "20px",
                  width: "200px",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "1.2rem",
                  border: "none",
                  backgroundColor: "#F85658",
                  color: "white",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
                onClick={() => router.push(`/blog${d.route}`)}
              >
                View More
              </Button>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
