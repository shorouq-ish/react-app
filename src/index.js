import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter  } from "react-router-dom";
import { Route, Routes} from 'react-router-dom';
import Countries from "./Countries";

import Details from "./Details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     
     <App/>
);
