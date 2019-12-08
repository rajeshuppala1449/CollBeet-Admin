import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'


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
      flex: 1,
      background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
  },
  departmentButtons: {
    color: "#212121",
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
    fontFamily: "Sniglet"
  },
  typo: {
    padding: theme.spacing(1),
  },
});

class MessDepartmentDrawer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
          
          

          <Typography paragraph className={this.props.classes.typo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
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
