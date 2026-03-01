import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/skyBanner.png";
import tick from "./assets/tick.png";
import gifImage from "./assets/someGif.png";
import graph from "./assets/graph.png";
import happyMan from "./assets/happyMan.png";
import bannerMobile from "./assets/skyBannerMobile.png";
import Image from "next/image";

export default function SkyTextiles() {
  return (
    <Stack>
      <Navbar />
      <Stack
        height={{ md: "80vh" }}
        width={"100%"}
        sx={{
          backgroundImage: { md: `url(${banner.src})` },
          backgroundSize: "cover",
          backgroundPosition: { lg: "center right", md: "center center" },
        }}
      >
        <Stack
          width={{ md: "40%" }}
          height={"100%"}
          gap={"15px"}
          margin={{ md: "0px 70px", xs: "30px" }}
          justifyContent={"center"}
          textAlign={{ md: "left", xs: "center" }}
        >
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            lineHeight={"0.3"}
            fontWeight={"bold"}
          >
            Get The Best
          </Typography>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Product Solution
          </Typography>
          <Typography fontSize={{ md: "1.4rem", xs: "1rem" }}>
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout.
          </Typography>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              width: "fit-content",
              padding: "10px 25px",
              borderRadius: "6px",
              fontSize: "1.2rem",
              cursor: "pointer",
              alignSelf: "center",
            }}
          >
            Get Started
          </button>
        </Stack>
      </Stack>
      <Stack
        display={{ md: "none", xs: "flex" }}
        height={"40vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${bannerMobile.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></Stack>
      <Stack margin={{ md: "100px 0px", xs: "30px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Bringing Values To Clients
        </Typography>
        <Typography
          width={{ md: "70%" }}
          fontSize={{ md: "1rem", xs: "0.7" }}
          textAlign={"center"}
          margin={"10px auto"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations.
        </Typography>
        <Stack
          width={{ md: "500px", xs: "250px" }}
          height={{ md: "500px", xs: "250px" }}
          margin={{ md: "0px auto" }}
          marginTop={{ md: "100px", xs: "30px" }}
          sx={{
            backgroundImage: `url(${gifImage.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
      </Stack>
      <Stack
        backgroundColor={"#f9f9f9"}
        padding={{ md: "50px 70px", xs: "30px" }}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          lineHeight={"0.6"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          We Create
        </Typography>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Super-Awesome Designs
        </Typography>
        <Typography
          width={{ md: "70%" }}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
          margin={"10px auto"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations.
        </Typography>
        <Stack
          margin={"40px 0"}
          direction={"row"}
          gap={"40px"}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <Stack
            width={{ md: "45%", xs: "100%" }}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={{ md: "1rem", xs: "0.6rem" }}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={{ md: "45%", xs: "90%" }}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={{ md: "1rem", xs: "0.6rem" }}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={{ md: "45%", xs: "90%" }}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={{ md: "1rem", xs: "0.6rem" }}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={{ md: "45%", xs: "90%" }}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={{ md: "1rem", xs: "0.6rem" }}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack color={"white"} backgroundColor={"#F8575A"} padding={"50px"}>
        <Typography
          fontWeight={"300"}
          lineHeight={"0.9"}
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
        >
          The Best Multipurpose
        </Typography>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Free Responsive Landing Page
        </Typography>
        <Typography
          textAlign={"center"}
          marginTop={"10px"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          Mordern, Lightning, Fast & Easily Customize
        </Typography>
        <button
          style={{
            width: "200px",
            borderRadius: "3px",
            padding: "10px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            margin: "30px auto",
          }}
        >
          Get Started
        </button>
      </Stack>
      <Stack
        direction={{ md: "row" }}
        gap={"35px"}
        backgroundColor={"#f9f9f9"}
        padding={{ md: "70px", xs: "30px" }}
        alignItems={"center"}
      >
        <Stack width={{ md: "30%" }} gap={"20px"}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          >
            Why Us
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
            We At Maral Overseas Limited Endeavor To Believe In The Idea Of
            Sustainability That Is Achieved When People On Earth Can Live Well
            Without Compromising The Quality For Future Generations.
          </Typography>
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "1px solid black",
              backgroundColor: "transparent",
            }}
          >
            Get Started
          </button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={{ md: "center" }}
          gap={"40px"}
          width={{ md: "70%" }}
          flexWrap={"wrap"}
        >
          <Stack
            width={{ md: "45%", xs: "90%" }}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
              Sample Headline
            </Typography>
            <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "fit-content",
                padding: "10px 20px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
          <Stack
            width={{ md: "45%", xs: "90%" }}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
              Sample Headline
            </Typography>
            <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "fit-content",
                padding: "10px 20px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
          <Stack
            width={{ md: "45%", xs: "90%" }}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
              Sample Headline
            </Typography>
            <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "fit-content",
                padding: "10px 20px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
          <Stack
            width={{ md: "45%", xs: "90%" }}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}>
              Sample Headline
            </Typography>
            <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "fit-content",
                padding: "10px 20px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={{ md: "row" }}
        gap={"20px"}
        backgroundColor={"#f9f9f9"}
        padding={{ lg: "50px 70px", xs: "30px" }}
        marginBottom={"70px"}
      >
        <Stack width={{ md: "60%" }}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          >
            We Are Passionate About
          </Typography>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Solving Problems
          </Typography>
          <Stack margin={{ lg: "40px 0" }}>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Community
                </Typography>
                <Typography fontSize={"1rem"}>
                  It is a Long Established Fact That a Reader Will Be Distracted
                  By The Readable Content of a Page When Looking At Its Layout.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Curiosity
                </Typography>
                <Typography fontSize={"1rem"}>
                  It is a Long Established Fact That a Reader Will Be Distracted
                  By The Readable Content of a Page When Looking At Its Layout.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Collaboration
                </Typography>
                <Typography fontSize={"1rem"}>
                  It is a Long Established Fact That a Reader Will Be Distracted
                  By The Readable Content of a Page When Looking At Its Layout.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          height={"90vh"}
          width={{ md: "40%" }}
          sx={{
            backgroundImage: `url(${happyMan.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "30px",
          }}
        ></Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
