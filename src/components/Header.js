
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import "../CSS/header.css";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  return (
    
    <header >
      <Container>
        <Box
          
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div class="header-title">Where in the world?</div>
          <div >
            <span className="moon-icon">
              <FaRegMoon />
            </span>

            <span class="dark-mode"> Dark Mode</span>
          </div>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
