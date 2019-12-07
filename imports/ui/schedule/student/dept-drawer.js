import React, { Component } from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';
import Login from "../../Login";

const drawerWidth = 70;
const arr = [
    {
        dept: "IT",
        path: "./it-logo.png"
    },
    {
        dept: "EE",
        path: "./electrical-logo.png"
    },
    {
        dept: "CS",
        path: "./cs-logo.png"
    },
    {
        dept: "ME",
        path: "./mechanical-logo.png"
    },
    {
        dept: "CE",
        path: "./civil-logo.png"
    }
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
  },
  departmentButtons: {
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
  },
});

class Department_Drawer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
              <div className={this.props.classes.toolbar} />
              <Container>
            <Login />
            </Container>
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
            <ListItem button key="plus">
                    <ListItemIcon>
                      <Avatar src="./plus-logo.png" className={this.props.classes.departmentButtons}>Plus</Avatar>
                    </ListItemIcon>
                  </ListItem>
            </List>
            <Divider />
            <List>
              {arr.map(
                ({dept, path}) => (
                  <ListItem button key={dept}>
                    <ListItemIcon>
                      <Avatar src={path} className={this.props.classes.departmentButtons}>{dept}</Avatar>
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

export default withStyles(useStyles)(Department_Drawer);
