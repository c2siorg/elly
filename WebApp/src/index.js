// Importing React library for building user interfaces
import React from "react";

// Importing ReactDOM library for rendering React components into the DOM
import ReactDOM from "react-dom";

// Importing the main styling for the application
import "./index.css";

// Importing the main App component
import App from "./App";

// Importing the custom font for the application
import "./fonts/Montserrat-Regular.ttf";

// Importing service worker for offline capabilities and faster loading
import * as serviceWorker from "./serviceWorker";

// Rendering the main App component into the root element of the HTML document
ReactDOM.render(<App />, document.getElementById("root"));

// Service worker registration (unregister() is used here, but can be changed to register() for a progressive web app)
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
