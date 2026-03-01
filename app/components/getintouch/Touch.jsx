import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Map from "./parts/Map";
// import Form from "./parts/Form";
import Hero from "./parts/Hero";
import Form from "./parts/EnquiryForm";

export default function Touch() {
  return (
    <Stack>
      <Navbar/>
      <Hero />
      <Map />
      <Form />
      <Footer/>
    </Stack>
  );
}
