"use client";
import { apiV1Url } from "@/app/constants/api";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const getTrasformStyles = (isHovered) => ({
  transform: `translateY(${isHovered ? "-100%" : "0"})`,
});

export default function Form({ setShowForm }) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [notice, setNotice] = useState("");
  const [file, setFile] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Append key-value pairs to FormData
    form.append("FirstName", name);
    form.append("LastName", lastName);
    form.append("PhoneNumber", mobile);
    form.append("Email", email);
    form.append("Position", position);
    form.append("NoticePeriod", notice);

    if (file !== "") {
      form.append("file", file); // Ensure 'file' is a File object
    }

    try {
      const response = await axios.post(
        apiV1Url("/careersForm/fill-form"),
        form
      );
      setShowForm(false);
      alert("Form submitted!!!");
    } catch (error) {
      console.error("Error fetching data:", error);
      setShowForm(false);
      alert("Something went wrong please try again!!!");
    }
  };

  const sendEmail = () => {
    const formData = {
      to_name: "Sky Textiles",
      from_name: name,
      email: email,
      message: `Email: ${email}, Position: ${position}, Contacts: ${mobile}, Notice Period: ${notice}`,
    };

    emailjs
      .send(
        "service_f2qco9g", // Replace with your EmailJS service ID
        "template_aunmm9w", // Replace with your EmailJS template ID
        formData, // JSON object containing the data to be sent
        "TDN-rIHfr7zAx4VqN"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log("Failed to send email:", error.text);
        alert("Failed to send email.");
      });
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
      backgroundColor={"white"}
      padding={"20px"}
      borderRadius={"5px"}
    >
      <Typography
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        Be a part of our family.
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
            required
            label="First name"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            required
            label="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            required
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            required
            label="Phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
            required
            label="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            required
            label="Notice Period"
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
              padding: "10px",
            }}
          >
            Upload your resume{" "}
          </Typography>
          <TextField
            variant="outlined"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={"20px"} sx={{ margin: "0 auto" }}>
        <button
          style={{
            color: "black",
            backgroundColor: "white",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            width: "fit-content",
            cursor: "pointer",
            outline: "none",
            border: "1px solid black",
          }}
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            width: "fit-content",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onClick={handleSubmitForm}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>Apply</span>
            <span style={getTrasformStyles(isHovered)}>Apply</span>
          </span>
        </button>
      </Stack>
    </Stack>
  );
}
