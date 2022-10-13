import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import "../CSS/theme.css";

function Filter({ onChange, theme }) {
  function handelChange(e) {
    {
      onChange(e.target.value);
    }
  }

  return (
    <div>
      <FormControl
        sx={{ width: 200, mb: 5, border: "0px" }}
        className="filterComp"
        data-theme={theme}
      >
        <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
        <Select
          data-theme={theme}
          onChange={handelChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter By Region"
        >
          <MenuItem data-theme={theme} className="menu-item" value={"Africa"}>
            Africa
          </MenuItem>
          <MenuItem value={"Americas"}>Americas</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
