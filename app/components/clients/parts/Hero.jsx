import { Box, Stack, Typography } from "@mui/material";
import girl from "./assets/wavingGirl.gif";
import Image from "next/image";

export default function Hero() {
  return (
    <Stack
      alignItems={"center"}
      backgroundColor={"#FBFBFB"}
      height={"110vh"}
      width={"100%"}
      overflow={"hidden"}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        margin={"130px 0 10px 0"}
      >
        Clients
      </Typography>
      <Typography
        fontSize={{ lg: "1.5rem", smm: "1.2rem", xs: "0.9rem" }}
        width={{ md: "60vw", xs: "80%" }}
        textAlign={"center"}
        margin={"0 auto"}
      >
        At SKY Textiles, we prioritize our clients by providing complete
        transparency, exceptional service, and unmatched quality. From
        production to delivery, we keep clients informed at every step, ensuring
        a seamless experience. Our commitment to excellence guarantees that
        every product meets the highest standards, building trust and
        long-lasting partnerships.
      </Typography>
      <Box
        height={"50vh"}
        width={{ md: "30%", xs: "90%" }}
        sx={{
          backgroundImage: `url(${girl.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></Box>
      {/* <Image src={girl} alt="" height={450} width={450} /> */}
    </Stack>
  );
}
