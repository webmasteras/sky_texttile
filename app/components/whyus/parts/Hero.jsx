import { Stack, Typography } from "@mui/material";
import banner from "./assets/banner.jpg";

export default function Hero() {
  return (
    <Stack
      width={"100%"}
      height={{ md: "80vh", smm: "50vh", xs: "40vh" }}
      marginTop={"70px"}
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
      }}
    >
      <Stack
        color={"white"}
        width={"100%"}
        height={"100%"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Why us
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: ".8rem" }}
          width={{ md: "35%", xs: "80%" }}
          textAlign={"center"}
        >
          SKY Textiles delivers sustainable, high-quality products through
          eco-friendly practices, ethical labor, and transparency. With
          renewable energy and fair wages, we ensure responsible production from
          raw materials to finished garments.
        </Typography>
        <hr style={{ width: "30%", height: "1px", marginTop: "20px" }} />
      </Stack>
    </Stack>
  );
}
