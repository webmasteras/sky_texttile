"use client";
import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Hero from "./parts/Hero";
import Dta from "./parts/Dta";
import BusinessVerticles from "./parts/BusinessVerticles";
import Team from "./parts/Team";
import Reviews from "./parts/Review";
import Form from "./parts/Form";
import Footer from "../footer/Footer";
import Map from "./parts/Map";
import Hover from "./parts/Hover";
import Enduro from "./parts/EnduroPulse";
import { useRef } from "react";

export default function Home() {
  const mapRef = useRef(null);
  return (
    <Box>
      <Navbar />
      <Hero />
      <Dta />
      <BusinessVerticles mapRef={mapRef} />
      <Map mapRef={mapRef} />
      <Hover />
      <Team />
      <Reviews />
      <Box height={{ md: "10vh" }}></Box>
      <Enduro />
      <Form />
      <Footer />
    </Box>
  );
}
