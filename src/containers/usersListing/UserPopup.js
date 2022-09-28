import { React } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import _ from "lodash";
export default function UserPopup({
  data,
  open,
  handleClose,
  onDataChange,
  handleUpdateSave,
  handleAddSave,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {_.isEmpty(data.id) ? "Add New" : "Edit"} User Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="First name"
                name="first_name"
                value={data.first_name}
                onChange={onDataChange}
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                label="Last name"
                name="last_name"
                value={data.last_name}
                onChange={onDataChange}
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                value={data.email}
                onChange={onDataChange}
                variant="outlined"
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {_.isEmpty(data.id) ? (
            <Button autoFocus onClick={() => handleAddSave(data)}>
              Add
            </Button>
          ) : (
            <Button autoFocus onClick={() => handleUpdateSave(data)}>
              Save
            </Button>
          )}

          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
