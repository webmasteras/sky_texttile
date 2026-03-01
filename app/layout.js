"use client";

import { createTheme, Stack, ThemeProvider } from "@mui/material";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AuthProvider } from "./components/context/Auth";

// const poppins = Poppins({
//   weight: ["400", "700"], // Add the weights you want to use
//   subsets: ["latin"], // You can add subsets like 'latin-ext'
//   variable: "--font-poppins", // Optional: Define a custom variable for the font
//   display: "swap",
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins), sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 314,
      smm: 530,
      md: 768,
      lg: 1024,
      xl: 1220,
      xll: 1440,
      xxl: 1600,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <AuthProvider>
            <Stack
              className={poppins.className}
              overflow={"hidden"}
              position={"relative"}
            >
              {children}
            </Stack>
          </AuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
