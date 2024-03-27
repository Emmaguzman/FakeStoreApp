import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const StyledToolbar = styled(Toolbar)`
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  padding: 10px;
`;

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        padding: "0px",
        backgroundColor: "gray",
        boxShadow: "2px px 1px gray",
        borderRadius: "10px",
        margin: "20px 0",
      }}
    >
      <StyledToolbar>
        <StyledTypography variant="h2">Fake Store APP</StyledTypography>
        <IconButton color="inherit" />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
