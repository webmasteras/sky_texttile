"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/21.jpg";

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
          Best Fleece Machines and Multiple fabric blend in Ahmedabad, Gujarat,
          India and Asia : Sky Textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          When it comes to best sustainable textiles in Gujarat, Sky Textiles
          stands out as a leader in the industry. With a commitment to quality
          and innovation, we offer the best fleece machines in Ahmedabad,
          designed to meet the diverse needs of fabric manufacturers. Our
          state-of-the-art machinery ensures high performance and efficiency,
          making it easier for businesses to produce high-quality fleece
          fabrics.
        </Typography>

        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Our extensive range of best fleece machines in Gujarat caters to both
          small and large-scale production. Whether you’re looking for
          high-speed knitting machines or advanced finishing equipment, we have
          the right solutions to help you achieve your production goals. Our
          machines are equipped with the latest technology, allowing for precise
          control and minimal waste.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In addition to fleece machines, we specialize in multiple fabric
          blends in Ahmedabad. Our expertise extends to creating custom fabric
          solutions tailored to your specific requirements. From blended fabrics
          that combine the best of natural and synthetic fibers to unique
          textures and patterns, we help you stand out in the competitive
          textile market.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Sky Textiles is not just known for the best fleece machines in India;
          we are also recognized for our advanced fabric manufacturing
          techniques. Our team of experts works diligently to develop innovative
          products that meet global sustainability standards. This includes a
          focus on eco-friendly materials and processes that minimize
          environmental impact.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          For businesses seeking to expand their offerings, we provide insights
          into the multiple fabric blends in India and across Asia. Our
          comprehensive knowledge of textile trends ensures that you stay ahead
          of the competition. By leveraging the best fleece machines and
          advanced blending techniques, you can create high-quality products
          that cater to diverse customer preferences. We offer fabrics in a GSM
          range of 120 GSM – 450 GSM, allowing you to select the ideal thickness
          and weight for your specific applications, enhancing both comfort and
          durability in your final products.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          If you’re searching for high-performance textile machinery, look no
          further than Sky Textiles. Our commitment to quality, sustainability,
          and customer satisfaction makes us the ideal partner for all your
          fabric manufacturing needs. Explore our range of best fleece machines
          in Asia and take your textile business to new heights!
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
