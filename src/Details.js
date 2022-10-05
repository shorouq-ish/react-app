import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Button } from "@mui/material";
import "./CSS/details.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "@mui/material";
import Image1 from "./assets/al.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useDrag } from "react-dnd";

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const [countryData, setcounrtyData] = useState([]);
  const [countryName, stcountryName] = useState("");

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (countryData != "") {
      stcountryName(countryData[0].name.common);
    }
  }, [countryData]);

  async function init() {
    let name = location.state["countryName"];
    let data = await fetchData(name);
    setcounrtyData(data);
  }

  function fetchData(search) {
    return fetch("https://restcountries.com/v3.1/name/" + search).then(
      (response) => response.json()
    );
  }

  if (countryData != "") {
    let currencies = [];
    for (let i in countryData[0].currencies) {
      currencies.push(countryData[0].currencies[i].name);
    }
    let Languages = [];
    for (let i in countryData[0].languages) {
      Languages.push(countryData[0].languages[i]);
    }

    return (
      <div>
        <Header />
        <Container>
          <div>
            <Button
              variant="contained"
              sx={{ mt: 10, mb: 5, backgroundColor: "#fafafa", color: "black" }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIcon />
              Back
            </Button>
          </div>
          <div>
            <img src={countryData[0].flags.svg} />
            <div className="details">
              <div className="countyName">{countryData[0].name.common}</div>
              <div className="mainDiv">
                <div>
                  <div className="detailsLine">
                    <span className="property">Native Name:</span>
                    <span className="value">
                      {countryData[0].name.official}
                    </span>
                  </div>
                  <div className="detailsLine">
                    <span className="property">Population:</span>
                    <span className="value">{countryData[0].population}</span>
                  </div>
                  <div className="detailsLine">
                    <span className="property">Region:</span>
                    <span className="value">{countryData[0].region}</span>
                  </div>
                  <div className="detailsLine">
                    <span className="property">Sub Region:</span>
                    <span className="value">{countryData[0].subregion}</span>
                  </div>
                  <div className="detailsLine">
                    <span className="property">Capital:</span>
                    <span className="value">{countryData[0].capital}</span>
                  </div>
                </div>
                <div className="div2">
                  <div className="detailsLine">
                    <span className="property">Top Level Domain:</span>
                    <span className="value">{countryData[0].tld}</span>
                  </div>
                  <div className="detailsLine">
                    <span className="property">Currencies:</span>
                    <span className="value">{currencies.toString()}</span>
                  </div>
                  <div className="detailsLine">
                    <span className="property">Languages:</span>
                    <span className="value">{Languages.toString()}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="borders">
              <span className="BorCou">Border Countries:</span>
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
                France
              </Button>
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
                Germany
              </Button>
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
                NetherLands
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Details;
