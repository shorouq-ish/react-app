import React from "react";
import { Card } from "@mui/material";
import {CardContent} from "@mui/material";
import {CardMedia} from "@mui/material";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

import '../CSS/cards.css';

import "@fontsource/nunito-sans";
function Cards(props) {
  return(
  <div class="mainDiv" >
    <Link to="/details">
    <Card sx={{ml:{xs: 3, sm: 0}, mr:{xs: 3, sm: 0} }}>
    <CardMedia
        component="img"
        height="170"
        image={props.img}
        alt="flag"
        sx={{mb: 2}}
      />
      <CardContent>
      <Typography gutterBottom  component="div" sx={{fontWeight: '900', fontSize: '1.3rem', fontFamily:'Nunito Sans', mb: 2}} >
          {props.countryName}
        </Typography>
        <Typography>
        <div ><span class="property">Population:</span><span class="value">{props.population}</span></div>
        <div ><span class="property">Region:</span><span class="value">{props.region}</span></div>
        <div ><span class="property">Capital:</span><span class="value">{props.capital}</span></div>
        </Typography>
      </CardContent>
    </Card>
    </Link>
  </div>
  );
}

export default Cards;
