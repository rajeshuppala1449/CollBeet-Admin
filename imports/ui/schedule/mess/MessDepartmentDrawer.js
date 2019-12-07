import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 70;
const arr = [
    {
        day: "Monday",
        initial: "Mo"
    },
    {
      day: "Tuesday",
      initial: "Tu"
    },
    {
      day: "Wednesday",
      initial: "We"
    },
    {
      day: "Thursday",
      initial: "Th"
    },
    {
      day: "Friday",
      initial: "Fr"
    },
    {
      day: "Saturday",
      initial: "Sa"
    },
    {
      day: "Sunday",
      initial: "Su"
    },

]


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
    color: "#212121",
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
    fontFamily: "Sniglet"
  },
});

class MessDepartmentDrawer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
              <h1>MessDepartmentDrawer</h1>
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
              {arr.map(
                ({day, initial}) => (
                  <ListItem button key={day}>
                    <ListItemIcon>
                      <Avatar className={this.props.classes.departmentButtons}>{initial}</Avatar>
                    </ListItemIcon>
                  </ListItem>
                )
              )}
            </List>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(MessDepartmentDrawer);
