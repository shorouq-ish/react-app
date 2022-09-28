// import logo from "./logo.svg";
import "./CSS/App.css";

import "@fontsource/nunito-sans";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Countries from "./Countries";
import Test from "./components/Test";

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;
