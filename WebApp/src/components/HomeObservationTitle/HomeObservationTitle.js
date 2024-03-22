import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import firebase from "firebase/app";

/**
 * HomeObservationTitle component displays recent user observations with a carousel.
 * @param {Object} props - Component properties.
 * @returns {JSX.Element} - HomeObservationTitle component.
 */
export default function HomeObservationTitle(props) {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    // Fetch recent verified observations from the database
    firebase
      .database()
      .ref("usersObservations")
      .orderByChild("verified")
      .equalTo("verified")
      .limitToLast(5)
      .once("value")
      .then((snapshot) => {
        const result = snapshot.val();
        let out = [];
        for (let i in result) {
          out.push({ legend: result[i].uname, img: result[i].rphotos });
        }
        out.reverse(); // Reverse the order to display recent observations first
        setObservations(out);
      });
  }, []);

  return (
    <Grid
      container
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Carousel to display recent observations */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <div style={{ padding: 10 }}>
          <Carousel>
            {observations.map((val, i) => (
              <div key={i}>
                <img src={val.img} alt={`Observation ${i}`} />
                {/* Uncomment the line below to display legend */}
                {/* <p className="legend">Captured by {val.legend}</p> */}
              </div>
            ))}
          </Carousel>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} justify="center">
        {/* Heading */}
        <Typography
          component="h2"
          variant="h2"
          align="left"
          color="textPrimary"
          style={{ fontFamily: "Montserrat-Regular" }}
        >
          User Observations
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          align="left"
          color="textSecondary"
          paragraph
          style={{
            fontSize: 22,
            textAlign: "left",
            fontFamily: "Montserrat-Regular",
          }}
        >
          Any user around the world is capable of uploading elephant images to
          the data collection we are gathering. Just you can download the mobile
          app from given link and start capturing. Below you can see some
          observations uploaded by users.
        </Typography>

        {/* Button to view all observations (optional) */}
        {/* <Button
          variant="contained"
          color="inherit"
          component={NavLink}
          to={"/observations"}
        >
          View images
        </Button> */}
      </Grid>
    </Grid>
  );
}
