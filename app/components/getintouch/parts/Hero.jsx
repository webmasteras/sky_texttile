import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import gmail from "./assets/Gmail.gif";

export default function Hero() {
  return (
    <Stack
      margin={{
        md: "150px 70px",
        smm: "100px 20px 50px 20px",
        xs: "100px 20px 40px 20px",
      }}
      marginBottom={"50px"}
      justifyContent={"space-between"}
      direction={{ md: "row" }}
      alignItems={"center"}
    >
      <Stack width={{ md: "40%" }} margin={"0 auto"}>
        <Typography
          fontSize={{
            xl: "5rem",
            lg: "4rem",
            md: "3rem",
            smm: "2.5rem",
            sm: "2.2rem",
          }}
          fontWeight={"bold"}
        >
          Let's <br /> Create <br /> Experiences!
        </Typography>
        <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
          Let's talk.
        </Typography>
      </Stack>
      {/* <Stack
        position={{ md: "relative" }}
        width={{ md: "60%", xs: "100%" }}
        height={{ md: "50vh", xs: "30vh" }}
      >
        <Image src={gmail} alt="" fill objectFit="contain" />
      </Stack> */}
      <Box display={{ md: "none" }}>
        <Image src={gmail} alt="" width={350} height={80} />
      </Box>
      <Box display={{ md: "block", xs: "none" }}>
        <Image src={gmail} alt="" width={600} height={140} />
      </Box>
    </Stack>
  );
}
