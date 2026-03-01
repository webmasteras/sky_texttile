"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(null);
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const authData = JSON.parse(localStorage.getItem("AuthPages"));
    const userData = JSON.parse(localStorage.getItem("UserData"));

    if (token && authData) {
      setAuth({ token, auth_page: authData, user: userData });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://skytextiles.in/api/v1/admin/login",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        const data = response.data.data.accessToken;
        const role = response.data.data.admin.role
        const permissions = response.data.data.permissions
        console.log(role, permissions)
        console.log("data", response);
        setAuth(data); // Set the authenticated user data
        localStorage.setItem("UserData", JSON.stringify(data)); // Store token in localStorage for persistent login
        localStorage.setItem("role", role);
        localStorage.setItem("permissions", JSON.stringify(permissions));
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };

  // const verifyUser = async (auth_page) => {
  //   try {

  //     const token = localStorage.getItem("token");
  //     console.log(auth)
  //     const response = await axios.post(
  //       "http://localhost:4000/api/user/verify-page",
  //       { id: auth?.user?._id || auth?._id, auth_page },
  //       {
  //         headers: {
  //           Authorization:
  //             `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     return response?.data?.success;
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //     return false;
  //   }
  // };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
    localStorage.removeItem("AuthPages");
    localStorage.removeItem("UserData");
  };

  const isAuthenticated = () => !!auth;

  return (
    <Auth.Provider
      value={{ login, logout, isAuthenticated, auth, tokens, setTokens }}
    >
      {children}
    </Auth.Provider>
  );
};
