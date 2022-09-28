import React, { useState } from "react";

import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { Header } from "../components/Header";
import AddRows from "./AddRows";

function CalculatorApp() {
  const [rowDetails, setRowDetails] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [number, setNumber] = useState("");
  const [sign, setSign] = useState("plus");
  const [rowDisabled, setRowDisabled] = useState(false);
  const [list, setList] = React.useState([]);
  const [id, setId] = React.useState(0);
  const handleAddRows = () => {
    setShowContent(true);
    //setRowDetails({ ...rowDetails, rows: "hii" });
    setId((id) => id + 1);
    setList((list) => [...list, "new task - " + id]);
  };
  return (
    <div className="">
      <Header />
      <div className="md:container md:mx-auto mt-40 ">
        <h1 className="text-3xl font-bold underline"></h1>
        <Box className="mt-20">
          <Button
            variant="contained"
            // color="inherit"
            //disabled={!state.city && !state.country}
            //onClick={() => dispatch(getWeatherDetails(state))}
            onClick={handleAddRows}
            startIcon={<AddIcon />}
          >
            Add Rows
          </Button>
        </Box>
        <h1>Result: {number}</h1>
        <div>
          {list.map((item) => {
            const handleRemoveClick = () => {
              setList((list) => list.filter((entry) => entry !== item));
            };
            const handleDisableRow = () => {};
            return (
              <div key={item} style={{ display: "flex" }}>
                <AddRows
                  handleRemoveClick={handleRemoveClick}
                  handleDisable={handleDisableRow}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CalculatorApp;
