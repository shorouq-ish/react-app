import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import "../CSS/search.css";


function Search({ SearchToCountries }) {
 
  function handelChange(e) {
    {
      SearchToCountries(e.target.value);
    }
  }

  return (
    <TextField
      className="textField"
      sx={{
        width: { lg: "35%", xl: "35%", md: "35%", sm: "35%", xs: "80%" },
        mb: 5,
      }}
      style={{
        backgroundColor: "white",
        // boxShadow: "1px 1px 5px 1px   #e9e8e8"
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
  );
}

export default Search;
