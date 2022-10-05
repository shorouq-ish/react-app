import * as React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import "../CSS/header.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
function Header() {
  return (
    <header>
      <Container>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          style={{
            backgroundColor: "white",
          }}
        >
          <div class="header-title">Where in the world?</div>
          <div>
            <span className="moon-icon">
              <DarkModeOutlinedIcon
                alignItems="center"
                sx={{ fontSize: "0.9rem" }}
              />
            </span>
            <span class="dark-mode">Dark Mode</span>
          </div>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
