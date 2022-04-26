import { Grid, Paper, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from "../assets/blok.png";
import googleLogo from "../assets/google.png";
import { signIn, signUpProvider } from "../helpers/firebase";
import Toastify from "../helpers/toast";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    minHeight: "90vh",
    width: "450px",
    margin: "0 auto",
  };
  const inputStyle = { margin: "8px 0" };
  const loginStyle = {
    backgroundImage: 'url("https://picsum.photos/1600/900")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    minHeight: "100vh",
    paddingTop: "30px",
  };
  const logoStyle = {
    display: "block",
    width: "160px",
    height: "160px",
    backgroundColor: "#046582",
    borderRadius: "50%",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    setEmail(" ");
    setPassword([]);
    Toastify('Logged in succesfully')
  };

  const handleProviderLogin = (e)=>{
      e.preventDefault()
      signUpProvider(navigate)
      console.log("test")
     
  }
  return (
    <Grid style={loginStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <img src={loginLogo} alt="loginLogo" style={logoStyle} />
          <h2 style={{ color: "#046582", margin: "1rem" }}>LOGIN</h2>
        </Grid>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "47ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              required
              fullWidth
              style={inputStyle}
              value={email}
              onClick={(e) => setEmail(e.target.value)}
              onChange={(e) => setEmail(e.target.value)}
              error={!email}
              helperText={!email ? "Email is required" : ""}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
              style={inputStyle}
              value={password}
              onClick={(e) => setPassword(e.target.value)}
              onChange={(e) => setPassword(e.target.value)}
              error={!password}
              helperText={!password ? "Password is required" : ""}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#046582" }}
            onClick={handleSubmit}
          >
            LOGIN
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            style={{ padding: 5, marginTop: "8px" }}
            onClick={handleProviderLogin}
          >
            WITH{" "}
            <img
              src={googleLogo}
              alt="googleLogo"
              style={{ width: "60px", marginLeft: "10px" }}
            />
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
