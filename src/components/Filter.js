import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import "../CSS/filter.css";

function Filter({ FilterToCountries }) {
  function handelChange(e) {
    {
      FilterToCountries(e.target.value);
    }
  }

  return (
    <div>
      <FormControl
        sx={{ width: 200, mb: 5, boxShadow: 1, border: 0 }}
        className="filterComp"
      >
        <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
        <Select
          onChange={handelChange}
          style={{
            backgroundColor: "white",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter By Region"
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
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
