import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../CSS/CounrtyCard.css";
import "@fontsource/nunito-sans";
import { useDrag } from "react-dnd";
import useLocalStorage from "use-local-storage";
import "../CSS/theme.css";

function CounrtyCard(props) {

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { name: props.countryName, flag: props.img },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div class="card-item" >
      <Link to="/details" state={{ countryName: props.countryName }}>
        <Card
        class="country-card"
          elevation={3}
          sx={{ ml: { xs: 3, sm: 0 }, mr: { xs: 3, sm: 0 } }}
          ref={drag}
          style={{
            opacity: isDragging ? "0.5" : "1",
            boxShadow: "1px 1px 5px 1px #e9e8e8",
          }}
        >
          <CardMedia
          className="media"
            component="img"
            height="170"
            image={props.img}
            alt="flag"
            sx={{ mb: 3  }}
          />

          <CardContent sx={{ p: 3.5 }}>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontWeight: "900",
                fontSize: "1.4rem",
                fontFamily: "Nunito Sans",
                mb: 1.5,
              }}
            >
              {props.countryName}
            </Typography>
            <Typography sx={{ pb: 2.5 }}>
              <div>
                <span class="property">Population:</span>
                <span class="value">{props.population}</span>
              </div>
              <div>
                <span class="property">Region:</span>
                <span class="value">{props.region}</span>
              </div>
              <div>
                <span class="property">Capital:</span>
                <span class="value">{props.capital}</span>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default CounrtyCard;
