"use client"
import { useState } from "react";
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
import { Stack, FormGroup, FormControlLabel, Checkbox, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export default function EditSubAdmin({ setEditModalOpen, fetchUsers, user, token }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
  });

  const [permissions, setPermissions] = useState(() => {
    const perms = {
      blogs: false,
      events: false,
      seo_meta_tags: false,
      careers: false,
      hiring_data: false,
      contact_details: false,
      newsletter_subscribers: false,
    };
    if (user?.permissions) {
      user.permissions.forEach((p) => {
        perms[p] = true;
      });
    }
    return perms;
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePermissionChange = (e) => {
    setPermissions({
      ...permissions,
      [e.target.name]: e.target.checked,
    });
  };

  const handleUpdateSubAdmin = async () => {
    setLoading(true);

    try {
      const selectedPermissions = Object.keys(permissions).filter(
        (k) => permissions[k]
      );

      const dataToSend = {
        ...formData,
        permissions: selectedPermissions,
        role: "subadmin",
      };

      // Remove password if it's empty
      if (!dataToSend.password) {
        delete dataToSend.password;
      }

      const response = await axios.put(
        `https://skytextiles.in/api/v1/user/${user._id}`,
        dataToSend,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        alert("Sub-Admin updated successfully!");
        fetchUsers();
        setEditModalOpen(false);
      } else {
        alert("Failed to update the sub-admin.");
      }
    } catch (error) {
      console.error("Error updating sub-admin:", error);
      alert(
        error.response?.data?.message ||
          "An error occurred while updating the sub-admin."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>Edit Sub-Admin</InnerContainerHead>
        <InnerContainerHeadSection column>
          {/* Name and Email */}
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Name</Label>
              <TextInput
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </InputSection>

            <InputSection width={"50%"}>
              <Label width={"100px"}>Email</Label>
              <TextInput
                placeholder="Enter Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </InputSection>
          </Stack>

          {/* Password */}
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Password</Label>
              <div style={{ position: "relative",  }}>
                <TextInput
                  placeholder="Leave empty to keep current password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  style={{ paddingRight: "40px" }}
                />
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "5px",
                  }}
                >
                  {showPassword ? (
                    <VisibilityOffIcon sx={{ width: 18, height: 18 }} />
                  ) : (
                    <VisibilityIcon sx={{ width: 18, height: 18 }} />
                  )}
                </IconButton>
              </div>
            </InputSection>
          </Stack>

          {/* Permissions */}
          <InputSection>
            <Label width={"100px"}>Permissions</Label>
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
                  label={key
                    .replace("_", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                />
              ))}
            </FormGroup>
          </InputSection>

          {/* Action Buttons */}
          <InputSection>
            <Label></Label>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall onClick={handleUpdateSubAdmin} disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </GreenButtonSmall>
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