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
} from "@/app/styledComponents/admin/Container";
import { MainHead } from "@/app/styledComponents/admin/AdminHead";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Auth } from "../../context/Auth";

export default function Contacts() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
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
        "https://skytextiles.in/api/v1/newsletter/get-all"
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
                    <MainHead>Newsletter Subscribers</MainHead>
                  </Stack>
                  <InnerContainer>
                    <TableContainer>
                      <Table
                        sx={{ minWidth: 650 }}
                        size="large"
                        aria-label="Departments"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Email</TableCell>
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
                                <TableCell>{department.email}</TableCell>
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
