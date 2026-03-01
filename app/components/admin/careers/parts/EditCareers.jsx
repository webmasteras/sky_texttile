"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Stack } from "@mui/material";
import { InnerContainer, InnerContainerHeadSection, ModalContainer } from "@/app/styledComponents/admin/Container";
import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
import { InputSection, Label, TextInput } from "@/app/styledComponents/admin/Inputs";
import { GreenButtonSmall, BlueButtonSmall } from "@/app/styledComponents/admin/Buttons";
import axios from "axios";

const Jodit = dynamic(() => import("./Jodit"), { ssr: false });

export default function EditCareer({ careerData, setEditModalOpen, fetchDepartments }) {
  const editor = useRef(null);

  const [editData, setEditData] = useState({
    title: "",
    type: "",
    location: "",
    description: "",
  });

  const [editLoading, setEditLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    if (careerData) {
      setEditData({
        title: careerData.title || "",
        type: careerData.type || "",
        location: careerData.location || "",
        description: careerData.description || "",
      });
    }
  }, [careerData]);

  const handleEditSubmit = async () => {
    setEditLoading(true);
    setAlert({ type: "", message: "" });

    try {
      const res = await axios.put(
        `https://skytextiles.in/api/v1/careers/updateById?id=${careerData._id}`,
        editData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.statusCode === 200) {
        setAlert({ type: "success", message: "Career updated successfully!" });
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        setAlert({ type: "error", message: "Failed to update career." });
        console.log("Response:", res.data);
      }
    } catch (err) {
      console.error("Error updating career:", err.response?.data || err);
      setAlert({ type: "error", message: "Error updating career." });
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width="80%">
        <InnerContainerHead>Edit Career</InnerContainerHead>
        <InnerContainerHeadSection column>
          <Stack direction="row" gap={2}>
            <InputSection width="50%">
              <Label>Title</Label>
              <TextInput
                placeholder="Enter Title"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
            </InputSection>

            <InputSection width="50%">
              <Label>Type</Label>
              <TextInput
                placeholder="Enter Type"
                value={editData.type}
                onChange={(e) => setEditData({ ...editData, type: e.target.value })}
              />
            </InputSection>
          </Stack>

          <InputSection width="50%">
            <Label>Location</Label>
            <TextInput
              placeholder="Enter Location"
              value={editData.location}
              onChange={(e) => setEditData({ ...editData, location: e.target.value })}
            />
          </InputSection>

          <InputSection>
            <Label>Description</Label>
            <Jodit
              content={editData.description}
              setContent={(value) => setEditData({ ...editData, description: value })}
            />
          </InputSection>

          {alert.message && (
            <div style={{ color: alert.type === "error" ? "red" : "green" }}>
              {alert.message}
            </div>
          )}

          <InputSection>
            <Stack direction="row" gap="10px">
              <GreenButtonSmall onClick={handleEditSubmit} disabled={editLoading}>
                {editLoading ? "Updating..." : "Update"}
              </GreenButtonSmall>
              <BlueButtonSmall onClick={() => setEditModalOpen(false)}>Cancel</BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
