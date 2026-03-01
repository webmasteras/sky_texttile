"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import image1 from "../assets/blogs/1.jpg";
import image2 from "../assets/blogs/2.png";
import image3 from "../assets/blogs/3.png";

import image from "../assets/blogs/18.jpg";

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
          Best Raw Material Mixing Process in Ahmedabad, Gujarat, India and Asia
          : Sky Textiles
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          In the textile industry, the raw material mixing process plays a
          pivotal role in determining the final product's quality and
          performance. In Ahmedabad, where the textile sector is thriving,
          implementing the best mixing techniques can significantly enhance
          production efficiency and product quality.
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          The material blending process involves combining various raw materials
          to achieve the desired characteristics in the final textile product.
          Effective mixing methods are essential for achieving uniformity and
          consistency in fabric quality. Here are some key techniques and
          solutions that can help optimize the mixing process in your textile
          production.
        </Typography>
        <Stack gap={"10px"}>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Batch Mixing : This method involves mixing raw materials in
              specified quantities, allowing for precise control over the
              composition. Batch mixing is ideal for producing limited runs of
              specialized fabrics.
            </li>
            <li>
              Continuous Mixing : Unlike batch mixing, continuous mixing allows
              for a constant flow of materials, which is efficient for
              high-volume production. This technique enhances mixing efficiency,
              reducing turnaround times and increasing output.
            </li>
            <li>
              High-Intensity Mixing : This method utilizes advanced machinery to
              ensure thorough blending of materials. High-intensity mixers can
              effectively combine even the most challenging materials, ensuring
              a homogeneous mixture.
            </li>
            <li>
              Customized Blending Solutions : Each textile project may have
              unique requirements. Tailoring your blending solutions to meet
              specific needs can lead to better outcomes, whether you’re working
              with natural fibers or synthetic materials.
            </li>
            <li>
              Quality Control Measures : Implementing stringent quality control
              measures during the raw material prep stage ensures that only the
              best materials are mixed. Regular testing and monitoring can help
              maintain high standards throughout the mixing process.
            </li>
          </ul>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            By employing these techniques, manufacturers can achieve better
            material combinations that enhance fabric durability, appearance,
            and functionality. Investing in the right mixing equipment and
            processes is crucial for businesses in Ahmedabad looking to maintain
            a competitive edge in the textile market.
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            Understanding the best raw material mixing process is essential for
            any textile manufacturer. With the right techniques and a focus on
            quality, you can elevate your products and drive success in the
            vibrant textile industry of Ahmedabad. Sky Textiles exemplifies this
            commitment to excellence, utilizing innovative mixing methods to
            ensure superior fabric quality. By partnering with industry leaders
            like Sky Textiles, manufacturers can enhance their production
            processes and achieve outstanding results.
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
