"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/16.jpg";

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
          backgroundImage: `url(${image.src})`,
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
          Best Rib Machines in Ahmedabad, Gujarat, India, and Asia
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          When it comes to rib knitting machines, Ahmedabad in Gujarat stands
          out as a prominent hub for high-quality and advanced textile
          machinery. Best Rib Machines in Ahmedabad, Gujarat, India, and Asia.
          Gujarat is known for its rich textile industry, and rib machines play
          a vital role in producing rib fabrics, which are in high demand across
          India and Asia. With innovations in rib knitting technology,
          manufacturers in Ahmedabad have emerged as key suppliers and exporters
          of rib fabric machines, catering to both local and international
          markets. Whether you're looking for affordable rib machines or
          top-tier industrial equipment, Ahmedabad offers a wide range of
          options.
        </Typography>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            Why Choose Rib Knitting Machines from Ahmedabad?
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Ahmedabad, being the textile capital of India, boasts
            state-of-the-art rib fabric machines that cater to the needs of
            manufacturers across the globe. Sky Textiles has been a key player
            in providing high-quality rib machines in India and other parts of
            Asia. These machines are built using the latest rib knitting
            technology in India, ensuring smooth operations and delivering
            superior fabric output. The city has become a center for rib machine
            manufacturers in Ahmedabad, offering world-class products that meet
            the diverse needs of the textile industry.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            Advanced Rib Machines in Gujarat
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            The advanced machinery available at Sky Textiles offers top-notch
            performance, making them one of the best rib machine suppliers in
            Gujarat. Known for their durability and efficiency, these machines
            are designed to handle a wide variety of yarns and produce rib
            fabrics with unmatched precision. If you're looking for affordable
            rib machines in Asia without compromising on quality, Sky Textiles
            has the perfect solutions for you.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            Exporting Excellence: Rib Machines from India to Asia
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles is not just a local supplier but also a prominent rib
            machine exporter in Asia, providing cutting-edge equipment to
            manufacturers across borders. Their machines are highly sought after
            in neighboring countries due to their superior build quality, ease
            of operation, and long-lasting performance. This makes Sky Textiles
            one of the leading rib machine brands in Asia.
          </Typography>
        </Stack>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          From small-scale enterprises to large-scale industries, the demand for
          high-quality rib knitting machines in Gujarat is ever-growing. Sky
          Textiles, with its industrial rib machines in India, stands out as a
          trusted partner in the textile sector, offering top-of-the-line rib
          circular knitting machines in Asia that cater to the evolving demands
          of the industry.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Visit Sky Textiles today to explore the best options for your
          business!
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
