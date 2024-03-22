import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

/**
 * HomeSocial component displays information about the organizations involved.
 * @param {Object} props - Component properties.
 * @returns {JSX.Element} - HomeSocial component.
 */
export default function HomeSocial(props) {
  return (
    <Grid
      container
      style={{
        width: "100%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {/* Images and description */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        style={{ padding: 20, borderRadius: 10 }}
      >
        <Grid
          container
          justify="center"
          spacing={0}
          direction="row"
          alignItems="center"
          style={{ width: "100%" }}
        >
          {/* Logo images */}
          <Grid item xs={12} sm={6} md={5}>
            <img
              alt="Trunks & Leaves Logo"
              style={{
                width: 150,
                height: 150,
              }}
              src={require("../../images/trunks2.png")}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <img
              alt="SCoRe Lab Logo"
              href="https://www.scorelab.org"
              style={{ width: 200, height: 150 }}
              src={require("../../images/score.jpg")}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Organization description */}
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          align="left"
          color="textPrimary"
          style={{ fontFamily: "Montserrat-Regular" }}
        >
          Who are we?
        </Typography>
        {/* Organization description */}
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
          This platform is developed by the SCoRe Lab organization in collaboration with Trunks & Leaves organizations.
        </Typography>
        {/* Buttons (optional) */}
        {/* <Button variant="outlined">find more about SCoRe Lab.</Button>
        <Button variant="outlined">find more about</Button> */}
      </Grid>
    </Grid>
  );
}
