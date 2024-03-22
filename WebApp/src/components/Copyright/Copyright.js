// Importing necessary components from Material-UI library
import React from "react";
import { Link as MaterialLink, Typography, Box } from "@material-ui/core";

// Functional component for displaying copyright information
const Copyright = () => {
  // Styling for the container div
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#014421", // Background color
    color: "white", // Text color
    padding: 20, // Padding around the content
    width: "100%", // Full width
    height: "100%", // Full height
  };

  // Styling for the Typography component
  const typographyStyle = {
    color: "white", // Text color
    fontFamily: "Montserrat-Regular", // Font family
  };

  // Render the copyright information using Material-UI components
  return (
    <Box style={containerStyle}>
      <Typography variant="h6" color="textSecondary" align="center" style={typographyStyle}>
        {/* Copyright text with a link to www.SCoReLab.org */}
        {"Copyright © "}
        <MaterialLink color="inherit" href="https://www.scorelab.org">
          www.SCoReLab.org
        </MaterialLink>{" "}
        {/* Display the current year dynamically */}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

// Export the Copyright component for use in other parts of the application
export default Copyright;
