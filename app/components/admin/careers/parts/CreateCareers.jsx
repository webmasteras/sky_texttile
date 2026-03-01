"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Stack } from "@mui/material";
import { InnerContainer, InnerContainerHeadSection, ModalContainer } from "@/app/styledComponents/admin/Container";
import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
import { InputSection, Label, TextInput } from "@/app/styledComponents/admin/Inputs";
import { GreenButtonSmall, BlueButtonSmall } from "@/app/styledComponents/admin/Buttons";
import axios from "axios";

const Jodit = dynamic(() => import("./Jodit"), { ssr: false });

export default function Createcareers({ setViewForm, fetchDepartments }) {
  const editor = useRef(null);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const formData = { title, type, location, description };

    try {
      const response = await axios.post(
        "https://skytextiles.in/api/v1/careers/create-careers",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.statusCode === 200 || response.data.status === "success") {
        alert("Career added successfully!");
        setViewForm(false);
        fetchDepartments();
      } else {
        console.log("Response:", response.data);
        alert("Failed to add Career. Check console.");
      }
    } catch (error) {
      console.error("Error adding career:", error.response?.data || error);
      alert("An error occurred. Check console for details.");
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width="80%">
        <InnerContainerHead>Add Career</InnerContainerHead>
        <InnerContainerHeadSection column>
          <Stack direction="row">
            <InputSection width="50%">
              <Label>Title</Label>
              <TextInput placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </InputSection>

            <InputSection width="50%">
              <Label>Type</Label>
              <TextInput placeholder="Enter Type" value={type} onChange={(e) => setType(e.target.value)} />
            </InputSection>
          </Stack>

          <InputSection width="50%">
            <Label>Location</Label>
            <TextInput placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </InputSection>

          <InputSection>
            <Label>Description</Label>
            <Jodit content={description} setContent={setDescription} />
          </InputSection>

          <InputSection>
            <Stack direction="row" gap="10px">
              <GreenButtonSmall onClick={handleSubmit}>Save</GreenButtonSmall>
              <BlueButtonSmall onClick={() => setViewForm(false)}>Cancel</BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
