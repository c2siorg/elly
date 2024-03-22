// Importing necessary modules and components from the React and react-router-dom libraries
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importing custom components
import NotFoundPage from "./containers/notFound/NotFoundPage";
import LoginPage from "./containers/login/LoginPage";
import Admin from "./containers/Admin/Admin";
import Home from "./containers/Home/Home";
import Discover from "./containers/Discover/Discover";
import Observations from "./containers/Observations/Observations";

// Importing styles
import "./index.css";

// Defining the main App component
export default class App extends React.Component {
  // Render method to render the component
  render() {
    // Returning the main JSX structure of the application
    return (
      // Using BrowserRouter to enable routing in the application
      <BrowserRouter>
        {/* Switch component to render the first matching Route */}
        <Switch>
          {/* Route for the Home page */}
          <Route exact path="/" component={Home} />

          {/* Route for the Login page */}
          <Route path="/login" component={LoginPage} />

          {/* Route for the Discover page */}
          <Route path="/discover" component={Discover} />

          {/* Route for the Observations page */}
          <Route path="/observations" component={Observations} />

          {/* Route for the Admin page (assumed as the home page) */}
          <Route path="/home" component={Admin} />

          {/* Route for any other path (404 Not Found page) */}
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
