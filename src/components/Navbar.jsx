import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import cwLogo from "../assets/cw.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContexts";

export default function Navbar() {
  const navigate = useNavigate();
  const {currentUser} = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#046582" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={cwLogo} alt="cwLogo" style={{ width: "35px" }} />
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <p style={{fontSize: "2rem"}}>{"<Ferhat/>"} Blog</p>
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          {currentUser ? (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {
                  setAnchorEl(null)
                  navigate("/profile")}}>Profile</MenuItem>
              <MenuItem onClick={() => {
                  setAnchorEl(null)
                  navigate("/new-blog")}}>New</MenuItem>
              <MenuItem onClick={() => {
                  setAnchorEl(null)
                  navigate('/')
                  logOut()}}>Logout</MenuItem>
            </Menu>
          ) : (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {
                  setAnchorEl(null)
                  navigate("/login")}}>
                Login
              </MenuItem>
              <MenuItem onClick={() => {
                  setAnchorEl(null)
                  navigate("/register")}}>Register</MenuItem>
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
