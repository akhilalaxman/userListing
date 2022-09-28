import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Select, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

function AddRows({ handleRemoveClick }) {
  const [number, setNumber] = useState("");
  const [sign, setSign] = useState("plus");
  const [rowDisabled, setRowDisabled] = useState(false);
  return (
    <div
      style={{
        height: "60px",
      }}
    >
      <div
        className="flex items-center my-20 justify-between"
        style={{ width: "600px" }}
      >
        <FormControl fullwidth>
          <InputLabel id="demo-simple-select-label">Sign</InputLabel>
          <Select
            className="w-32 "
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value={sign}
            defaultValue="plus"
            label="Sign"
            onChange={(e) => setSign(e.target.value)}
          >
            <MenuItem value="plus">plus</MenuItem>
            <MenuItem value="minus">minus</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className=""
          size="small"
          variant="outlined"
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button
          className="h-10"
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={handleRemoveClick}
        >
          Delete
        </Button>
        <Button
          className="h-10"
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => setRowDisabled(true)}
        >
          Disable
        </Button>
      </div>
    </div>
  );
}

export default AddRows;
