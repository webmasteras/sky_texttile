"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/19.jpg";

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
          Best Speed Frame Process in Ahmedabad, Gujarat, India and Asia : sky
          textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In the dynamic world of textile manufacturing, optimizing pre-spinning
          processes is essential for quality and efficiency. Sky Textiles, a
          leading textile business in Gujarat, pioneers the best speed frame
          process in Gujarat, ensuring high productivity and superior quality
          yarn production. From enhancing speed frame efficiency to optimizing
          drafting control in textiles, Sky Textiles is at the forefront of
          revolutionizing the industry in India and beyond.
        </Typography>
        <Stack gap={"10px"}>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            Speed Frame Process: A Critical Pre-Spinning Step
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            The speed frame process is crucial in preparing yarn for the
            spinning phase. It involves drafting, twisting, and winding the
            fibers into a roving, which serves as the intermediary product
            before final yarn spinning. Sky Textiles specializes in maximizing
            this process by integrating advanced technology and precision
            control.
          </Typography>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Best Speed Frame Process in Ahmedabad : With its state-of-the-art
              facility in Ahmedabad, Sky Textiles offers one of the best speed
              frame processes in the region. Advanced machinery and automated
              systems ensure that the roving production is consistent, reducing
              waste and enhancing overall product quality.
            </li>
            <li>
              Best Speed Frame Process in India : Across India, Sky Textiles
              stands out for its commitment to high speed frame efficiency. By
              leveraging cutting-edge automation and machinery, the company
              reduces human error and enhances output, making it a leader in
              textile innovation.
            </li>
            <li>
              Best Speed Frame Process in Asia : Sky Textiles is also recognized
              as a key player in Asia, setting benchmarks for pre-spinning
              optimization. By focusing on fine-tuning every aspect of the
              roving production process, Sky Textiles ensures that its clients
              receive the highest quality products with minimal waste.
            </li>
          </ul>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            fontWeight={"bold"}
          >
            Efficiency through Technology: Roving Production & Drafting Control
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            One of the standout features of Sky Textiles is its ability to
            maintain precise drafting control in textiles, which ensures
            consistency in yarn thickness and quality. Automation in textile
            machinery further enhances the production line, allowing for faster
            and more efficient manufacturing processes.
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Sky Textiles is your go-to partner for the best speed frame process
            in Gujarat and across India. With a focus on innovation and
            efficiency, the company continues to lead the industry in
            high-quality textile production.
          </Typography>
        </Stack>
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
