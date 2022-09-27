import * as React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import '../CSS/header.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
function Header() {

  return (
    <header >
      <Container  >
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          style={{
            backgroundColor: "white",
          }}
        >
          <div class="div1">Where in the world?</div>
          <div class="div2"><DarkModeOutlinedIcon alignItems="center" sx={{fontSize: '0.9rem' }} />Dark Mode</div>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
