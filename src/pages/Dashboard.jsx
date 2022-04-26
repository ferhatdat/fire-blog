import * as React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Heading,
  createMuiTheme,
} from "@mui/material";
import "./dashboard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useFetch } from "../helpers/functions";
import spinnerGif from "../assets/spinner.gif";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { AuthContext } from "../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
import Toastify from "../helpers/toast";

export default function Dashboard() {
  const { loading, cardList } = useFetch();
  const { currentUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (card) => {
    if (currentUser) {
      navigate("/details", { state: { card } });
    } else {
      navigate("/login");
      Toastify('Please log in to see details')
    }
  };


  return (
    <div>
      <h1>DashBoard</h1>

      <Grid container spacing={2} style={{ margin: "16px auto", width: "80%", cursor: "pointer" }}>
        {loading ? (
          <img
            src={spinnerGif}
            alt="spinner"
            style={{ display: "block", margin: "10rem auto" }}
          />
        ) : cardList?.length === 0 ? (
          <h4>No Blog To Shown</h4>
        ) : (
          cardList?.map((card) => (
            <Grid
              key={card.id}
              item
              xs={6}
              md={4}
              lg={4}
              onClick={() => handleClick(card)}
              
            >
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={card.imageURL}
                  alt="img"
                  style={{
                    width: "250px",
                    height: "150px",
                    display: "block",
                    margin: "8px auto",
                    objectFit: "fill"
                  }}
                />
                <CardHeader
                  title={card.title.toUpperCase()}
                  subheader={card.date}
                  style={{ backgroundColor: "#d4d4da" }}
                />
                <CardContent
                  style={{ paddingTop: "0px", backgroundColor: "#d4d4da", height: "200px" }}
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
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
