import { Box, Stack, Typography } from "@mui/material";
// import map from "./assets/map.gif";
import Image from "next/image";

export default function ({ mapRef }) {
  return (
    <Stack
      className="mapContainer"
      margin={{ md: "300px 0 100px 0", xs: "30px 0" }}
      ref={mapRef}
    >
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.5rem" }}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        260+ Projects Delivered
      </Typography>
      <Typography
        fontSize={{ md: "1.5rem", xs: "0.9rem" }}
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        and counting more...
      </Typography>
      <Box
        position={"relative"}
        width={"100%"}
        height={{ md: "90vh", xs: "50vh" }}
      >
        <Image src="/assets/map.gif" alt="" fill objectFit="contain" />
      </Box>
    </Stack>
  );
}
