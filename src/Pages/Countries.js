import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Grid } from "@mui/material";
import CounrtyCard from "../components/CounrtyCard";
import { Container } from "@mui/material";
import "@fontsource/nunito-sans";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { Box } from "@mui/material";
import Favourites from "../components/Favourites";
import { Hidden } from "@mui/material";

function fetchData(search = "all") {
  return fetch("https://restcountries.com/v3.1/" + search).then((response) =>
    response.json()
  );
}

function Countries({ onClick, theme }) {
  let [countries, setCountries] = useState([]);
  let [viewCountries, setViewCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);
  const [favouriteListNames, setFavouriteListNames] = useState([]);

  const SearchToCountries = (search) => {
    setSearchValue(search);
  };

  const FilterToCountries = (filter) => {
    setFilterValue(filter);
  };

  const mobileFavourite = (name, flag, color) => {
    if (color == "gray") {
      addtoLocalStorage(name, flag);
    } else {
      deleteItem(name);
    }
  };

  const deleteItem = (id) => {
    let names = [];
    let storageFav = JSON.parse(localStorage.getItem("favourit"));
    for (var i = 0; i < storageFav.length; i++) {
      if (storageFav[i].name === id) {
        storageFav.splice(i, 1);
      }
    }
    localStorage.setItem("favourit", JSON.stringify(storageFav));
    setFavouriteList([...storageFav]);
    for (let fav of storageFav) {
      names.push(fav.name);
    }
    setFavouriteListNames(names);
  };

  const favouriteCountries = (name, flag) => {
    addtoLocalStorage(name, flag);
  };

  const themeChange = (e) => {
    {
      onClick(e);
    }
  };

  function addtoLocalStorage(name, flag) {
    let doubleFlag = 0;
    let names = [];

    let favouritCountry = {
      name: name,
      flag: flag,
    };
    let storageFav = JSON.parse(localStorage.getItem("favourit"));
    let i = 0;
    if (storageFav) {
      i = storageFav.length;
      for (let n of storageFav) {
        if (n.name == favouritCountry.name) {
          doubleFlag = 1;
          break;
        }
      }
    } else {
      storageFav = [];
    }

    if (favouritCountry && !doubleFlag) {
      storageFav[i++] = favouritCountry;
      localStorage.setItem("favourit", JSON.stringify(storageFav));
      for (let fav of storageFav) {
        names.push(fav.name);
      }
    }
    setFavouriteList([...storageFav]);
    setFavouriteListNames([...names]);
  }

  async function init() {
    let allData = await fetchData();
    setCountries(allData);
    setViewCountries([...allData]);
    let storageFav = JSON.parse(localStorage.getItem("favourit"));
    if (storageFav) {
      setFavouriteList(storageFav);
      let names = [];
      for (let fav of storageFav) {
        names.push(fav.name);
      }
      setFavouriteListNames(names);
    }
  }

  function filterByRegion(filteredData) {
    if (!filterValue) return filteredData;
    return filteredData.filter((country) => {
      if (country.region !== filterValue) return false;
      return true;
    });
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    let filterData = filterByRegion(countries);
    if (filterData) {
      setViewCountries(filterData);
    } else {
      setViewCountries([]);
    }
  }, [filterValue]);

  useEffect(() => {
    searchByName(searchValue);
  }, [searchValue]);

  async function searchByName(searchValue) {
    let search = searchValue ? "name/" + searchValue : "all";
    let filteredData = await fetchData(search);
    if (filteredData.status != "404") {
      setCountries(filteredData);
      let filterSearch = filterByRegion(filteredData);
      setViewCountries(filterSearch);
    } else {
      setViewCountries([]);
    }
  }

  return (
    <div data-theme={theme} >
      <Header theme={theme} onClick={themeChange} />
      <Container maxWidth="lg" >
        <div>
          <Box
            className="filter-box"
            data-theme={theme}
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
              pt: 12,
            }}
          >
            <Search theme={theme} onChange={SearchToCountries} />
            <Filter theme={theme} onChange={FilterToCountries} />
          </Box>
        </div>
        <div>
          <Grid container spacing={3}>
            <Hidden only="xs">
              <Grid item sm={4} md={3} lg={3}>
                <Favourites
                  onDrop={favouriteCountries}
                  favourits={favouriteList}
                  onClick={deleteItem}
                  theme={theme}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={9} lg={9}>
              <Grid container spacing={8}>
                {viewCountries.map((country) => (
                  <Grid item xs={11} sm={6} md={4} lg={4}>
                    <CounrtyCard
                      theme={theme}
                      onClick={mobileFavourite}
                      countryName={country.name.common}
                      img={country.flags.svg}
                      population={country.population.toLocaleString("en-US")}
                      region={country.region}
                      capital={country.capital}
                      favourits={favouriteListNames}
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
