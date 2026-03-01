"use client";

import { useState } from "react";
import axios from "axios";
import {
  InnerContainer,
  InnerContainerHead,
  InnerContainerHeadSection,
  ModalContainer,
} from "@/app/styledComponents/admin/Container";
import { InputSection, Label, TextInput } from "@/app/styledComponents/admin/Inputs";
import { GreenButtonSmall, BlueButtonSmall } from "@/app/styledComponents/admin/Buttons";
import { Stack } from "@mui/material";

export default function AddSubAdmin({ setViewForm, fetchSubAdmins }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [permissions, setPermissions] = useState([]);

  const handlePermissionChange = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://yourdomain.com/api/v1/subadmin/create", {
        name,
        email,
        password,
        permissions,
      });

      if (res.status === 200) {
        alert("Sub-admin created successfully!");
        setViewForm(false);
        fetchSubAdmins();
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create sub-admin");
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"70%"}>
        <InnerContainerHead>Add Sub-Admin</InnerContainerHead>
        <InnerContainerHeadSection column>
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label>Name</Label>
              <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            </InputSection>
            <InputSection width={"50%"}>
              <Label>Email</Label>
              <TextInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </InputSection>
          </Stack>

          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label>Password</Label>
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </InputSection>
          </Stack>

          <InputSection>
            <Label>Permissions</Label>
            <Stack direction="row" gap="15px" flexWrap="wrap">
              {["blogs", "products", "orders", "users"].map((perm) => (
                <label key={perm} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <input
                    type="checkbox"
                    checked={permissions.includes(perm)}
                    onChange={() => handlePermissionChange(perm)}
                  />
                  {perm}
                </label>
              ))}
            </Stack>
          </InputSection>

          <InputSection>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall onClick={handleSubmit}>Save</GreenButtonSmall>
              <BlueButtonSmall onClick={() => setViewForm(false)}>Cancel</BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
