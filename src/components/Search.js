import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

function Search({ onChange, theme }) {
  function handelChange(e) {
    {
      onChange(e.target.value);
    }
  }

  return (
    <TextField
      data-theme={theme}
      className="textField"
      sx={{
        width: { lg: "35%", xl: "35%", md: "35%", sm: "35%", xs: "80%" },
        mb: 5,
      }}
      onChange={handelChange}
      placeholder="Search for a country..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className="searchIcon" />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default Search;
