"use client";

import { Stack, Typography } from "@mui/material";
import CountUp from "react-countup";

export default function Project() {
  return (
    <Stack margin={"100px 70px"}>
      <Typography
        textAlign={"center"}
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
      >
        Project Details
      </Typography>
      <Stack direction={{ md: "row" }} justifyContent={"space-around"}>
        <Stack alignItems={"center"}>
          <CountUp
            start={0}
            end={250}
            suffix="+"
            useEasing={true}
            duration={1}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <Typography
                fontWeight={"bold"}
                fontSize={{ lg: "6rem", md: "4rem", xs: "6rem" }}
                ref={countUpRef}
              />
            )}
          </CountUp>
          <Typography textAlign={"center"}>
            text of the printing and typesetting.
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <CountUp
            start={0}
            end={50}
            suffix="+"
            useEasing={true}
            duration={1}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <Typography
                fontWeight={"bold"}
                fontSize={{ lg: "6rem", md: "4rem", xs: "6rem" }}
                ref={countUpRef}
              />
            )}
          </CountUp>
          <Typography textAlign={"center"}>
            text of the printing and typesetting.
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <CountUp
            start={0}
            end={200}
            suffix="+"
            useEasing={true}
            duration={1}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <Typography
                fontWeight={"bold"}
                fontSize={{ lg: "6rem", md: "4rem", xs: "6rem" }}
                ref={countUpRef}
              />
            )}
          </CountUp>
          <Typography textAlign={"center"}>
            text of the printing and typesetting.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
