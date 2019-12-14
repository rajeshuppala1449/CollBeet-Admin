import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import StudentContent from "./StudentContent";

const drawerWidth = 70;
const arr = [
  {
    dept: "Information Technology",
    path: "./studentDrawerIcons/it-logo.png"
  },
  {
    dept: "Electrical Engineering",
    path: "./studentDrawerIcons/electrical-logo.png"
  },
  {
    dept: "Computer Science",
    path: "./studentDrawerIcons/cs-logo.png"
  },
  {
    dept: "Mechnical Engineering",
    path: "./studentDrawerIcons/mechanical-logo.png"
  },
  {
    dept: "Civil Enginnering",
    path: "./studentDrawerIcons/civil-logo.png"
  }
];

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flex: 1
  },
  departmentButtons: {
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)"
  }
});

class StudentDepartmentDrawer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
            <StudentContent />
          </main>

          <Drawer
            className={this.props.classes.drawer}
            variant="permanent"
            classes={{
              paper: this.props.classes.drawerPaper
            }}
            anchor="right"
          >
            <div className={this.props.classes.toolbar} />
            <Divider />
            <List>
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Add Department"
                placement="left"
                arrow
              >
                <ListItem button key="plus">
                  <ListItemIcon>
                    <Avatar
                      src="./plus-logo.png"
                      className={this.props.classes.departmentButtons}
                    >
                      Plus
                    </Avatar>
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
            </List>
            <Divider />
            <List>
              {arr.map(({ dept, path }) => (
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title={dept}
                  placement="left"
                  key={dept}
                  arrow
                >
                  <ListItem button key={dept}>
                    <ListItemIcon>
                      <Avatar
                        src={path}
                        className={this.props.classes.departmentButtons}
                      >
                        {dept}
                      </Avatar>
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              ))}
            </List>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(StudentDepartmentDrawer);
