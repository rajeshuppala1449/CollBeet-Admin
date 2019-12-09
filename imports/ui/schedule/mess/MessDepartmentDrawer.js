import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MessExpansionPanel from './MessExpansionPanel'

const drawerWidth = 70;
const arr = [
  {
    day: "MONDAY",
    initial: "Mo"
  },
  {
    day: "TUESDAY",
    initial: "Tu"
  },
  {
    day: "WEDNESDAY",
    initial: "We"
  },
  {
    day: "THURSDAY",
    initial: "Th"
  },
  {
    day: "FRIDAY",
    initial: "Fr"
  },
  {
    day: "SATURDAY",
    initial: "Sa"
  },
  {
    day: "SUNDAY",
    initial: "Su"
  }
];

const useStyles = theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flex: 1,
  },
  departmentButtons: {
    color: "#212121",
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
    fontFamily: "Sniglet"
  },
  dayTitle: {
    padding: theme.spacing(2),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 23,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#e65100',
    fontFamily: "Sniglet",
    fontSize: 18,
  },
  expandIcons: {
    color: "#e65100",
  }
});

class MessDepartmentDrawer extends Component {
  state = {
    day: "MONDAY"
  };

  changeDay = input => e => {
    this.setState({
      day: `${input}`
    });
  };

  render() {
    const { day } = this.state;
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>

            <Typography className={this.props.classes.dayTitle}>
              {day}
            </Typography>

            <MessExpansionPanel 
              day={day}/>

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
              {arr.map(({ day, initial }) => (
                <ListItem button key={day} onClick={this.changeDay(`${day}`)}>
                  <ListItemIcon>
                    <Avatar className={this.props.classes.departmentButtons}>
                      {initial}
                    </Avatar>
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}


export default withStyles(useStyles)(MessDepartmentDrawer);
