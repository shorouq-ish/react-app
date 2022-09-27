import React from "react";
import Header from "./components/Header";
import { Button } from "@mui/material";
import "./CSS/details.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container } from "@mui/material";
import Image1 from "./assets/al.svg";

function Details() {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <Button
            variant="contained"
            sx={{ mt: 10, mb: 5, backgroundColor: "#fafafa", color: "black" }}
            href="/"
          >
            <ArrowBackIcon />
            Back
          </Button>
        </div>
        <div>
          <img src={Image1} />
          <div className="details">
            <div className="countyName">Belgium</div>
            <div className="mainDiv">
              <div>
                <div className="detailsLine">
                  <span className="property">Native Name:</span>
                  <span className="value">Belgium</span>
                </div>
                <div className="detailsLine">
                  <span className="property">Population:</span>
                  <span className="value">11,359,700</span>
                </div>
                <div className="detailsLine">
                  <span className="property">Region:</span>
                  <span className="value">Europe</span>
                </div>
                <div className="detailsLine">
                  <span className="property">Sub Region:</span>
                  <span className="value">Western Europe</span>
                </div>
                <div className="detailsLine">
                  <span className="property">Capital:</span>
                  <span className="value">Brussels</span>
                </div>
              </div>
              <div className="div2">
                <div className="detailsLine">
                  <span className="property">Top Level Domain:</span>
                  <span className="value">11,359,700</span>
                </div>
                <div className="detailsLine">
                  <span className="property">Currencies:</span>
                  <span className="value">Euro</span>
                </div>
                <div className="detailsLine">
                  <span className="property">Languages:</span>
                  <span className="value">Dutch, French, German</span>
                </div>
              </div>
            </div>
          </div>
          <div className="borders">
            <span className="BorCou">Border Countries:</span>
            <Button variant="contained"
            style={{textTransform: 'none'}}
            sx={{ mt: 5, mb: 5, mr:2, backgroundColor: "#fafafa", color: "black" }}>France</Button>
            <Button variant="contained"
            style={{textTransform: 'none'}}
            sx={{ mt: 5, mb: 5, mr:2, backgroundColor: "#fafafa", color: "black" }}>Germany</Button>
            <Button variant="contained"
            style={{textTransform: 'none'}}
            sx={{ mt: 5, mb: 5, mr:2, backgroundColor: "#fafafa", color: "black" }}>NetherLands</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Details;
