"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import { Container, InnerContainer } from "@/app/styledComponents/admin/Container";
import { MainHead } from "@/app/styledComponents/admin/AdminHead";
import { GreenButtonSmall, RedButtonSmall } from "@/app/styledComponents/admin/Buttons";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/VisibilityOff";
import UnblockIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

import EditSubAdmin from "./parts/EditUser";
import AddSubAdmin from "./parts/Adduser";
import axios from "axios";

export default function SubAdmins() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [viewForm, setViewForm] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPasswordIds, setShowPasswordIds] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);

  const router = useRouter();

  // Load token from localStorage safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedToken = localStorage.getItem("UserData");
        if (storedToken) {
          const parsedToken = JSON.parse(storedToken);
          setToken(parsedToken);
        } else {
          router.push("/admin/login");
        }
      } catch (err) {
        console.error("Error parsing token:", err);
        router.push("/admin/login");
      }
    }
  }, [router]);

  // Fetch all sub-admins
  const fetchUsers = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await axios.get("https://skytextiles.in/api/v1/user/subadmins", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userList = Array.isArray(res.data) ? res.data : res.data.data || [];
      setUsers(userList);
      console.log("Fetched users data:", userList);
    } catch (err) {
      console.error("fetchUsers error:", err.response?.data || err.message);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("UserData");
        router.push("/admin/login");
      }
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchUsers();
  }, [token]);

  const handleDeleteUser = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await axios.delete(`https://skytextiles.in/api/v1/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (err) {
      console.error("delete error:", err.response?.data || err.message);
      window.alert("Error deleting user");
    }
  };

  const handleToggleBlock = async (id, isBlocked) => {
    try {
      const endpoint = isBlocked
        ? `https://skytextiles.in/api/v1/user/unblock/${id}`
        : `https://skytextiles.in/api/v1/user/block/${id}`;
      await axios.put(endpoint, null, { headers: { Authorization: `Bearer ${token}` } });
      fetchUsers();
    } catch (err) {
      console.error("toggle block error:", err);
      alert("Error updating status");
    }
  };

  // ✅ Handle Edit Modal
  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const toggleShowPassword = (id) => setShowPasswordIds(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <Stack>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <NavbarAdminHorizontal />
          <Stack direction="row">
            <NavbarAdmin />
            <Stack width="100%">
              <Container>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <MainHead>Sub-Admins</MainHead>
                  <GreenButtonSmall onClick={() => setViewForm(true)}>+ Create Sub-Admin</GreenButtonSmall>
                </Stack>

               
{viewForm && (
  <AddSubAdmin
    setViewForm={setViewForm}
    fetchUsers={fetchUsers}
    token={token}
  />
)}

                <InnerContainer>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="Sub-Admins Table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Password</TableCell>
                          <TableCell>Role</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Permissions</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users.length > 0 ? (
                          users.map((user, idx) => (
                            <TableRow key={user._id}>
                              <TableCell>{idx + 1}</TableCell>
                              <TableCell>{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
<TableCell>
  
  {!viewForm ? (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        border: '1px solid #ccc', 
        borderRadius: '4px',
        width: 'fit-content',
        minHeight: '28px' 
      }}
    >
      <Typography 
        variant="body2"
        sx={{ 
          fontFamily: showPasswordIds[user._id] ? 'sans-serif' : 'serif',
          letterSpacing: showPasswordIds[user._id] ? 'normal' : '2px', 
          px: 1, 
          py: 0.5,
          minWidth: '80px' 
        }}
      >
        {showPasswordIds[user._id] ? user.password : '********'}
      </Typography>
      
      <IconButton 
        size="small" 
        onClick={() => toggleShowPassword(user._id)}
        sx={{ padding: '4px' }}
      >
        {showPasswordIds[user._id] 
          ? <VisibilityOffIcon sx={{ width: 15, height: 15 }} /> 
          : <VisibilityIcon sx={{ width: 15, height: 15 }} />
        }
      </IconButton>
    </Box>
  ) : (

    <Box sx={{ minHeight: '28px' }}></Box> 
  )}
</TableCell>
                              <TableCell>{user.role}</TableCell>
                              <TableCell>
                                <Typography sx={{ padding: "5px 10px", color: "white", backgroundColor: user.isBlocked ? "#D9534F" : "#5CB85C", borderRadius: "5px", display: "inline-block" }}>
                                  {user.isBlocked ? "Blocked" : "Active"}
                                </Typography>
                              </TableCell>
                              <TableCell>{Array.isArray(user.permissions) ? user.permissions.join(", ") : "-"}</TableCell>
                              <TableCell>
                                <Stack direction={"row"} gap={1}>
                                  <GreenButtonSmall onClick={() => handleToggleBlock(user._id, user.isBlocked)}>
                                    {user.isBlocked ? <BlockIcon sx={{ width: 15, height: 15, color: "red" }} /> : <UnblockIcon sx={{ width: 15, height: 15, color: "green" }} />}
                                  </GreenButtonSmall>
                                  <GreenButtonSmall onClick={() => handleOpenEditModal(user)}>
                                    <EditIcon sx={{ width: 15, height: 15 }} />
                                  </GreenButtonSmall>
                                  <RedButtonSmall onClick={() => handleDeleteUser(user._id)}>
                                    <DeleteIcon sx={{ width: 15, height: 15 }} />
                                  </RedButtonSmall>
                                </Stack>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={8} align="center">
                              No sub-admins found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </InnerContainer>
              </Container>
            </Stack>
          </Stack>

         
         {editModalOpen && selectedUser && (
  <EditSubAdmin
    setEditModalOpen={setEditModalOpen}
    fetchUsers={fetchUsers}
    user={selectedUser}
    token={token}
  />
)}

        </>
      )}
    </Stack>
  );
}