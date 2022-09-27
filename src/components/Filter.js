import React from "react";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
function Filter() {
  return (
    
    
<FormControl sx={{ width: 200 , mb:4 }}>
  <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
  <Select
  style={{
    backgroundColor: "white"
}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Filter By Region"
  >
    <MenuItem value={10}>Africa</MenuItem>
    <MenuItem value={20}>America</MenuItem>
    <MenuItem value={30}>Asia</MenuItem>
    <MenuItem value={40}>Europe</MenuItem>
    <MenuItem value={50}>Oceania</MenuItem>
  </Select>
</FormControl>
  );
}

export default Filter;
