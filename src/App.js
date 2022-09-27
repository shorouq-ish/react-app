// import logo from "./logo.svg";
import "./CSS/App.css";

import "@fontsource/nunito-sans";

import { Route, Routes} from 'react-router-dom';
import Details from "./Details";
import Countries from "./Countries";

function App() {
  return (
    
      <Routes>
          <Route exact path="/Details" element={<Details/>}  />
          <Route exact path="/" element={<Countries/>}  />

          </Routes>

  );
}

export default App;
