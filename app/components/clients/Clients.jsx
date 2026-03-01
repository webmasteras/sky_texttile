import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Collage from "./parts/Collage";
import Reviews from "./parts/Review";
import Map from "./parts/Map";
import Hover from "./parts/Hover";

export default function Clients() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Hover />

      {/* <Collage /> */}
      <Reviews />
      <Map />
      <Footer />
    </Stack>
  );
}
