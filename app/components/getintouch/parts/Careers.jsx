"use client";
import { Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import arrow from "./assets/arrow.png";
import career from "./assets/career.gif";
import location from "./assets/location.png";
import time from "./assets/time.png";

import Form from "./FormCareer";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Careers() {
  const [showForm, setShowForm] = useState(false);
  // const router = useRouter();
  const [careerData, setData] = useState([]);

  const data = [
    {
      designation: "B2B Area Sales Manager",
      Description:
        "Seeking a dynamic professional to drive sales and expand market reach for our clothing brand ONE SKY.",
      type: "Full-time",
      Remote: "Madhya Pradesh",
    },
    {
      designation: "Exhaust Dyeing Supervisor Fabrics",
      Description:
        "Supervisor needed for managing exhaust dyeing process, ensuring fabric quality.",
      type: "Full-time",
      Remote: "Botad, Gujarat",
    },
    {
      designation: "Continuos Dyeing Supervisor",
      Description:
        "Supervisor required for overseeing continuous dyeing process, ensuring fabric quality.",
      type: "Full-time",
      Remote: "Botad, Gujarat",
    },
    {
      designation: "Textile PPC Executive",
      Description:
        "Textile PPC Executive needed to manage production planning, scheduling, and coordination to optimize efficiency.",
      type: "Full-time",
      Remote: "Botad, Gujarat",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://skytextiles.in/api/v1/careers/get-careers"
      );
      setData(response.data.message); // Assuming the response data is an array
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // useEffect to call the API when the component mounts
  useEffect(() => {
    async function fetch() {
      await fetchData();
    }
    fetch();
  }, []);

  // console.log(careerData);

  return (
    <Stack>
      <Navbar />
      {showForm && (
        <Stack
          sx={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "20",
          }}
        >
          <Form setShowForm={setShowForm} />
        </Stack>
      )}
      <Stack
        direction={{ md: "row" }}
        margin={{ md: "100px 70px", xs: "30px" }}
        alignItems={"center"}
        height={{ md: "70vh" }}
      >
        <Stack width={{ md: "70%" }}>
          <Typography
            fontSize={{ lg: "4.5rem", smm: "3rem", xs: "2rem" }}
            fontWeight={"bold"}
          >
            Want To Join
          </Typography>
          <Typography
            fontSize={{ lg: "4.5rem", smm: "3rem", xs: "2rem" }}
            fontWeight={"bold"}
          >
            The Team ?
          </Typography>
          <Typography
            fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}
            fontWeight={"bold"}
          >
            Be Our Next Human Experience
          </Typography>
          <Typography
            fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}
            fontWeight={"bold"}
          >
            Designer
          </Typography>
        </Stack>
        <Image src={career} alt="" width={300} height={300} />
      </Stack>
      <Stack>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          margin={{ md: "0", xs: "0 30px" }}
        >
          Why Join Sky Textiles?
        </Typography>
        <Typography
          width={"80%"}
          margin={"10px auto"}
          textAlign={"center"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          At Sky Textiles, we focus on producing high-quality textile products
          that meet international standards. By joining our team, you become a
          part of a company that strives for excellence, embraces sustainable
          practices, and values innovation. Our commitment to sustainability
          ensures that you work in a company that takes responsibility for the
          environment, using eco-friendly processes and materials. We also
          invest in our employees through continuous training, skill
          development, and career progression opportunities. You will have the
          chance to work with industry experts and gain hands-on experience in
          various aspects of textile production, design, and marketing. This
          exposure can greatly enhance your skills and open up new career paths
          within the industry.
        </Typography>
      </Stack>
      <Stack margin={{ md: "100px 70px", xs: "30px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          marginBottom={{ md: "50px" }}
          fontWeight={"600"}
        >
          Current Job Openings
        </Typography>
        {careerData.map((d) => (
          <Stack
            margin={{ md: "30px 0", xs: "20px 0px" }}
            gap={"20px"}
            sx={{ border: "1px solid black", padding: "30px" }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                fontSize={{ lg: "1.8rem", smm: "1.6rem", xs: "1.4rem" }}
                fontWeight={"bold"}
              >
                {d.title}
              </Typography>
              <Stack
                direction={"Row"}
                gap={"15px"}
                alignItems={"center"}
                display={{ md: "flex", xs: "none" }}
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => setShowForm(true)}
              >
                <Typography fontSize={"1.6rem"}>Apply Now</Typography>
                <Image src={arrow} alt="" width={"20"} height={"20"} />
              </Stack>
            </Stack>
            <Typography>{d.description}</Typography>
            <Stack direction={"row"} justifyContent={"start"} gap={"20px"}>
              <Stack
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
                padding={{ md: "5px 20px", sm: "5px 15px" }}
                sx={{
                  border: "1px solid black",
                  width: "fit-content",
                  borderRadius: "20px",
                }}
              >
                <Image src={location} alt="" width={15} height={20} />
                <Typography fontSize={{ smm: "20px", sm: "11px" }}>
                  {d.location}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
                padding={{ md: "5px 20px", sm: "5px 15px" }}
                sx={{
                  border: "1px solid black",
                  width: "fit-content",
                  borderRadius: "20px",
                }}
              >
                <Image src={time} alt="" width={20} height={20} />
                <Typography fontSize={{ smm: "20px", sm: "11px" }}>
                  {d.type}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"Row"}
              gap={"15px"}
              alignItems={"center"}
              display={{ md: "none", smm: "flex" }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography fontSize="18px">Apply Now</Typography>
              <Image src={arrow} alt="" width={"15"} height={"15"} />
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
}
