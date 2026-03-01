import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Different from "./parts/Different";
import Process from "./parts/Process";
import Project from "./parts/Project";
import Idea from "./parts/Idea";

export default function Why() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Different />
      <Process />
      <Project />
      <Idea />
      <Footer />
    </Stack>
  );
}
