import { Grid, Paper, TextField, Button, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContexts";
import { BlogContext } from "../contexts/BlogContext";
import { AddCard, EditCard } from "../helpers/functions";


const UpdateBlog = () => {
  const navigate = useNavigate();
  const { info, setInfo } = useContext(BlogContext);
  const { currentUser, email } = useContext(AuthContext);

  useEffect(() => {
    setInfo({ ...info, user: currentUser?.email });
  }, [info]);

  const paperStyle = {
    padding: 20,
    minHeight: "90vh",
    width: "500px",
    margin: "0 auto",
    boxShadow: "none",
  };
  const inputStyle = { margin: "8px 0" };
  const loginStyle = {
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
    setInfo({ ...info, date: new Date().toDateString() });
    EditCard(info);
    navigate("/");
    setInfo({ ...info, title: "", imageURL: "", content: "" });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <Grid style={loginStyle}>
      <Paper style={paperStyle}>
        <Grid align="center">
          <img src={loginLogo} alt="loginLogo" style={logoStyle} />
          <h2 style={{ color: "#046582", margin: "1rem" }}>UPDATE BLOG</h2>
        </Grid>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "53ch" },
          }}
          autoComplete="off"
        >
          <div>
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              type="text"
              required
              fullWidth
              style={inputStyle}
              value={info.title}
              onChange={handleChange}
            />
            <TextField
              label="Image URL"
              variant="outlined"
              name="imageURL"
              type="text"
              required
              fullWidth
              style={inputStyle}
              value={info.imageURL}
              onChange={handleChange}
            />
            <TextField
              label="Content"
              variant="outlined"
              type="text"
              name="content"
              required
              fullWidth
              multiline={true}
              rows={15}
              style={inputStyle}
              value={info.content}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#046582" }}
            onClick={handleSubmit}
          >
            UPDATE
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default UpdateBlog;
