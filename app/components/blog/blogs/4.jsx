"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";
import location from "../assets/location.png";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";
import image from "../assets/blogs/4.png";

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
          Finished fabrics manufacturing company in Ahmedabad, Gujarat, India
          and Asia: Sky Textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          When it comes to sourcing high-quality garments for your business or
          personal projects, finding a reliable and skilled manufacturer is key
          to ensuring top-notch results. Sky Textiles, one of the best garment
          manufacturers in Ahmedabad, Gujarat, India and Asia offers a diverse
          range of apparel solutions that cater to various industries and
          fashion needs. Here’s why Sky Textiles should be your go-to choice for
          garment manufacturing.
        </Typography>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            1. High-Quality Garments for Every Need
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles specializes in producing premium-quality garments that
            meet international standards of craftsmanship. Whether you're
            looking for casual wear, corporate uniforms, sportswear, or
            fashion-forward apparel, Sky Textiles ensures each garment is
            crafted with attention to detail. Their garments are known for their
            durability, comfort, and style, making them suitable for a wide
            range of applications.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            2. Leading Garment Manufacturers with Advanced Technology
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            As one of the best garment manufacturers in Ahmedabad, Gujarat,
            India and Asia, Sky Textiles uses state-of-the-art technology and
            modern production techniques to create garments that are both
            stylish and functional. Their advanced manufacturing facilities
            ensure that every piece is produced with precision, meeting the
            specific requirements of their clients. From cutting to stitching,
            Sky Textiles maintains rigorous quality control to ensure
            consistency in every garment produced, solidifying its position
            among garment manufacturers in the industry.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            3. Custom Garment Solutions
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles offers customization options to meet the unique needs
            of your business. Whether you require specific fabric choices,
            sizes, or designs, they work closely with clients to create tailored
            garments that align with their brand identity. With Sky Textiles,
            you can bring your creative vision to life while ensuring your
            garments maintain high quality and functionality.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            4. Sustainable and Ethical Manufacturing
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            In today’s environmentally conscious market, Sky Textiles stands out
            for its commitment to sustainability. As an ethical garment
            manufacturer, they prioritize eco-friendly production processes and
            source sustainable materials whenever possible. This approach
            ensures that your garments are not only high quality but also
            produced with minimal environmental impact.
          </Typography>
        </Stack>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            5. Seamless Ordering and Delivery Process
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles makes garment sourcing easy with its streamlined
            ordering and delivery process. Their user-friendly website allows
            clients to browse their product offerings, place orders, and receive
            their garments in a timely manner. With a reliable supply chain, Sky
            Textiles ensures your garments are delivered on schedule, helping
            you stay ahead in the competitive fashion industry.
          </Typography>
        </Stack>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }} fontWeight={"bold"}>
          Best garment manufacturers in Ahmedabad, Gujarat, India and Asia
        </Typography>

        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Sky Textiles stands as one of the best garment manufacturers in
          Ahmedabad, Gujarat, India and Asia due to its focus on quality,
          sustainability, and customization. Whether you need stylish apparel
          for retail or practical uniforms for the workplace, Sky Textiles has
          the expertise and resources to meet your needs.
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
