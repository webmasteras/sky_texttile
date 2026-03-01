"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

import banner from "./assets/eventsBanner.jpg";
import conference from "./assets/conference.png";
import location from "./assets/location.png";
import Image from "next/image";

import { useParams, useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import image1 from "./assets/blogs/1.jpg";
import image2 from "./assets/blogs/2.png";
import image3 from "./assets/blogs/3.png";
import image4 from "./assets/blogs/4.png";
import image5 from "./assets/blogs/5.png";
import image6 from "./assets/blogs/6.png";
import image7 from "./assets/blogs/7.png";
import image8 from "./assets/blogs/8.png";
import image9 from "./assets/blogs/9.png";
import image10 from "./assets/blogs/10.png";
import image11 from "./assets/blogs/11.png";
import image12 from "./assets/blogs/12.png";
import image13 from "./assets/blogs/13.png";
import image14 from "./assets/blogs/14.jpg";
import image15 from "./assets/blogs/15.jpg";
import image16 from "./assets/blogs/16.jpg";
import image17 from "./assets/blogs/17.jpg";
import image18 from "./assets/blogs/18.jpg";
import image19 from "./assets/blogs/19.jpg";
import image20 from "./assets/blogs/20.jpg";
import image21 from "./assets/blogs/21.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const data = [
  //   {
  //     Title:
  //       "Best Single Jersey machines in Ahmedabad, Gujarat, India and Asia : Sky Textiles",
  //     route:
  //       "/best-single-jersey-machines-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image1,
  //     description:
  //       "1st Founders Day marked with commitments, uniform policy, and annual event.",
  //   },
  //   {
  //     Title:
  //       "Best greige fabric manufacturing company in Ahmedabad, Gujarat, India and Asia: Sky Textiles",
  //     route:
  //       "/best-greige-fabric-manufacturing-company-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image2,
  //     description:
  //       "Independence Day celebration fostering patriotism and unity among our team.",
  //   },
  //   {
  //     route:
  //       "/finished-fabrics-manufacturing-company-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     Title:
  //       "Finished fabrics manufacturing company in Ahmedabad, Gujarat, India and Asia: Sky Textiles",
  //     image: image3,
  //     description:
  //       "Joyful Ganesh Chaturthi celebration uniting our factory team in devotion.",
  //   },
  //   {
  //     route:
  //       "/best-garment-manufacturing-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     Title:
  //       "Best Garment Manufacturing in Ahmedabad, Gujarat, India and Asia: Sky Textiles",
  //     image: image4,
  //     description:
  //       "Navratri celebration at our factory embraces Gujarat's culture, dance, and unity.",
  //   },
  //   {
  //     route:
  //       "/best-yarn-suppliers-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     Title:
  //       "Best yarn suppliers in Ahmedabad, Gujarat, India and Asia: Sky Textiles",
  //     image: image5,
  //     description:
  //       "Sardar Patel Jayanti, National Unity Day, honors India’s first Deputy PM.",
  //   },
  //   {
  //     Title:
  //       "Textile Manufacturers and Textile Manufacturing Company in Ahmedabad, Gujarat: Sky Textiles",
  //     route:
  //       "/textile-manufacturers-and-textile-manufacturing-company-in-ahmedabad-gujarat-sky-textiles",
  //     image: image6,
  //     description:
  //       "Vishwakarma Puja celebrates Lord Vishwakarma, the divine architect, creator.",
  //   },
  //   {
  //     Title:
  //       "Best Textile Products in Gujarat & Ahmedabad | Best Shirt Production – Sky Textiles",
  //     route:
  //       "/best-textile-products-in-gujarat-ahmedabad-best-shirt-production-sky-textiles",
  //     image: image7,
  //     description:
  //       "/Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Textile and Fabric Industries in Ahmedabad and Gujarat:Sky Textiles",
  //     route:
  //       "/best-textile-and-fabric-industries-in-ahmedabad-and-gujarat-sky-textiles",
  //     image: image8,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best T-Shirt Manufacturers in Ahmedabad and Gujarat: Sky Textiles",
  //     route:
  //       "/best-t-shirt-manufacturers-in-ahmedabad-and-gujarat-sky-textiles",
  //     image: image9,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title: "Spinning Mills in Ahmedabad, Gujarat, and India: Sky Textiles",
  //     route: "/spinning-mills-in-ahmedabad-gujarat-and-india-sky-textiles",
  //     image: image10,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Textile Industry in Ahmedabad, Gujarat, India, and Asia: Skytextiles",
  //     route:
  //       "/best-textile-industry-in-ahmedabad-gujarat-india-and-asia-skytextiles",
  //     image: image11,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Shirt Manufacturers in Ahmedabad, Gujarat, India, and Asia: Skytextiles",
  //     route:
  //       "/shirt-manufacturers-in-ahmedabad-gujarat-india-and-asia-skytextiles",
  //     image: image12,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },

  //   {
  //     Title:
  //       "Best Fabrics in Gujarat: Discover Skytextiles for Quality and Innovation",
  //     route:
  //       "/best-fabrics-in-gujarat-discover-skytextiles-for-quality-and-innovation",
  //     image: image13,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },

  //   {
  //     Title:
  //       "Fabric Manufacturers in Ahmedabad, Gujarat, India, and Asia: A Hub for Quality Textiles",
  //     route:
  //       "/fabric-manufacturers-in-ahmedabad-gujarat-india-and-asia-a-hub-for-quality-textiles",
  //     image: image14,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },

  //   {
  //     Title:
  //       "Best Cotton Mill in India: Sky Textiles Leading the Way in Ahmedabad, Gujarat, and Asia",
  //     route:
  //       "/best-cotton-mill-in-india-sky-textiles-leading-the-way-in-ahmedabad-gujarat-and-asia",
  //     image: image15,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title: "Best Rib Machines in Ahmedabad, Gujarat, India, and Asia",
  //     route: "/best-rib-machines-in-ahmedabad-gujarat-india-and-asia",
  //     image: image16,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Draw Frame Process in Ahmedabad ,Gujarat, india and asia : sky textiles",
  //     route:
  //       "/best-draw-frame-process-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image17,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Raw Material Mixing Process in Ahmedabad, Gujarat, India and Asia : Sky Textiles",
  //     route:
  //       "/best-raw-material-mixing-process-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image18,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Speed Frame Process in Ahmedabad, Gujarat, India and Asia : sky textiles",
  //     route:
  //       "/best-speed-frame-process-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image19,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Sustainable textiles in Ahmedabad, Gujarat, India and Asia : Sky Textiles",
  //     route:
  //       "/best-sustainable-textiles-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image20,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  //   {
  //     Title:
  //       "Best Fleece Machines and Multiple fabric blend in Ahmedabad, Gujarat, India and Asia : Sky Textiles",
  //     route:
  //       "/best-fleece-machines-and-multiple-fabric-blend-in-ahmedabad-gujarat-india-and-asia-sky-textiles",
  //     image: image21,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  // ];
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://skytextiles.in/api/v1/blog/get-all"
      );
      setData(response.data.message); // Assuming the response data is an array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data.");
      setLoading(false);
    }
  };

  // useEffect to call the API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <Stack>
      <Navbar />
      <Stack
        height={{ lg: "90vh", smm: "50vh", xs: "30vh" }}
        marginTop={"50px"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack margin={"40px 0"}>
        <Typography
          fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Blogs at Sky Textiles
        </Typography>
        {/* <Typography
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          textAlign={"center"}
        >
          View Upcoming And Past Blogs Hosted By Sky Textiles.
        </Typography> */}
        {/* <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"20px"}
          margin={"30px"}
        >
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "none",
              backgroundColor: "#F85658",
              color: "white",
            }}
          >
            Upcoming Events
          </button>
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "1px solid black",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Post Events
          </button>
        </Stack>*/}
      </Stack>
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
                  backgroundImage: `url(${d.image})`,
                  backgroundSize: "cover",
                  borderRadius: "5px",
                }}
              ></Box>
              <Typography fontSize={"1.2rem"}>{d.title}</Typography>
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
              onClick={() => router.push(`/blog/${d.slug}`)}
            >
              View More
            </Button>
          </Stack>
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
}
