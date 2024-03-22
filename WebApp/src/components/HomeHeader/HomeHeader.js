import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

/**
 * HomeHeader component represents the header for the home page.
 * @param {Object} props - Component properties.
 * @returns {JSX.Element} - HomeHeader component.
 */
export default function HomeHeader(props) {
  return (
    <AppBar style={{ backgroundColor: "#014421" }} position="relative">
      <Toolbar>
        {/* Logo and Title */}
        <div
          style={{
            flex: 1,
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {/* Uncomment the code below to include a logo */}
          {/* <div
            style={{
              borderRadius: 2,
              marginRight: 5
            }}
          >
            <img
              alt="logo"
              className={classes.icon}
              src={require("../../images/logo/logo.png")}
            />
          </div> */}
          {/* Home Button with Logo and Title */}
          <Button
            variant="outlined"
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderWidth: 0,
            }}
            component={NavLink}
            to={"/"}
          >
            <Typography
              variant="h5"
              color="inherit"
              style={{
                flexDirection: "row",
                fontSize: 24,
                fontFamily: "Montserrat-Regular",
              }}
            >
              EleWatch
              {/* Beta Version Indicator */}
              <Typography
                variant="body1"
                color="inherit"
                style={{ fontSize: 10, fontFamily: "Montserrat-Regular" }}
              >
                Beta
              </Typography>
            </Typography>
          </Button>
        </div>

        {/* Sign In Button */}
        <Button
          variant="outlined"
          color="inherit"
          component={NavLink}
          to={"/login"}
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}
