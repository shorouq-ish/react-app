import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import "../CSS/filter.css";

function Search({ SearchToCountries }) {
  function handelChange(e) {
    {
      SearchToCountries(e.target.value);
    }
  }

  return (
    <>
      <TextField
        sx={{
          width: { lg: "35%", xl: "35%", md: "35%", sm: "35%", xs: "80%" },
          mb: 5,
        }}
        style={{
          backgroundColor: "white",
        }}
        onChange={handelChange}
        placeholder="Search for a country..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
}

export default Search;
