import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Grid from "@material-ui/core/Grid";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

/**
 * MapContainer component displays a Google Map with markers.
 * @class
 */
export class MapContainer extends Component {
  /**
   * Display markers on the map for each incident.
   * @returns {JSX.Element[]} - Array of Marker components.
   */
  displayMarkers = () => {
    return this.props.data.map((store, index) => {
      const cord = store.location;

      return (
        <Marker
          key={index}
          id={index}
          position={{
            lng: parseFloat(cord[0]),
            lat: parseFloat(cord[1]),
          }}
          onClick={() =>
            Swal.fire(
              "",
              `Captured by ${store.uname} at ${store.address} on ${store.time}`,
              "info"
            )
          }
        >
          <InfoWindow visible={true}>
            <div>
              <p>
                Click on the map or drag the marker to select the location where the
                incident occurred
              </p>
            </div>
          </InfoWindow>
        </Marker>
      );
    });
  };

  /**
   * Render method for the MapContainer component.
   * @returns {JSX.Element} - Rendered MapContainer component.
   */
  render() {
    return (
      <Grid
        item
        sm={12}
        md={12}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {this.props.data ? (
          <Map
            google={this.props.google}
            zoom={4}
            yesIWantToUseGoogleMapApiInternals
            initialCenter={{
              lat: 21.0,
              lng: 78.0,
            }}
            gestureHandling="cooperative"
            style={{ overflow: "y" }}
          >
            {this.displayMarkers()}
          </Map>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <ReactLoading type={"bars"} color={"black"} />
          </div>
        )}
      </Grid>
    );
  }
}

// Export the MapContainer component with Google Maps API key
export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
})(MapContainer);