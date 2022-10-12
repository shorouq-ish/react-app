import useLocalStorage from "use-local-storage";

function Theme() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
}
export default Theme;
