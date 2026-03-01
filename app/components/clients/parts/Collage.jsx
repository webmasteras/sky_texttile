import { Box, Stack, Typography } from "@mui/material";
import client from "./assets/client1.png";

import logo1 from "./assets/clients/1.png";
import logo2 from "./assets/clients/2.png";
import logo3 from "./assets/clients/3.png";
import logo4 from "./assets/clients/4.png";
import logo5 from "./assets/clients/5.png";
import logo6 from "./assets/clients/6.jpg";

export default function Collage() {
  return (
    <Stack
      gap={"50px"}
      margin={{ md: "100px 70px 0 70px", xs: "50px 30px 0 30px" }}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Here are some of our Clients
      </Typography>
      <Stack gap={"30px"}>
        <Stack
          flexWrap={"wrap"}
          direction={{ md: "row", xs: "column" }}
          justifyContent={"center"}
          gap="20px"
        >
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            backgroundColor={"#F9F9F9"}
            sx={{
              backgroundImage: `url(${logo1.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            backgroundColor={"#F9F9F9"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${logo2.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            backgroundColor={"#F9F9F9"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${logo3.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            backgroundColor={"#F9F9F9"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${logo4.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            backgroundColor={"#F9F9F9"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${logo5.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            backgroundColor={"#F9F9F9"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${logo6.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
