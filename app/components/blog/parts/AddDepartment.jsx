"use client";

import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
import {
  BlueButtonSmall,
  GreenButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import {
  InnerContainer,
  InnerContainerHeadSection,
  ModalContainer,
} from "@/app/styledComponents/admin/Container";
import {
  InputSection,
  Label,
  TextInput,
} from "@/app/styledComponents/admin/Inputs";
import { Box, Stack } from "@mui/material";
import { useMemo, useRef, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const Jodit = dynamic(() => import("./Jodit"), { ssr: false });

export default function AddDepartment({ setViewForm, fetchDepartments }) {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [h1, seth1] = useState("")
  const [bold, setbold] = useState("");
  const [italic, setitalic] = useState("");
  const [h2, seth2] = useState("")
  const [metatitle, setmetatitle] = useState("")
const [description, setdescription] = useState("")
const [keywords, setkeywords] = useState("")
  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // API call to save the form data
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("slug", slug);
      formData.append("h1", h1);
      formData.append("h2", h2);
      formData.append("bold", bold);
      formData.append("italic", italic);
      formData.append("metatitle", metatitle);
      formData.append("description", description);
      formData.append("keywords", keywords);

      formData.append("image", image);

      const response = await axios.post(
        "https://skytextiles.in/api/v1/blog/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.statusCode === 200) {
        alert("Blog added successfully!");
        setViewForm(false);
        fetchDepartments();
      } else {
        alert("Failed to add Blog. Please try again.");
      }
    } catch (error) {
      console.error("Error adding department:", error);
      alert("An error occurred. Please check the console for details.");
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>Add Blog</InnerContainerHead>
        <InnerContainerHeadSection column>
          {/* Title Input */}
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Title</Label>
              <TextInput
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputSection>

            {/* Slug Input */}
            <InputSection width={"50%"}>
              <Label width={"100px"}>Slug</Label>
              <TextInput
                placeholder="Enter Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </InputSection>
          </Stack>
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>h1</Label>
              <TextInput
                placeholder="Enter h1"
                value={h1}
                onChange={(e) => seth1(e.target.value)}
              />
            </InputSection>
            <InputSection width={"50%"}>
              <Label width={"100px"}>h2</Label>
              <TextInput
                placeholder="Enter h2"
                value={h2}
                onChange={(e) => seth2(e.target.value)}
              />
            </InputSection>
          </Stack>
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Bold</Label>
              <TextInput
                placeholder="Enter Bold"
                value={bold}
                onChange={(e) => setbold(e.target.value)}
              />
            </InputSection>

            <InputSection width={"50%"}>
              <Label width={"100px"}>Italic</Label>
              <TextInput
                placeholder="Enter Italic"
                value={italic}
                onChange={(e) => setitalic(e.target.value)}
              />
            </InputSection>
          </Stack>
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Meta Title</Label>
              <TextInput
                placeholder="Enter Meta Title"
                value={metatitle}
                onChange={(e) => setmetatitle(e.target.value)}
              />
            </InputSection>

            <InputSection width={"50%"}>
              <Label width={"100px"}>description</Label>
              <TextInput
                placeholder="Enter description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </InputSection>
          </Stack>
          {/* Image Upload */}
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Image</Label>
              <TextInput type="file" onChange={handleImageChange} />
            </InputSection>
            <InputSection width={"50%"}>
              <Label width={"100px"}>keywords</Label>
              <TextInput
                placeholder="Enter keywords"
                value={keywords}
                onChange={(e) => setkeywords(e.target.value)}
              />
            </InputSection>
          </Stack>
          {/* Content Editor */}
          <InputSection>
            <Label width={"100px"}>Content</Label>
            <Jodit content={content} setContent={setContent} />
          </InputSection>

          {/* Action Buttons */}
          <InputSection>
            <Label></Label>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall onClick={handleSubmit}>Save</GreenButtonSmall>
              <BlueButtonSmall onClick={() => setViewForm(false)}>
                Cancel
              </BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
