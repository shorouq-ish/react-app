import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button } from "@mui/material";
import "../CSS/details.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SingleDetail from "../components/SingleDetail";
import "../CSS/theme.css";

function Details({ theme, onClick }) {
  const navigate = useNavigate();
  const [countryData, setCounrtyData] = useState([]);
  const [allData, setAllData] = useState();
  const { name } = useParams();
  useEffect(() => {
    init();
  }, []);

  async function init() {
    let data = await fetchData("name/" + name);
    let allData = await fetchData("all");
    setAllData(allData);
    setCounrtyData(data[0]);
  }
  const themeChange = (e) => {
    {
      onClick(e);
    }
  };

  function fetchData(search) {
    return fetch("https://restcountries.com/v3.1/" + search).then((response) =>
      response.json()
    );
  }

  function getBorders(borders) {
    let allBorders = [];
    for (let border of borders) {
      allBorders.push(
        allData.filter((country) => {
          return country.name.common
            .toLowerCase()
            .startsWith(border.toLowerCase());
        })
      );
    }
    return allBorders;
  }

  if (countryData != "") {
    let borders = [];
    let currencies = [];
    for (let i in countryData.currencies) {
      currencies.push(countryData.currencies[i].name);
    }
    let Languages = [];
    for (let i in countryData.languages) {
      Languages.push(countryData.languages[i]);
    }

    if (countryData.borders) {
      let allBorders = getBorders(countryData.borders);
      for (let border of allBorders) {
        if (border[0]) {
          borders.push(border[0].name.common);
        }
      }
    }

    return (
      <div>
        <Header theme={theme} onClick={themeChange} />
        <Container>
          <div>
            <Button
              variant="contained"
              sx={{ mt: 10, mb: 5, backgroundColor: "#fafafa", color: "black" }}
              onClick={() => navigate(-1)}
              data-theme={theme}
              className="button"
            >
              <ArrowBackIcon />
              Back
            </Button>
          </div>
          <div>
            <img src={countryData.flags.svg} />
            <div className="details">
              <div className="countyName detail">{countryData.name.common}</div>
              <div className="mainDiv">
                <div>
                  <SingleDetail
                    theme={theme}
                    property="Native Name:"
                    value={countryData.name.official}
                  />
                  <SingleDetail
                    property="Population:"
                    value={countryData.population}
                  />
                  <SingleDetail property="Region:" value={countryData.region} />
                  <SingleDetail
                    property="Sub Region:"
                    value={countryData.subregion}
                  />
                  <SingleDetail
                    property="Capital:"
                    value={countryData.capital}
                  />
                </div>
                <div className="div2">
                  <SingleDetail
                    property="Top Level Domain:"
                    value={countryData.tld}
                  />
                  <SingleDetail
                    property="Currencies:"
                    value={currencies.toString()}
                  />
                  <SingleDetail
                    property="Languages:"
                    value={Languages.toString()}
                  />
                </div>
              </div>
            </div>
            <div className="borders">
              <span className="BorCou detail">Border Countries:</span>
              {borders.map((border) => (
                <Button
                  variant="contained"
                  style={{ textTransform: "none" }}
                  sx={{
                    mt: 5,
                    mb: 5,
                    mr: 2,
                    backgroundColor: "#fafafa",
                    color: "black",
                  }}
                >
                  {border}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Details;
