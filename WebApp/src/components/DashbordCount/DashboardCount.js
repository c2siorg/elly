// Importing necessary components from React and Material-UI library
import React from "react";
import Grid from "@material-ui/core/Grid";

import SmallCard from "../../components/SmallCard/SmallCard";

// Class component representing a section of the dashboard with count information
class DashboardCount extends React.Component {
  // Render method to display the count information using SmallCard components
  render() {
    return (
      <>
        {/* Grid layout with four columns (xs={3}), each containing a SmallCard component */}
        <Grid item xs={3}>
          {/* SmallCard for displaying total count information */}
          <SmallCard
            style={{ width: "100%" }}
            type={"Total"}
            count={this.props.total}
            icon={"perm_media"}
          />
        </Grid>
        <Grid item xs={3}>
          {/* SmallCard for displaying approved count information */}
          <SmallCard
            type={"Approved"}
            count={this.props.approved}
            icon={"thumb_up"}
          />
        </Grid>
        <Grid item xs={3}>
          {/* SmallCard for displaying pending count information */}
          <SmallCard
            type={"Pending"}
            count={this.props.pending}
            icon={"hourglass_empty"}
          />
        </Grid>
        <Grid item xs={3}>
          {/* SmallCard for displaying rejected count information */}
          <SmallCard
            type={"Rejected"}
            count={this.props.rejected}
            icon={"thumb_down"}
          />
        </Grid>
      </>
    );
  }
}

// Export the DashboardCount component for use in other parts of the application
export default DashboardCount;
