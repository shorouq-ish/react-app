import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../CSS/CounrtyCard.css";
import "@fontsource/nunito-sans";
import { useDrag } from "react-dnd";
import "../CSS/theme.css";
import StarIcon from "@mui/icons-material/Star";
import { Hidden } from "@mui/material";

function CounrtyCard(props) {
  let color = "lightgray";
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { name: props.countryName, flag: props.img },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  function mobileFavourite(e) {
    {
      console.log(props.countryName);
      const colorStyle = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("color");
      console.log(colorStyle);
      if (colorStyle === "rgb(211, 211, 211)") {
        color = "gray";
      } else {
        color = "gold";
      }

      props.onClick(props.countryName, props.img, color);
    }
  }

  return (
    <div class="card-item">
      <Card
        data-theme={props.theme}
        class="country-card"
        elevation={3}
        sx={{ ml: { xs: 3, sm: 0 }, mr: { xs: 3, sm: 0 } }}
        ref={drag}
        style={{
          opacity: isDragging ? "0.5" : "1",
          // boxShadow: "1px 1px 5px 1px #e9e8e8",
        }}
      >
        <Link to={"/details/" + props.countryName}>
          <CardMedia
            className="media"
            component="img"
            height="170"
            image={props.img}
            alt="flag"
            sx={{ mb: 3 }}
          />

          <CardContent
            sx={{ p: 3.5 }}
            data-theme={props.theme}
          >
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
            <Typography sx={{ pb: 0.5 }}>
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
        </Link>
        <Hidden only={["sm", "md", "lg", "xl"]}>
        <div class="starIcon">
            <div></div>
            <StarIcon
              id={props.countryName}
              className={
                props.favourits.includes(props.countryName) ? "gold" : "gray"
              }
              sx={{ mr: 1, mb: 1 }}
              onClick={mobileFavourite}
            />
          </div>
        </Hidden>
        
      </Card>
    </div>
  );
}

export default CounrtyCard;
