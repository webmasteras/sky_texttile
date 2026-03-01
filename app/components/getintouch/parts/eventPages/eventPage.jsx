"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import banner from "../assets/conference.png";
import Image from "next/image";
import time from "../assets/clock.png";
import location from "../assets/location.png";
import flowers from "../assets/flowers.png";
import laptop from "../assets/laptop.png";
import girlOnLaptop from "../assets/girlOnLaptop.png";

import img1 from "../assets/Events/fireSafety/1.jpg";
import img2 from "../assets/Events/fireSafety/2.jpg";
import img3 from "../assets/Events/fireSafety/3.jpg";
import img4 from "../assets/Events/fireSafety/4.jpg";

import ganesh from "../assets/Events/ganeshChaturthi/1.jpg";
import independence from "../assets/Events/independenceDay/2.jpg";
import navratri from "../assets/Events/navratri/1.jpg";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/app/components/admin/event/parts/Spinner";

const data = [
  {
    Date: "15th Aug, 2023",
    Title: "Independence Day celebration",
    time: "11 AM - 1 PM",
    location: "Sky Textiles",
    route:
      "/sustainability/event/independence-day",
    image: independence,
    description:
      "Independence Day celebration fostering patriotism and unity among our team.",
  },
  {
    Date: "19th Sept, 2023",
    Title: "Ganesh Chaturthi",
    time: "11 AM - 1 PM",
    location: "Sky Textiles",
    route:
      "/sustainability/event/ganesh-chaturthi",
    image: ganesh,
    description:
      "Joyful Ganesh Chaturthi celebration uniting our factory team in devotion.",
  },
  {
    Date: "15th Oct, 2023",
    Title: "Navratri Celebration",
    time: "11 AM - 1 PM",
    location: "Sky Textiles",
    route:
      "/sustainability/event/navratri",
    image: navratri,
    description:
      "Navratri celebration at our factory embraces Gujarat's culture, dance, and unity.",
  },
];

export default function Event() {
  const router = useRouter();
  const {slug} = useParams();
  const [eventData, setEventData] = useState(null);
const [loading, setLoading] = useState(true);
 const fetchData = async () => {
   try {
     const response = await axios.get(
       `https://skytextiles.in/api/v1/event/get-by-slug?slug=${slug}`
     );
     setEventData(response.data.message); // Assuming response.data.message contains the event details
     setLoading(false);
   } catch (error) {
     console.error("Error fetching data:", error);
     setLoading(false);
   }
 };

  // useEffect to call the API when the component mounts
useEffect(() => {
  if (slug) {
    fetchData();
  }
}, [slug]);
if (loading){
  return <Spinner/>
}
  // console.log(eventData);

  return (
    <Stack>
      <Navbar />
      <Box
        height={{ lg: "90vh", smm: "50vh", xs: "30vh" }}
        sx={{
          backgroundImage: `url(${eventData?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100vw",
          marginTop: "50px",
        }}
      ></Box>
      <Stack margin={{ md: "50px", smm: "30px", xs: "20px" }} gap={"10px"}>
        <Typography fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}>
          {eventData?.title}
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: eventData?.content }} />
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={"50px"}
          justifyContent={"center"}
          marginTop={"20px"}
          marginX={{ xs: "20px", md: "0" }}
          display={{ xs: "none", md: "flex" }}
        >
          {eventData.images?.map((el) => (
            <CheckupCard el={el} />
          ))}
        </Stack>
      </Stack>
      {/* <Stack>
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
              gap={"10px"}
              fontSize={"5px"}
              width={{ xl: "30%", lg: "40%", md: "40%", sm: "95%" }}
              padding={"20px"}
              backgroundColor={"#f9f9f9"}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "2px 1px 20px 0 rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box
                width="100%"
                height="30vh"
                sx={{
                  backgroundImage: `url(${d.image.src})`,
                  backgroundSize: "cover",
                  borderRadius: "5px",
                }}
              ></Box>
              <Typography
                fontSize={"0.9rem"}
                backgroundColor={"#D9D9D9"}
                padding={"5px 8px"}
                borderRadius={"3px"}
                width={"fit-content"}
                margin={"10px 0"}
              >
                {d.Date}
              </Typography>
              <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
                {d.Title}
              </Typography>
             
              <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Image src={location} alt="" height={16} width={12} />
                <Typography>{d.Title}</Typography>
              </Stack>
              <Typography>{d.description}</Typography>
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
                onClick={() => router.push(d.route)}
              >
                View More
              </Button>
            </Stack>
          ))}
        </Stack>
      </Stack> */}
      <Footer />
    </Stack>
  );
}

function CheckupCard({ el }) {
  return (
    <Stack
      width={{ lg: "29%", md: "46%", sm: "100%" }}
      height={"421px"}
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: "50%", md: "100%" },
          width: "100%",
          position: "relative",
          alignSelf: "center",
        }}
      >
        <Image src={el} alt="" fill objectFit="cover" />
      </Box>
    </Stack>
  );
}