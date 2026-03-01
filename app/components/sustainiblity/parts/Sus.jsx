import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import gif from "./assets/susgif.gif";

export default function Sus() {
  return (
    <Stack
      direction={{ md: "row", xs: "column-reverse" }}
      margin={{ md: "100px 70px", xs: "50px 30px" }}
    >
      <Stack width={{ md: "60%", xs: "100%" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Sustainability
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Founded on October 2020,
          under the Companies Act of 2013 (CIN: U17299GJ2020PTC116984), SKY
          Textiles is headquartered in Gujarat B-105, Westgate Tower Unit 2,Nr.
          YMCA Club, S.G. HIGHWAY ,Makarba , AHMEDABAD- 380015. Our facility is
          equipped with the latest technology, including 27,360 spindles for
          producing high-quality cotton threads in a range of counts
        </Typography>
      </Stack>
      <Stack
        position={"relative"}
        width={{ md: "40%", xs: "100%" }}
        height={"300px"}
      >
        <Image
          src={gif}
          alt=""
          fill
          objectFit="contain"
          objectPosition="bottom"
        />
      </Stack>
    </Stack>
  );
}
