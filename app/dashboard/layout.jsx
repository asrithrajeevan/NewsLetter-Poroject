// // app/dashboard/layout.jsx
"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Nav from "../../src/layout/nav";
import Main from "../../src/layout/main";
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../src/layout/header";

import ProtectedRoute from "../../components/ProtectedRoute";

const DashboardLayout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const [isLayoutLoaded, setIsLayoutLoaded] = useState(false);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching layout data)
    const timer = setTimeout(() => {
      setIsLayoutLoaded(true);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLayoutLoaded) {
    return(
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
     // Replace with a better loading indicator if needed
  }

  return (
    <ProtectedRoute>
      <>
        <Header onOpenNav={() => setOpenNav(true)} />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
          <Main>{children}</Main>
        </Box>
      </>
    </ProtectedRoute>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
