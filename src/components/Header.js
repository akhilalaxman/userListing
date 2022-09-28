import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const drawerWidth = 240;
export default function Header(props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar className="flex justify-between">
        <Typography variant="h6" noWrap component="div">
          {props.title}
        </Typography>

        {props.children}
      </Toolbar>
    </AppBar>
  );
}
