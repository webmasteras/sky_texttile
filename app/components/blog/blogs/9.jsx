"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/9.png";

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
          Best T-Shirt Manufacturers in Ahmedabad and Gujarat: Sky Textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Ahmedabad and Gujarat have long been renowned as key hubs for the
          textile industry, offering some of the finest apparel and fabrics in
          India. Among the many products that come from this vibrant region,
          T-shirts stand out for their comfort, versatility, and style. Whether
          you're a fashion brand, retailer, or business looking for high-quality
          custom T-shirts, finding the best T-shirt manufacturers in Ahmedabad
          and Gujarat can make all the difference.
        </Typography>

        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            Why Choose T-Shirt Manufacturers in Ahmedabad and Gujarat?
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            As a key part of India's textile heritage, Ahmedabad and Gujarat are
            home to some of the top textile manufacturing companies in the
            country. These manufacturers not only possess extensive experience
            in garment production but also use state-of-the-art technology to
            ensure premium quality. Here’s why opting for a textile
            manufacturing company in Ahmedabad and Gujarat can elevate your
            T-shirt sourcing strategy:
          </Typography>

          <ul style={{ marginLeft: "20px" }}>
            <li>
              <b> Quality and Craftsmanship :</b> The best T-shirt manufacturers
              in Ahmedabad and Gujarat maintain rigorous quality checks at every
              stage of production. From fabric selection to final stitching,
              these companies prioritize durability and comfort in their
              T-shirts.
            </li>
            <li>
              <b> Customization Options :</b> Whether you need screen printing,
              embroidery, or specific design features, these manufacturers offer
              a range of customization options to meet your branding needs.
            </li>
            <li>
              <b> Sustainable Practices :</b> Many T-shirt manufacturers in the
              region have adopted eco-friendly processes, using sustainable
              fabrics and minimizing waste. This makes them an ideal choice for
              businesses aiming to reduce their environmental footprint.
            </li>
            <li>
              <b> Competitive Pricing :</b> Due to the region's established
              textile infrastructure, companies in Ahmedabad and Gujarat can
              offer competitive pricing without compromising on quality. Bulk
              orders are especially cost-effective when working with local
              manufacturers.
            </li>
          </ul>
        </Stack>

        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In conclusion, Sky Textiles is your go-to partner for premium textile
          products and apparel manufacturing in Gujarat and Ahmedabad. With a
          focus on quality, innovation, and customer satisfaction, Sky Textiles.
          delivers the best solutions for your textile needs.
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
