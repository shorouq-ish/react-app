import React,{useState} from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";

function Search({SearchToCountries}) {


  function handelChange(e){
    {SearchToCountries(e.target.value)}

  }

  return (
    <TextField
      sx={{ width:{ lg:"35%", xl:"35%", md: "35%", sm:"35%", xs:"80%"} , mb:4}}
      style={{
        backgroundColor: "white",
      }}
      onChange={handelChange }
      
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
