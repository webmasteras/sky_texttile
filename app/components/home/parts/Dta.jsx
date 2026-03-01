import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Dta() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      margin={{ md: "70px", xs: "30px" }}
      gap={"50px"}
    >
      <Box
        width={"50vw"}
        height={"60vh"}
        display={{ md: "block", xs: "none" }}
        position={"relative"}
      >
        <Image src="/assets/wool.gif" alt="" fill objectFit="contain" />
      </Box>
      <Stack>
        <Typography
          fontWeight={"bold"}
          fontSize={{ lg: "4.5rem", smm: "3rem", xs: "2rem" }}
          lineHeight={"1.2"}
        >
          Quality
          <br />
          Service
          <br />
          Transparency
        </Typography>
        <Typography
          fontSize={{ md: "1.5rem", xs: "1.2rem" }}
          marginTop={"10px"}
        >
          Experience exceptional quality, reliable service, <br/> and full
          transparency in every step we take to bring you the best quality
          textiles in the industry.
        </Typography>
      </Stack>
    </Stack>
  );
}
