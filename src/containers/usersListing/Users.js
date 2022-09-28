import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../../components/Sidebar";

function Users(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        {props.children}
      </Box>
    </Box>
  );
}

export default Users;
