"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/eventsBanner.jpg";
import conference from "./assets/conference.png";
import location from "./assets/location.png";
import time from "./assets/clock.png";
import Image from "next/image";

import fireSafety from "./assets/Events/fireSafety/1.jpg";
import foundersDay from "./assets/Events/khelMahotsav/6.jpg";
import ganesh from "./assets/Events/ganeshChaturthi/1.jpg";
import independence from "./assets/Events/independenceDay/2.jpg";
import manavVikas from "./assets/Events/manavVikas/1.jpg";
import navratri from "./assets/Events/navratri/1.jpg";
import sardar from "./assets/Events/sardarPatelJayanti/2.jpg";
import vishwakarma from "./assets/Events/vishwakarmaPuja/1.jpg";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Events() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const data = [
  //   {
  //     Date: "1st Jan, 2024",
  //     Title: "Sky Primwear Founders day",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/founders-day",
  //     image: foundersDay,
  //     description:
  //       "1st Founders Day marked with commitments, uniform policy, and annual event.",
  //   },
  //   {
  //     Date: "15th Aug, 2023",
  //     Title: "Independence Day celebration",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/independence-day",
  //     image: independence,
  //     description:
  //       "Independence Day celebration fostering patriotism and unity among our team.",
  //   },
  //   {
  //     Date: "19th Sept, 2023",
  //     Title: "Ganesh Chaturthi",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/ganesh-chaturthi",
  //     image: ganesh,
  //     description:
  //       "Joyful Ganesh Chaturthi celebration uniting our factory team in devotion.",
  //   },
  //   {
  //     Date: "15th Oct, 2023",
  //     Title: "Navratri Celebration",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/navratri",
  //     image: navratri,
  //     description:
  //       "Navratri celebration at our factory embraces Gujarat's culture, dance, and unity.",
  //   },
  //   {
  //     Date: "31st Oct, 2023",
  //     Title: "Sardar Patel Jayanti",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/sardar-patel-jayanti",
  //     image: sardar,
  //     description:
  //       "Sardar Patel Jayanti, National Unity Day, honors India’s first Deputy PM.",
  //   },
  //   {
  //     Date: "17th Sept, 2023",
  //     Title: "Vishwakarma Pooja",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/vishwakarma-puja",
  //     image: vishwakarma,
  //     description:
  //       "Vishwakarma Puja celebrates Lord Vishwakarma, the divine architect, creator.",
  //   },
  //   {
  //     Date: "9th Oct, 2023",
  //     Title: "Fire and safety programmes",
  //     time: "11 AM - 1 PM",
  //     location: "Sky Textiles",
  //     route:
  //       "/sustainability/event/fire-and-safety",
  //     image: fireSafety,
  //     description:
  //       "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
  //   },
  // ];

  // console.log(data);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://skytextiles.in/api/v1/event/get-all"
      );
      setData(response.data.message); // Assuming the response data is an array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to load data.");
      setLoading(false);
    }
  };

  // useEffect to call the API when the component mounts
  useEffect(() => {
    async function fetch() {
      await fetchData();
    }
    fetch();
  }, []);

  return (
    <Stack>
      <Navbar />
      <Stack
        height={{ lg: "90vh", smm: "50vh", xs: "30vh" }}
        marginTop={"70px"}
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
          Events at Sky Textiles
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          textAlign={"center"}
        >
          View Upcoming And Past Events Hosted By Sky Textiles.
        </Typography>
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
                backgroundImage: `url(${d.image})`,
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
              {d.Date || ""}
            </Typography>
            <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
              {d.title}
            </Typography>
            {/* <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
              <Image src={time} alt="" height={15} width={15} />
              <Typography>{d.time}</Typography>
            </Stack> */}
            <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
              <Image src={location} alt="" height={16} width={12} />
              <Typography>at sky textiles</Typography>
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
              onClick={() =>
                router.push(
                  `/sustainability/event/${d.slug}`
                )
              }
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
