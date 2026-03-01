import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/csrBanner.jpg";
import women from "./assets/women.jpg";

import sl from "./assets/sl.png";
import sl2 from "./assets/sl2.png";
import stethoscope from "./assets/stethoscope.png";
import community from "./assets/communityEngagement.png";
import labour from "./assets/labour.png";
import pine from "./assets/pine.png";

export default function Csr() {
  return (
    <Stack>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          width: "100%",
          height: { lg: "90vh", smm: "50vh", xs: "30vh" },
          marginTop: "80px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Stack margin={{ md: "100px 0 0 0", xs: "30px" }}>
        <Typography
          width={{ md: "80%" }}
          textAlign={"center"}
          margin={"0 auto"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          Commitment to ethical and sustainable business practices that
          positively impact society and the environment. This includes
          initiatives such as reducing carbon emissions through renewable
          energy, minimizing waste through recycling, ensuring fair labor
          practices, and supporting community development. SKY Textiles focuses
          on responsible sourcing of materials, sustainable production methods,
          and contributing to the well-being of the communities where it
          operates, while maintaining transparency and ethical standards
          throughout its supply chain.
        </Typography>
        <Stack
          margin={{ md: "200px", xs: "200px 0px 200px 0px" }}
          position={"relative"}
        >
          <Box
            sx={{
              backgroundImage: `url(${sl.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: { md: "300px", xs: "150px" },
              height: { md: "150px", xs: "75px" },
              position: "absolute",
              bottom: "-100px",
              left: { md: "-100px", xs: "0" },
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${sl2.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: { md: "200px", xs: "100px" },
              height: { md: "200px", xs: "100px" },
              position: "absolute",
              right: { md: "-100px", xs: "0" },
              bottom: { md: "-100px", xs: "100%" },
            }}
          ></Box>
          <Typography
            fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Development CSR <br /> at SKY Textile
          </Typography>
          <Typography
            fontSize={{ md: "1rem", xs: "0.8rem" }}
            textAlign={"center"}
            width={{ md: "90%" }}
            margin={{ md: "30px auto", xs: "10px 0" }}
          >
            SKY Textiles is committed to fostering community development through
            its CSR initiatives. We offer skill development programs that
            empower employees and local community members, enhancing their job
            prospects. By prioritizing local employment, we contribute to
            economic growth and support families. Additionally, we collaborate
            with local entrepreneurs, providing resources and mentorship to
            promote innovation. Our investment in community infrastructure,
            including education, clean water, and health services, ensures a
            better quality of life. Through these efforts, SKY Textiles drives
            sustainable development and strengthens the communities where we
            operate.
          </Typography>
        </Stack>
        <Stack margin={{ md: "0 200px", xs: "0" }} position={"relative"}>
          <Box
            sx={{
              backgroundImage: `url(${stethoscope.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: { md: "300px", xs: "150px" },
              height: { md: "300px", xs: "150px" },
              position: "absolute",
              bottom: { md: "-150px", xs: "-75px" },
              left: { md: "-100px", xs: "0" },
            }}
          ></Box>
          <Typography
            textAlign={"center"}
            fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
            fontWeight={"bold"}
          >
            Health
          </Typography>
          <Typography
            fontSize={{ md: "1rem", xs: "0.8rem" }}
            textAlign={"center"}
            margin={"30px auto"}
          >
            At SKY Textiles, we prioritize health and well-being through our
            Corporate Social Responsibility initiatives. We maintain safe
            working conditions and provide comprehensive health services,
            including regular check-ups and health insurance. Our commitment
            extends to mental health support, offering counseling and wellness
            programs for our employees. Additionally, we engage in community
            health initiatives, organizing free medical camps and partnering
            with local organizations to improve healthcare access in underserved
            areas. By focusing on workplace and community health, SKY Textiles
            strives to enhance the quality of life for our employees and the
            communities we serve.
          </Typography>
        </Stack>
        <Stack
          direction={{ md: "row" }}
          gap={{ md: "100px", xs: "30px" }}
          margin={{ md: "150px 100px 0 100px", xs: "130px 20px 0 20px" }}
        >
          <Stack width={{ md: "60%" }}>
            <Typography color="#FB5457" fontSize={{ md: "1.3rem", xs: "1rem" }}>
              Community Engagement
            </Typography>
            <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>
              SKY Textiles is committed to uplifting the communities where we
              operate by providing local employment opportunities, supporting
              educational and skill development initiatives, and fostering
              long-term community growth.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${community.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: { md: "300px", xs: "150px" },
              height: { md: "300px", xs: "150px" },
            }}
          ></Stack>
        </Stack>
        <Stack
          direction={{ md: "row-reverse" }}
          gap={{ md: "100px", xs: "30px" }}
          margin={{ md: "150px 100px 0 100px", xs: "0 20px 0 20px" }}
        >
          <Stack width={{ md: "60%" }}>
            <Typography color="#FB5457" fontSize={{ md: "1.3rem", xs: "1rem" }}>
              Fair Labour Practices
            </Typography>
            <Typography
              fontSize={{ md: "1rem", xs: "0.8rem" }}
              textAlign={{ md: "right" }}
            >
              We uphold the highest standards of labor rights and employee
              well-being, certified by global organizations such as WRAP, SEDEX,
              and SLCP. SKY Textiles promotes fair wages, safe working
              conditions, and equal opportunities for all employees.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${labour.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: { md: "300px", xs: "150px" },
              height: { md: "300px", xs: "150px" },
            }}
          ></Stack>
        </Stack>
        <Stack
          direction={{ md: "row" }}
          gap={{ md: "100px", xs: "30px" }}
          margin={{ md: "150px 100px 0 100px", xs: "0 20px 0 20px" }}
        >
          <Stack width={{ md: "60%" }}>
            <Typography color="#FB5457" fontSize={{ md: "1.3rem", xs: "1rem" }}>
              Environmental Sustainability
            </Typography>
            <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>
              We actively reduce our environmental impact through renewable
              energy investments, such as solar power, and by implementing
              energy-efficient production processes. Our dedication to
              sustainability extends to using eco-friendly materials, minimizing
              water consumption through advanced recycling technologies, and
              reducing waste by adhering to the 5 R’s—Reduce, Reuse, Recycle,
              Refuse, and Recover.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${pine.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: { md: "300px", xs: "150px" },
              height: { md: "300px", xs: "150px" },
            }}
          ></Stack>
        </Stack>
        <Stack margin={{ md: "100px 200px", xs: "50px 0 0 0" }} position={"relative"} gap={"20px"}>
          <Box
            sx={{
              backgroundImage: `url(${women.src})`,
              width: "100%",
              height: { lg: "60vh", smm: "50vh", xs: "30vh" },
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Typography
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
          >
            Women Empowerment <br /> at SKY Textile
          </Typography>
          <Typography
            fontSize={{ md: "1rem", xs: "0.8rem" }}
            textAlign={"center"}
            margin={"30px auto"}
          >
            At SKY Textiles, 70% of our workforce is composed of women,
            reflecting our strong commitment to women’s empowerment. We actively
            promote gender equality by providing equal opportunities, fair
            wages, and leadership development programs for women. Through skills
            training, education, and mentorship, we empower women to take on key
            roles across all levels of our organization. Additionally, we create
            a safe and supportive work environment that fosters personal and
            professional growth. SKY Textiles is proud to contribute to the
            economic and social upliftment of women, driving positive change
            within our industry and communities.
          </Typography>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
