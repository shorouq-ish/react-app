import "@fontsource/nunito-sans";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Countries from "./Countries";
import useLocalStorage from "use-local-storage";
import "../CSS/theme.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const themeChange = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div class='body' data-theme={theme}>
    <Router  basename={window.location.pathname || ""}>
      <Routes>
        <Route
          exact
          path="/details/:name"
          element={<Details onClick={themeChange}  theme={theme} />}
        />
        <Route
          data-theme={theme}
          exact
          path="/"
          element={<Countries onClick={themeChange} data-theme={theme} theme={theme} />}
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
