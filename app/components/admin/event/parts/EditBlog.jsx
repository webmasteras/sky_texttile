"use client";

import { useMemo, useRef, useState } from "react";
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
import { Stack } from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
const Jodit = dynamic(() => import("./Jodit"), { ssr: false });

export default function EditBlog({ setEditModalOpen, fetchDepartments, blog }) {
  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [slug, setSlug] = useState(blog?.slug || "");
  const [image, setImage] = useState(blog?.image || null);
  const [previewImage, setPreviewImage] = useState(blog?.image || null);
  const [isImageChanged, setIsImageChanged] = useState(false);

  // JoditEditor configuration

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setIsImageChanged(true);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  // API call to update the blog data
  const handleUpdateBlog = async () => {
    const imageData = new FormData();

    if (isImageChanged) {
      imageData.append("image", image);
    }

    const formData = {
      title,
      slug,
      content,
    };

    try {
      const response = await axios.post(
        `https://skytextiles.in/api/v1/event/update/${blog._id}`,
        formData,
        {
          headers: {},
        }
      );
      let imageResponse;
      if (isImageChanged) {
        imageResponse = await axios.post(
          `https://skytextiles.in/api/v1/event/update-image/${blog._id}`,
          imageData
        );
      }

      if (response.status === 200) {
        alert("Event updated successfully!");
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        alert("Failed to update the event.");
      }

      if (isImageChanged) {
        if (imageResponse.status === 200) {
          fetchDepartments();
          setEditModalOpen(false);
        } else {
          alert("Failed to update the image.");
        }
      }
    } catch (error) {
      console.error("Error updating event:", error);
      alert("An error occurred while updating the event.");
    }

    if (isImageChanged) {
      setIsImageChanged(false);
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>Edit Event</InnerContainerHead>
        <InnerContainerHeadSection column>
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Title</Label>
              <TextInput
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputSection>

            <InputSection width={"50%"}>
              <Label width={"100px"}>Slug</Label>
              <TextInput
                placeholder="Enter Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </InputSection>
          </Stack>

          <InputSection>
            <Label width={"100px"}>Image</Label>
            <TextInput type="file" onChange={handleImageChange} />
          </InputSection>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "100px", height: "100px", marginTop: "10px" }}
            />
          )}

          <InputSection>
            <Label width={"100px"}>Content</Label>
            <Jodit content={content} setContent={setContent} />
          </InputSection>

          <InputSection>
            <Label></Label>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall onClick={handleUpdateBlog}>
                Update
              </GreenButtonSmall>{" "}
              <BlueButtonSmall onClick={() => setEditModalOpen(false)}>
                Cancel
              </BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
