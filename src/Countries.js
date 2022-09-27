import React from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import Cards from "./components/Cards";
import { Container } from "@mui/material";
import "@fontsource/nunito-sans";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { Box } from "@mui/material";
import Image1 from './assets/al.svg';
import Image2 from './assets/af.svg';
import Image3 from './assets/al.svg';
import Image4 from './assets/us.svg';
import Image5 from './assets/de.svg';
import Image6 from './assets/dz.svg';
import Image7 from './assets/is.svg';
import Image8 from './assets/br.svg';
import {Link} from "react-router-dom";

function Countries(){

    return (
        <div>
          
    
          <Header/>
    
          <Container maxWidth="lg" >
            <div>
            
            
              <Box sx={{ display: 'flex' ,justifyContent: 'space-between', flexDirection: {md:'row', lg:'row', xl:'row', sm: 'row', xs: 'column'} ,mt: 10}}>
                <Search />
                <Filter />
              </Box>
              
            </div>
            <div>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName = "Albania" img={Image1} population="2,886,026" region="Europe" capital="Tirana" />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName ="Afghanestan"  img={Image2} population="27,657,145" region="Asia" capital="Kabul" />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName = "Germany" img={Image5} population="81,770,900" region="Europe" capital="Berlin" />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName ="United States" img={Image3} population="323,747,000" region="Americas" capital="Whashington" />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName = "United States" img={Image4} population="323,747,000" region="Americas" capital="Whashington" />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName ="Algeria" img={Image6} population="40,400,000" region="Africa" capital="Algerias" />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName = "Iceland" img={Image7} population="334,300" region="Europe"  capital="Reykjavik"/>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                  <Cards countryName ="Brazil" img={Image8} population="206,135,893" region="Americas" capital="Brasilia" />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      );

}

export default Countries;