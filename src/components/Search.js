import React from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";

function Search() {
  

  return (
    <TextField
      sx={{ width:{ lg:"35%", xl:"35%", md: "35%", sm:"35%", xs:"80%"} , mb:4}}
      style={{
        backgroundColor: "white",
      }}
      placeholder="Search for a country..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default Search;
