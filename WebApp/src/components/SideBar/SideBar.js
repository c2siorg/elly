import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Pending from "../../containers/pending/Pending";
import Approved from "../../containers/Approved/Approved";
import Rejected from "../../containers/Rejected/Rejected";
import "./SideBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: -8,
  },
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const routes = [
  {
    path: "/home/approved",
    main: () => <Approved />,
  },
  {
    path: "/home/pending",
    main: () => <Pending />,
  },
  {
    path: "/home/rejected",
    main: () => <Rejected />,
  },
];

export const SideBar = () => {
  const classes = useStyles();
  
  return (
    <Router>
      <div className={classes.root}>
        {/* Sidebar */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {/* Sidebar List Items */}
            {routes.map((route, index) => (
              <ListItem
                className="sidebar"
                button
                component={NavLink}
                to={route.path}
                key={index}
              >
                <ListItemText primary={route.path.replace("/home/", "")} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {/* Routes */}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
