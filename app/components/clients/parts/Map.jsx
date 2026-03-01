"use client";

import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/Map.png";
import Tooltip from "@mui/material/Tooltip";
import building from "./assets/1.jpg";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

const locations = [
  { name: "USA", positionY: "40%", positionX: "67%" },
  { name: "Russia", positionY: "33%", positionX: "20%" },
  { name: "India", positionY: "47%", positionX: "17%" },
  { name: "Sri Lanka", positionY: "50%", positionX: "17%" },
  { name: "Singapore", positionY: "60%", positionX: "13%" },
];

export default function Map() {
  const [viewLocation, setViewLocation] = useState(-1);

  return (
    <Stack margin={{ md: "100px 0 0 0", sm: "15px 0 0 0" }}>
      <Typography
        fontSize={{
          xll: "2.5rem",
          xl: "2.3rem",
          lg: "2rem",
          md: "1.8rem",
          sm: "1.5rem",
        }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        We'd Love To Hear From You
      </Typography>
      <Typography color={"#F8575A"} textAlign={"center"}>
        We Have Offices And Teams All Around The World.
      </Typography>
      <Box
        margin={{
          xll: "45px auto",
          xl: "30px auto",
          lg: "40px auto",
          md: "30px auto",
          sm: "25px auto",
          xs: "0px auto",
        }}
        sx={{
          width: "90%",
          maxWidth: "900px",
          position: "relative",
          aspectRatio: "3 / 2", // Ensures the map maintains aspect ratio
          backgroundImage: `url(${map.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {viewLocation >= 0 ? (
          <Stack
            alignItems={"center"}
            width={"fit-content"}
            sx={{
              border: "1px solid rgba(0,0,0, 0.1)",
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "5px",
              position: "absolute",
              top: `${locations[viewLocation]?.positionY}`,
              right: `${locations[viewLocation]?.positionX}`,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${building.src})`,
                backgroundSize: "250%",
                backgroundPosition: "center center",
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginBottom: "5px",
              }}
            ></Box>
            <Typography fontSize={"1rem"}>
              Sky textiles India Pvt Ltd.
            </Typography>
            <Typography fontSize={"0.9rem"}>
              {locations[viewLocation]?.name || ""}
            </Typography>
          </Stack>
        ) : null}
        <Tooltip
          onMouseEnter={() => setViewLocation(2)}
          onMouseLeave={() => setViewLocation(-1)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "43%", // Use percentage values
              right: "27%",
            }}
          />
        </Tooltip>
        <Tooltip
          onMouseEnter={() => setViewLocation(1)}
          onMouseLeave={() => setViewLocation(-1)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "33%",
              right: "25%",
            }}
          />
        </Tooltip>
        <Tooltip
          onMouseEnter={() => setViewLocation(0)}
          onMouseLeave={() => setViewLocation(-1)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "40%",
              left: "25%",
            }}
          />
        </Tooltip>
        <Tooltip
          onMouseEnter={() => setViewLocation(3)}
          onMouseLeave={() => setViewLocation(-1)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "50%",
              right: "26%",
            }}
          />
        </Tooltip>
        <Tooltip
          onMouseEnter={() => setViewLocation(4)}
          onMouseLeave={() => setViewLocation(-1)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "60%",
              right: "17%",
            }}
          />
        </Tooltip>
      </Box>
    </Stack>
  );
}
