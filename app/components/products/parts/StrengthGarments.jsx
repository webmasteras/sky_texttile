"use client";

import { Box, Stack, Typography } from "@mui/material";
import { data } from "./strengthDataGarments";
import Image from "next/image";

export default function Strength() {
  return (
    <Stack
      margin={{ md: "50px 0", xs: "30px 0" }}
      padding={{ md: "70px 70px", xs: "30px" }}
      gap={"50px"}
      backgroundColor={"#f9f9f9"}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Highlights
      </Typography>
      <Stack
        direction={"row"}
        gap={"60px"}
        sx={{ flexWrap: "wrap", justifyContent: "space-between" }}
      >
        {data.map((el) => {
          return (
            <Stack
              width={{ lg: "27%", xs: "100%" }}
              margin={"0 auto"}
              gap={"15px"}
            >
              <Image src={el.img} alt="" width={100} height={90} />
              <Typography color={"#FB5457"} fontSize={"1.8rem"}>
                {el.head}
              </Typography>
              <Typography fontSize={"1.2rem"}>{el.data}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
