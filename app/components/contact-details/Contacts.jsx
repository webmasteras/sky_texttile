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
} from "@mui/material";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import {
  Container,
  InnerContainer,
  InnerContainerHeadSection,
} from "@/app/styledComponents/admin/Container";
import {
  InnerContainerHead,
  MainHead,
} from "@/app/styledComponents/admin/AdminHead";
import {
  GrayButtonSmall,
  GreenButtonSmall,
  RedButtonSmall,
  StatusLabel,
  StyledButton,
  YellowButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/VisibilityOff";
import UnblockIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Auth } from "../../context/Auth";

export default function Contacts() {
  const [viewForm, setViewForm] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const router = useRouter();
  const { tokens, setTokens } = useContext(Auth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const UserData = localStorage.getItem("UserData");
      if (UserData) {
        setTokens(JSON.parse(UserData));
      } else {
        router.push("/admin/login");
      }
    }
  }, [router]);
  console.log("tokens", tokens);


  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        "https://skytextiles.in/api/v1/contact/get-all-details"
      );
      if (response.status === 200) {
        setDepartments(response.data.message);
      } else {
        alert("Failed to fetch departments data.");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.delete(
        `https://skytextiles.in/api/v1/contact/delete/${id}`
      );

      if (response.data.statusCode === 200) {
        alert("Details deleted successfully!");
        fetchDepartments();
      } else {
        alert("Failed to delete the Career.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(
        "An error occurred while deleting the blog. Please check the console for details."
      );
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

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
        <Stack direction={"row"}>
          <NavbarAdmin />
          <Stack width={"100%"} position={"relative"}>
            {tokens ? (
              <Container>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <MainHead>Contact Data</MainHead>
                </Stack>
                <InnerContainer>
                  {/* <InnerContainerHead>Listing</InnerContainerHead>
              <InnerContainerHeadSection>
                <SearchInput placeholder="Search" />
                <GreenButtonSmall>Go!</GreenButtonSmall>
                <GrayButtonSmall>Reset</GrayButtonSmall>
              </InnerContainerHeadSection> */}
                  <TableContainer>
                    <Table
                      sx={{ minWidth: 650 }}
                      size="large"
                      aria-label="Departments"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>PhoneNumber</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell>Comapany Name</TableCell>
                          <TableCell>Message</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {loading ? (
                          <TableRow>
                            <TableCell colSpan={6} align="center">
                              Loading...
                            </TableCell>
                          </TableRow>
                        ) : (
                          departments.map((department, index) => (
                            <TableRow
                              key={department._id}
                              sx={{
                                verticalAlign: "baseline",
                                backgroundColor: "white",
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>
                                {department.FirstName} {department.LastName}
                              </TableCell>
                              <TableCell>{department.PhoneNumber}</TableCell>
                              <TableCell>{department.Email}</TableCell>
                              <TableCell>{department.Category}</TableCell>
                              <TableCell>{department.CompanyName}</TableCell>
                              <TableCell>{department.Message}</TableCell>

                              {/* <TableCell>
                              <StatusLabel
                                status={
                                  department.isBlocked ? "Blocked" : "Active"
                                }
                              >
                                {department.isBlocked ? "Blocked" : "Active"}
                              </StatusLabel>
                            </TableCell> */}
                              <TableCell>
                                <Stack direction={"row"} gap={"8px"}>
                                  <RedButtonSmall
                                    onClick={() =>
                                      handleDeleteBlog(department._id)
                                    }
                                  >
                                    <DeleteIcon
                                      sx={{ width: "15px", height: "15px" }}
                                    />
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
            ) : (
              "You need to login first Invalid Login"
            )}
          </Stack>
        </Stack>
      </>
      )}
    </Stack>
  );
}
