import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import Cards from "./components/Cards";
import { Container } from "@mui/material";
import "@fontsource/nunito-sans";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { Box } from "@mui/material";
import DragDrop from "./components/DragDrop";

let all1 =[];

init();
  async function init(){
     all1 = await fetchData("all");
    // setallData(all1);

    // console.log(allData);
  }
 function fetchData(searchByName){
  return fetch("https://restcountries.com/v3.1/" + searchByName)
  .then((response) => response.json());
}

function Countries() {
  // let searchByName = "all";
  // let allData =[];


  

  

  const [searchValue, setSearchValue] = useState("");
  const SearchToCountries = (search) => {
    setSearchValue(search);
  };

  const [filterValue, setFilterValue] = useState("");
  const FilterToCountries = (filter) => {
    console.log("filter:" + filter);
    setFilterValue(filter);
  };

  let [countries, setCountries] = useState([]);

  function filterCountries(filteredData) {
    if (filterValue != "") {
      let filterCountry = filteredData.filter((country) => {
        return country.region.includes(filterValue);
      });

      console.log(filterCountry);
      setCountries(filterCountry);
    }
  }

  useEffect(() => {
    // let all = await fetchData("all");
    // setallData(all);
    searchData();
  }, [searchValue]);
  
  useEffect(() => {
    console.log(all1);
    if(searchValue != ""){
      console.log(countries);
      filterCountries(countries);
    }
    else{
    filterCountries(all1);
    }

    console.log(countries);
  }, [filterValue]);

  

  async function searchData() {
    let filteredData=[];
    let searchByName ="all";
    console.log("searchValue: " + searchValue);
    if (searchValue != "") {
      searchByName = "name/" + searchValue;
    }
    
    filteredData = await fetchData(searchByName);
    console.log("filteredData"+filteredData);
    if (filterValue != "") {
      filterCountries(filteredData);
    }
    else{
      setCountries(filteredData);
    }
  }

  

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
              mt: 10,
            }}
          >
            <Search SearchToCountries={SearchToCountries} />
            <Filter FilterToCountries={FilterToCountries} />
          </Box>
        </div>
        <div>
          <Grid container spacing={5}>
            <Grid item sm={4} md={3} lg={3}>
              <DragDrop />
            </Grid>
            <Grid item xs={12} sm={4} md={9} lg={9}>
              <Grid container spacing={5}>
                {countries.map((country) => (
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Cards
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
