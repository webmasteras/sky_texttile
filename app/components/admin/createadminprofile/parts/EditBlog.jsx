"use client"
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

  const [h1, seth1] = useState(blog?.h1||"");
  const [h2, seth2] = useState(blog?.h2||"");
  const [bold, setbold] = useState(blog?.bold || "");
  const [italic, setitalic] = useState(blog?.italic || "");
  const [metatitle, setmetatitle] = useState(blog?.metatitle||"");
  const [description, setdescription] = useState(blog?.description||"");
  const [keywords, setkeywords] = useState(blog?.keywords||"");
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
      h1,
      h2,
      bold,
      italic,
      metatitle,
      description,
    };

    try {
      const response = await axios.post(
        `https://skytextiles.in/api/v1/blog/update/${blog._id}`,
        formData,
        {
          headers: {},
        }
      );
      let imageResponse;
      if (isImageChanged) {
        imageResponse = await axios.post(
          `https://skytextiles.in/api/v1/blog/update-image/${blog._id}`,
          imageData
        );
      }

      if (response.status === 200) {
        alert("Blog updated successfully!");
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        alert("Failed to update the blog.");
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
      console.error("Error updating blog:", error);
      alert("An error occurred while updating the blog.");
    }

    if (isImageChanged) {
      setIsImageChanged(false);
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>Edit Blog</InnerContainerHead>
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
                placeholder="Enter bold"
                value={bold}
                onChange={(e) => setbold(e.target.value)}
              />
            </InputSection>

            <InputSection width={"50%"}>
              <Label width={"100px"}>Italic</Label>
              <TextInput
                placeholder="Enter italic"
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
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Image</Label>
              <TextInput type="file" onChange={handleImageChange} />
            </InputSection>
            {/* {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            )} */}
            <InputSection width={"50%"}>
              <Label width={"100px"}>keywords</Label>
              <TextInput
                placeholder="Enter keywords"
                value={keywords}
                onChange={(e) => setkeywords(e.target.value)}
              />
            </InputSection>
          </Stack>

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
