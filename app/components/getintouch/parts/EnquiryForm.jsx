"use client";
import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import left from "./assets/left.svg";
import right from "./assets/right.svg";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactUs = async () => {
    const data = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      Email: formData.email,
      PhoneNumber: formData.phone,
      CompanyName: formData.companyName,
      Category: formData.category,
      Message: formData.message,
    };

    try {
      const response = await fetch(
        "https://skytextiles.in/api/v1/contact/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        category: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Stack
      margin={{
        xll: "70px",
        xl: "60px",
        lg: "60px",
        md: "50px",
        smm: "45px",
        sm: "30px",
      }}
      gap={"10px"}
      sx={{ position: "relative" }}
    >
      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          backgroundImage: `url(${left.src})`,
          backgroundSize: "contain",
          width: { lg: "200px", md: "150px" },
          height: { lg: "200px", md: "150px" },
          right: "0",
          bottom: "0",
        }}
      />
      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          backgroundImage: `url(${right.src})`,
          backgroundSize: "contain",
          width: { lg: "200px", md: "150px" },
          height: { lg: "200px", md: "150px" },
          left: "0",
          bottom: "0",
        }}
      />
      <Typography
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        Got a Project? Let's talk
      </Typography>
      <Typography
        sx={{ color: "#D88684", textAlign: "center", fontWeight: "bold" }}
      >
        Get a Quote Immediately Upon Form Submission
      </Typography>

      <Stack
        width={{ xll: "60vw", smm: "60vw", sm: "none" }}
        gap={"10px"}
        alignItems={"center"}
        margin={{ xll: "30px auto", smm: "30px auto", sm: "0px" }}
      >
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          sx={{ width: "100%" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
        >
          <TextField
            variant="outlined"
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            sx={{ width: { xll: "50%", smm: "50%", sm: "100%" } }}
          />
          <TextField
            variant="outlined"
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            sx={{ width: { xll: "50%", smm: "50%", sm: "100%" } }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{ width: "100%" }}
        >
          <TextField
            variant="outlined"
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ width: { xll: "50%", smm: "50%", sm: "100%" } }}
          />
          <TextField
            variant="outlined"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{ width: { xll: "50%", smm: "50%", sm: "100%" } }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{ width: "100%" }}
        >
          <TextField
            variant="outlined"
            label="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            sx={{ width: { xll: "50%", smm: "50%", sm: "100%" } }}
          />
          <TextField
            variant="outlined"
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            sx={{ width: { xll: "50%", smm: "50%", sm: "100%" } }}
          />
        </Stack>
        <TextField
          multiline
          rows={4}
          maxRows={4}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          sx={{ width: "100%" }}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{
          width: "200px",
          margin: "auto",
          backgroundColor: "#FB5457",
          cursor: "pointer",
        }}
        onClick={handleContactUs}
      >
        Send Request
      </Button>
    </Stack>
  );
}
