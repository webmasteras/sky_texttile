"use client";
import { apiV1Url } from "@/app/constants/api";
import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const getTrasformStyles = (isHovered) => ({
  transform: `translateY(${isHovered ? "-100%" : "0"})`,
});
const formData = {
  FirstName: "",
  LastName: "",
  Email: "",
  PhoneNumber: "",
  CompanyName: "",
  Category: "",
  Message: "",
};

export default function Form() {
  const [isHovered, setIsHovered] = useState(false);
  const [form, setForm] = useState(formData);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        apiV1Url("/contact/form"),
        form
      );
      // console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    >
      <Typography
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        Got a Project? Let's talk
      </Typography>
      <Typography
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
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
          sx={{
            width: "100%",
          }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
        >
          <TextField
            variant="outlined"
            label="First name"
            value={form.FirstName}
            onChange={(e) => setForm({ ...form, FirstName: e.target.value })}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Last name"
            value={form.LastName}
            onChange={(e) => setForm({ ...form, LastName: e.target.value })}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Email address"
            value={form.Email}
            onChange={(e) => setForm({ ...form, Email: e.target.value })}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Phone"
            value={form.PhoneNumber}
            onChange={(e) => setForm({ ...form, PhoneNumber: e.target.value })}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Company name"
            onChange={(e) => setForm({ ...form, CompanyName: e.target.value })}
            value={form.CompanyName}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Category"
            onChange={(e) => setForm({ ...form, Category: e.target.value })}
            value={form.Category}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <TextField
          multiline
          rows={4}
          label="Message"
          value={form.Message}
          onChange={(e) => setForm({ ...form, Message: e.target.value })}
          sx={{
            width: "100%",
          }}
        />
      </Stack>
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "10px 25px",
          borderRadius: "5px",
          fontWeight: "bold",
          width: "fit-content",
          margin: "0 auto",
          cursor: "pointer",
          outline: "none",
          border: "none",
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={(e) => handleSubmitForm(e)}
      >
        <span className="fancy-button-text-container">
          <span style={getTrasformStyles(isHovered)}>Contact</span>
          <span style={getTrasformStyles(isHovered)}>Contact</span>
        </span>
      </button>
    </Stack>
  );
}
