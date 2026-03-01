"use client";

import { useState } from "react";
import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
import {
  InnerContainer,
  InnerContainerHeadSection,
  ModalContainer,
} from "@/app/styledComponents/admin/Container";
import { InputSection, Label, TextInput } from "@/app/styledComponents/admin/Inputs";
import { GreenButtonSmall, BlueButtonSmall } from "@/app/styledComponents/admin/Buttons";
import {
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";

export default function AddSubAdmin({ setViewForm, fetchUsers, token }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [permissions, setPermissions] = useState({
    blogs: false,
    events: false,
    seo_meta_tags: false,
    careers: false,
    hiring_data: false,
    contact_details: false,
    newsletter_subscribers: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    server: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "", server: "" }); // clear errors
  };

  const handlePermissionChange = (e) => {
    setPermissions({ ...permissions, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async () => {
    let hasError = false;
    const newErrors = { name: "", email: "", password: "", server: "" };

    // Client-side validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setLoading(true);

    try {
      const selectedPermissions = Object.keys(permissions).filter((k) => permissions[k]);
      const dataToSend = { ...formData, permissions: selectedPermissions, role: "subadmin" };

      const res = await axios.post(
        "https://skytextiles.in/api/v1/user/register",
        dataToSend,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 201) {
        fetchUsers(); // refresh list
        setViewForm(false); // close modal automatically
      }
    } catch (err) {
      console.error(err);
      const serverMessage = err.response?.data?.message || "Failed to create sub-admin";
      setErrors((prev) => ({ ...prev, server: serverMessage }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width="80%">
        <InnerContainerHead>Create Sub-Admin</InnerContainerHead>
        <InnerContainerHeadSection column>
          {/* Name and Email */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <InputSection width="50%">
              <Label width="100px">Name</Label>
              <TextInput
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
              {errors.name && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ display: "flex", alignItems: "center", mt: 0.5 }}
                >
                  <ErrorOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  {errors.name}
                </Typography>
              )}
            </InputSection>

            <InputSection width="50%">
              <Label width="100px">Email</Label>
              <TextInput
                placeholder="Enter Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
              {errors.email && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ display: "flex", alignItems: "center", mt: 0.5 }}
                >
                  <ErrorOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  {errors.email}
                </Typography>
              )}
            </InputSection>
          </Stack>

          {/* Password */}
          <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mt: 2 }}>
            <InputSection width="50%" sx={{ position: "relative" }}>
              <Label width="100px">Password</Label>
              <TextInput
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                style={{
                  width: "100%",
                  paddingRight: "40px",
                  boxSizing: "border-box",
                }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "5px",
                  zIndex: 10,
                  backgroundColor: "transparent",
                }}
              >
                {showPassword ? (
                  <VisibilityOffIcon sx={{ width: 18, height: 18 }} />
                ) : (
                  <VisibilityIcon sx={{ width: 18, height: 18 }} />
                )}
              </IconButton>
              {errors.password && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ display: "flex", alignItems: "center", mt: 0.5 }}
                >
                  <ErrorOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  {errors.password}
                </Typography>
              )}
            </InputSection>
          </Stack>

          {/* Permissions */}
          <InputSection sx={{ mt: 2 }}>
            <Label width="100px">Permissions</Label>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(permissions).map((key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={permissions[key]}
                      onChange={handlePermissionChange}
                      name={key}
                    />
                  }
                  label={key.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                />
              ))}
            </FormGroup>
          </InputSection>

          {/* Server Error */}
          {errors.server && (
            <Typography
              variant="body2"
              color="error"
              sx={{ display: "flex", alignItems: "center", mt: 2 }}
            >
              <ErrorOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} />
              {errors.server}
            </Typography>
          )}

          {/* Action Buttons */}
          <InputSection sx={{ mt: 3 }}>
            <Label></Label>
            <Stack direction="row" gap="10px">
              <GreenButtonSmall onClick={handleSubmit} disabled={loading}>
                {loading ? "Adding..." : "Submit"}
              </GreenButtonSmall>
              <BlueButtonSmall onClick={() => setViewForm(false)}>Cancel</BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
