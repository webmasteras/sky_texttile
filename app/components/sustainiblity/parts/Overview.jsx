import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import legacy from "./assets/legacy.png";
import yarn1 from "./assets/yarnUp.png";
import yarn2 from "./assets/yarnDown.png";
import cape from "./assets/cape.png";
import Strength from "./Strength";

export default function Overview() {
  return (
    <Stack>
      <Navbar />
      <Stack position={"relative"} gap={"20px"} margin={"60px 70px"}>
        <Box
          width={"200px"}
          height={"200px"}
          sx={{
            backgroundImage: `url(${yarn2.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "0px",
            right: "-30px",
          }}
        ></Box>
        <Box
          width={"200px"}
          height={"200px"}
          sx={{
            backgroundImage: `url(${yarn1.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            bottom: "0px",
            left: "-50px",
          }}
        ></Box>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Overview
        </Typography>
        <Typography
          width={"70%"}
          fontSize={"1rem"}
          margin={"0 auto"}
          textAlign={"center"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
        <Typography
          margin={"0 auto"}
          width={"90%"}
          textAlign={"center"}
          fontSize={"1rem"}
        >
          Sustainability And Innovation Is Engrained Into The Culture Of Maral
          Starting From Sustainability In Production Designs, Sustainable
          Practices In The Industry In Terms Of Standards And Certificates,
          Sustainable Business Models To Environmental Sustainability In The
          Textile Industry. It Dwells On Its Professional Strength While
          Ensuring Transparency In Information Sharing To The Satisfaction Of
          The Valued Consumers. We Understand At Marval That Consumers Of Today
          Are Better Informed And Increasingly Expect Ecologically And Socially
          Acceptable Products Along With Sustainable Solutions In The Industry.
          Increasingly, As Manufacturers Also We Are Committed To Tapping
          Innovation Potential And Promoting Sustainable Development
        </Typography>
        <Box
          height={"15vh"}
          width={"60%"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${cape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Stack>
      <Stack
        gap={"20px"}
        margin={"50px 0"}
        padding={{ md: "60px 70px", xs: "30px" }}
        backgroundColor={"#f9f9f9"}
      >
        <Typography
          fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Our Legacy
        </Typography>
        <Typography
          width={{ md: "80%" }}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          Founded and promoted by the Late Dr. Krishna Kumar Birla, Sutlej
          Textiles and Industries is today the flagship textiles company of the
          illustrious KK Birla Group.
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          Our roots date back to pre-Independence India, when Sutlej was set up
          as a composite textile mill at Okara as Sutlej Cotton Mills Limited in
          1934, in the undivided province of Punjab. Even in those times, it
          earned the distinction of being Asia’s largest textile mill. Despite
          the disruption in operations during the country’s independence
          movement during 1940’s & 50’s, the company was re-established in 1963
          as Rajasthan Textile Mills at Bhawanimandi in the Jhalawar district of
          Rajasthan, where it began production of cotton yarn and later
          diversified into synthetic blended yarn.
        </Typography>
        <Box
          width={{ md: "50%", xs: "100%" }}
          height={"55vh"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${legacy.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "10px",
          }}
        ></Box>
      </Stack>
      <Stack margin={"50px 70px"}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Our Goals
        </Typography>
        <Stack
          direction={{ md: "row" }}
          justifyContent={{ md: "center" }}
          marginTop={{ md: "50px", xs: "20px" }}
          position={"relative"}
        >
          <Stack
            width={{ md: "300px", xs: "200px" }}
            height={{ md: "300px", xs: "200px" }}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            sx={{
              border: "1px solid black",
              borderRadius: "50%",
              left: { md: "20px" },
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#FB5457",
                color: "white",
                border: "none",
                zIndex: "20",
              },
            }}
          >
            Vision
          </Stack>
          <Stack
            width={{ md: "300px", xs: "200px" }}
            height={{ md: "300px", xs: "200px" }}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            sx={{
              left: { md: "-20px" },
              top: { md: "0px", xs: "-40px" },
              border: "1px solid black",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#9C3FEB",
                color: "white",
                border: "none",
              },
            }}
          >
            Mission
          </Stack>
        </Stack>
      </Stack>
      <Strength />
      <Stack
        gap={"20px"}
        margin={{ md: "40px 70px", xs: "30px" }}
        marginBottom={"100px"}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Future Initiatives
        </Typography>
        <Typography
          width={{ md: "70%" }}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
        <Typography
          width={{ md: "90%" }}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          margin={"0 auto"}
          textAlign={"center"}
        >
          Sustainability And Innovation Is Engrained Into The Culture Of Maral
          Starting From Sustainability In Production Designs, Sustainable
          Practices In The Industry In Terms Of Standards And Certificates,
          Sustainable Business Models To Environmental Sustainability In The
          Textile Industry. It Dwells On Its Professional Strength While
          Ensuring Transparency In Information Sharing To The Satisfaction Of
          The Valued Consumers. We Understand At Marval That Consumers Of Today
          Are Better Informed And Increasingly Expect Ecologically And Socially
          Acceptable Products Along With Sustainable Solutions In The Industry.
          Increasingly, As Manufacturers Also We Are Committed To Tapping
          Innovation Potential And Promoting Sustainable Development
        </Typography>
        <Box
          height={"15vh"}
          width={"60%"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${cape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
