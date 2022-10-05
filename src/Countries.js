import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import CounrtyCard from "./components/CounrtyCard";
import { Container } from "@mui/material";
import "@fontsource/nunito-sans";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { Box } from "@mui/material";
import DragDrop from "./components/DragDrop";
import { Hidden } from "@mui/material";

function fetchData(search = "all") {
  return fetch("https://restcountries.com/v3.1/" + search).then((response) =>
    response.json()
  );
}

function Countries() {
  let [countries, setCountries] = useState([]);
  let [ViewCountries, setViewCountries] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const SearchToCountries = (search) => {
    setSearchValue(search);
  };

  const [filterValue, setFilterValue] = useState("");
  const FilterToCountries = (filter) => {
    setFilterValue(filter);
  };

  async function init() {
    let allData = await fetchData();
    setCountries(allData);
    setViewCountries(allData);
  }

  useEffect(() => {
    init();
  }, []);

  function filterByRegion(filteredData) {
    if (!filterValue) return filteredData;
    return filteredData.filter((country) => {
      if (country.region !== filterValue) return false;
      return true;
    });
  }

  useEffect(() => {
    let filterData = filterByRegion(countries);
    setViewCountries(filterData);
  }, [filterValue]);

  async function searchByName(searchValue) {
    let search = searchValue ? "name/" + searchValue : "all";
    let filteredData = await fetchData(search);
    setCountries(filteredData);
    let filterSearch = filterByRegion(filteredData);
    setViewCountries(filterSearch);
  }

  useEffect(() => {
    searchByName(searchValue);
  }, [searchValue]);

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                md: "row",
                lg: "row",
                xl: "row",
                sm: "row",
                xs: "column",
              },
              mt: 12,
            }}
          >
            <Search SearchToCountries={SearchToCountries} />
            <Filter FilterToCountries={FilterToCountries} />
          </Box>
        </div>
        <div>
          <Grid container spacing={3}>
            <Hidden only="xs">
              <Grid item sm={4} md={3} lg={3}>
                <DragDrop />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={9} lg={9}>
              <Grid container spacing={8}>
                {ViewCountries.map((country) => (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CounrtyCard
                      countryName={country.name.common}
                      img={country.flags.svg}
                      population={country.population.toLocaleString("en-US")}
                      region={country.region}
                      capital={country.capital}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Countries;
