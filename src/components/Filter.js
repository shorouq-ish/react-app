import React from "react";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";

function Filter({FilterToCountries}) {
  function handelChange(e){
    {FilterToCountries(e.target.value)}

  }

  return (
    <FormControl sx={{ width: 200, mb: 4 }}>
      <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
      <Select
      onChange={handelChange }
        style={{
          backgroundColor: "white",
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Filter By Region"
      >
        <MenuItem value={"Africa"}>Africa</MenuItem>
        <MenuItem value={"America"}>America</MenuItem>
        <MenuItem value={"Asia"}>Asia</MenuItem>
        <MenuItem value={"Europe"}>Europe</MenuItem>
        <MenuItem value={"Oceania"}>Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filter;
