import { Stack, Typography } from "@mui/material";

export default function Pdt() {
  return (
    <Stack margin={{ md: "100px 70px", xs: "30px" }} gap={"10px"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
      >
        Our <span style={{ color: "#FB5457" }}>Product</span>
      </Typography>
      <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>
        At SKY Textiles, we pride ourselves on being a fully vertical facility,
        providing a comprehensive one-stop solution for all our clients'
        needs—from cotton to finished garments. Our services encompass every
        stage, including design, development, sourcing, industrial production,
        and sales. Our mission is to empower clients by helping them innovate
        and explore new opportunities in their product lines. Through close
        collaboration, we deliver unique products that build trust and delight
        customers, making us a provider of the best textile products in
        Ahmedabad, Gujarat, India, and Asia.
      </Typography>
    </Stack>
  );
}
