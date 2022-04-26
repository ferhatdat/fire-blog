import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts";
import { CardDelete } from "../helpers/functions";
import { BlogContext } from "../contexts/BlogContext";
import './dashboard.css'
const Details = () => {
  const { currentUser } = React.useContext(AuthContext);
  const { info, setInfo } = React.useContext(BlogContext);
  const location = useLocation();
  const card = location.state.card;
  const navigate = useNavigate()

  const editHandler = (id, title, imageURL, content )=> {
      setInfo({...info, id: id, title: title, imageURL:imageURL, content: content})
      navigate('/update-blog')
  }
  return (
      <div>
          <h1>Details</h1>
      
    <Grid style={{ width: "80%", margin: "16px auto" }}>
    <Card >
                <CardMedia
                  component="img"
                  height="194"
                  image={card.imageURL}
                  alt="img"
                  style={{
                    width: "150px",
                    height: "auto",
                    display: "block",
                    margin: "8px auto",
                  }}
                />
                <CardHeader
                  title={card.title.toUpperCase()}
                  subheader={card.date}
                  style={{ backgroundColor: "#d4d4da" }}
                />
                <CardContent
                  style={{ paddingTop: "0px", backgroundColor: "#d4d4da" }}
                >
                  <Typography>{card.content}</Typography>
                </CardContent>
                <Typography
                  style={{ display: "flex", margin: "8px 0 0 12px", gap: "5px" }}
                >
                  <AccountCircleRoundedIcon />
                  {card.user}
                </Typography>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
      {currentUser?.email === card.user ? (
        <Typography style={{display:"flex", justifyContent: "center", gap: "4rem", marginTop: "1rem"}}>
          <Button onClick={()=>editHandler(
              card.id, card.title, card.imageURL, card.content
          )} variant="contained" color="success">
            UPDATE
          </Button>
          <Button onClick={()=>CardDelete(card.id, navigate)} variant="contained" color="error">
            DELETE
          </Button>
         
        </Typography>
      ) : (
        ""
      )}
    </Grid>
    </div>
  );
};

export default Details;
