"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";
import location from "../assets/location.png";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/5.png";

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
          Best yarn suppliers in Ahmedabad, Gujarat, India and Asia: Sky
          Textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          When it comes to finding the perfect yarn for your textile projects,
          the quality and reliability of your supplier can make all the
          difference. Sky Textiles, a top name among the best yarn suppliers in
          Ahmedabad, Gujarat, India and Asia offers a comprehensive range of
          high-quality yarns designed to meet the needs of both amateur crafters
          and seasoned professionals. Here’s why Sky Textiles should be your
          go-to choice for all your yarn requirements.
        </Typography>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            1. Premium Quality Yarn Selection
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles stands out for its impressive selection of yarns, each
            crafted with precision to ensure superior quality. Their catalog
            features everything from luxurious merino wool to versatile cotton
            blends. Whether you’re working on intricate patterns or cozy home
            textiles, you can rely on Sky Textiles for yarns that deliver
            exceptional results every time.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            2. Eco-Friendly and Sustainable Choices
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            In today’s environmentally conscious world, choosing sustainable
            materials is crucial. Sky Textiles is committed to offering
            eco-friendly yarn options that align with green practices. By opting
            for their sustainable yarns, you contribute to reducing
            environmental impact while still enjoying high-quality, reliable
            materials for your projects.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            3. Exceptional Customer Support
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            One of the defining features of Sky Textiles is its outstanding
            customer service. Their knowledgeable team is always ready to assist
            with any inquiries or special requests, ensuring a smooth and
            satisfying shopping experience. Whether you need advice on selecting
            the right yarn or have questions about bulk orders, Sky Textiles
            provides the support you need.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            4. Competitive Pricing and Bulk Discounts
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles understands the importance of affordability, especially
            for businesses and frequent buyers. They offer competitive pricing
            across their entire range of yarn products and provide attractive
            bulk discounts. This approach makes it easier for you to manage your
            budget while still accessing top-notch yarns.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            5. Convenient Online Ordering
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Ordering from Sky Textiles is a hassle-free experience thanks to
            their user-friendly website. Browse their extensive catalog, place
            your order, and have your yarn delivered directly to your door. As
            one of the best yarn suppliers in Ahmedabad, Gujarat, India and Asia
            Sky Textiles ensures that your online shopping is streamlined and
            efficient, allowing you to focus more on your creative endeavors.
          </Typography>
        </Stack>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }} fontWeight={"bold"}>
          Best yarn suppliers in Ahmedabad, Gujarat, India and Asia
        </Typography>

        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In conclusion, Sky Textiles excels as a premier yarn supplier by
          offering exceptional product quality, sustainable options, and
          outstanding customer service. Elevate your textile creations with the
          best yarn suppliers in Ahmedabad, Gujarat, India and Asia ailable and
          experience the difference with Sky Textiles.
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
