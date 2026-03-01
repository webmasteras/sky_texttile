"use client";

import {
  Box,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogContent,
  TextField,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/VisibilityOff";
import UnblockIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import {
  Container,
  InnerContainer,
} from "@/app/styledComponents/admin/Container";
import { MainHead } from "@/app/styledComponents/admin/AdminHead";
import {
  GreenButtonSmall,
  RedButtonSmall,
  YellowButtonSmall,
  StyledButton,
  StatusLabel,
} from "@/app/styledComponents/admin/Buttons";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Auth } from "../../context/Auth";
import CreateCareers from "./parts/CreateCareers"; 
import EditCareer from "./parts/EditCareers";

export default function Careers() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewForm, setViewForm] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentCareer, setCurrentCareer] = useState(null);
  const [editData, setEditData] = useState({});
  const [editLoading, setEditLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const { tokens, setTokens } = useContext(Auth);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const UserData = localStorage.getItem("UserData");
      if (UserData) setTokens(JSON.parse(UserData));
      else router.push("/admin/login");
    }
  }, [router, setTokens]);

  // Fetch careers
  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://skytextiles.in/api/v1/careers/get-careers"
      );
      if (res.status === 200) {
        setDepartments(res.data.message || []);
      } else {
        alert("Failed to fetch careers.");
      }
    } catch (error) {
      console.error("Error fetching careers:", error);
      alert("Error fetching careers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Block/unblock career
  const handleToggleBlock = async (id, isBlocked) => {
    try {
      const endpoint = isBlocked
        ? `https://skytextiles.in/api/v1/careers/unblock-career/${id}`
        : `https://skytextiles.in/api/v1/careers/block-career/${id}`;
      const res = await axios.put(endpoint);
      if (res.data.statusCode === 200) fetchDepartments();
      else alert("Failed to update status.");
    } catch (err) {
      console.error(err);
      alert("Error updating status.");
    }
  };

  // Delete career
  const handleDeleteCareer = async (id) => {
    if (!confirm("Are you sure to delete this career?")) return;
    try {
      const res = await axios.delete(
        `https://skytextiles.in/api/v1/careers/deleteById?id=${id}`
      );
      if (res.data.statusCode === 200) fetchDepartments();
      else alert("Failed to delete career.");
    } catch (err) {
      console.error(err);
      alert("Error deleting career.");
    }
  };

  // Open edit modal
  const handleEditClick = (career) => {
    setCurrentCareer(career);
    setEditData({
      title: career.title || "",
      type: career.type || "",
      location: career.location || "",
    });
    setAlert({ type: "", message: "" });
    setEditModalOpen(true);
  };

  // Submit edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    setAlert({ type: "", message: "" });

    try {
      const res = await axios.put(
        `https://skytextiles.in/api/v1/careers/updateById/${currentCareer._id}`,
        editData
      );

      if (res.data.statusCode === 200) {
        setAlert({ type: "success", message: "Career updated successfully!" });
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        setAlert({ type: "error", message: "Failed to update career." });
      }
    } catch (err) {
      console.error(err);
      setAlert({ type: "error", message: "Error updating career." });
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <Stack>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "90vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <NavbarAdminHorizontal />
          <Stack direction="row">
            <NavbarAdmin />
            <Stack width="100%">
              <Container>
                <Stack direction="row" justifyContent="space-between">
                  <MainHead>Careers</MainHead>
                  <StyledButton onClick={() => setViewForm(true)}>
                    Add Career
                  </StyledButton>
                </Stack>

                {/* ✅ Popup Create Career Form */}
                {viewForm && (
                  <CreateCareers
                    setViewForm={setViewForm}
                    fetchDepartments={fetchDepartments}
                  />
                )}
                {editModalOpen && currentCareer && (
  <EditCareer
    careerData={currentCareer}
    setEditModalOpen={setEditModalOpen}
    fetchDepartments={fetchDepartments}
  />
)}

                <InnerContainer>
                  <TableContainer>
                    <Table size="medium">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Title</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Location</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {departments.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6} align="center">
                              No careers found
                            </TableCell>
                          </TableRow>
                        ) : (
                          departments.map((career, index) => (
                            <TableRow key={career._id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{career.title}</TableCell>
                              <TableCell>{career.type}</TableCell>
                              <TableCell>{career.location}</TableCell>
                              <TableCell>
                                <StatusLabel
                                  status={career.isBlocked ? "Blocked" : "Active"}
                                >
                                  {career.isBlocked ? "Blocked" : "Active"}
                                </StatusLabel>
                              </TableCell>
                              <TableCell>
                                <Stack direction="row" gap="8px">
                                  <GreenButtonSmall
                                    onClick={() =>
                                      handleToggleBlock(career._id, career.isBlocked)
                                    }
                                  >
                                    {career.isBlocked ? (
                                      <BlockIcon sx={{ width: 15, height: 15, color: "red" }} />
                                    ) : (
                                      <UnblockIcon sx={{ width: 15, height: 15, color: "green" }} />
                                    )}
                                  </GreenButtonSmall>

                                  <YellowButtonSmall
                                    onClick={() => handleEditClick(career)}
                                  >
                                    <EditIcon sx={{ width: 15, height: 15 }} />
                                  </YellowButtonSmall>

                                  <RedButtonSmall
                                    onClick={() => handleDeleteCareer(career._id)}
                                  >
                                    <DeleteIcon sx={{ width: 15, height: 15 }} />
                                  </RedButtonSmall>
                                </Stack>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </InnerContainer>

            
              </Container>
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
}
