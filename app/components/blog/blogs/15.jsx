"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/15.jpg";

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
      <h2 style={{ display: "none" }}>
        Sky Textiles, the best cotton mill in India, Ahmedabad, Gujarat, and
        Asia, offers premium-quality cotton fabrics with a focus on innovation
        and sustainability. Discover top-tier cotton manufacturing solutions
        trusted globally.
      </h2>
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
          Best Cotton Mill in India: Sky Textiles Leading the Way in Ahmedabad,
          Gujarat, and Asia
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Sky Textiles, located in Ahmedabad, Gujarat, is renowned as the best
          cotton mill in India, setting the standard for quality and innovation
          in the textile industry. With its state-of-the-art infrastructure and
          advanced manufacturing techniques, Sky Textiles has become a leading
          name not only in India but also across Asia.
        </Typography>

        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          As a pivotal player in the cotton industry, Sky Textiles has earned
          its place as the best cotton mill in Ahmedabad. The mill’s reputation
          is built on its unwavering commitment to producing top-tier cotton
          fabrics that meet the diverse needs of industries, from apparel to
          home textiles. By combining traditional techniques with modern
          technology, Sky Textiles has successfully positioned itself as a
          trusted partner for businesses seeking high-quality cotton products.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In addition to its status as the best in Ahmedabad, Sky Textiles is
          recognized as the best cotton mill in Gujarat. With a long history of
          textile expertise and a deep understanding of the industry, the
          company has built an impressive portfolio of cotton fabrics that are
          known for their durability, softness, and eco-friendly processing.
          Their dedication to quality has earned them a reputation as a reliable
          supplier to leading domestic and international markets.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Sky Textiles’ reach extends far beyond Gujarat, making its mark as the
          best cotton mill in Asia. With an expanding export business and an
          increasing global presence, they cater to international markets,
          providing high-quality cotton fabric solutions to industries
          worldwide. Their commitment to innovation and sustainability has set
          them apart in the competitive textile industry, as they continually
          invest in cutting-edge machinery and eco-friendly practices.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          At Sky Textiles, innovation meets sustainability. The company’s focus
          on eco-conscious manufacturing processes, including water and energy
          conservation, positions them as an industry leader in promoting
          sustainable practices within the cotton industry. This
          forward-thinking approach ensures that they remain ahead of the curve
          while meeting the ever-growing demand for environmentally friendly and
          ethically produced textiles.
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
