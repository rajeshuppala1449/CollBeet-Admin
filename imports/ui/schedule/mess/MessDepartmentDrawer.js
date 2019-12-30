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
import MessExpansionPanel from "./MessExpansionPanel";
import Tooltip from "@material-ui/core/Tooltip";
import { Grid } from "@material-ui/core";

const drawerWidth = 70;
const arr = [
  {
    day: "sunday",
    initial: "Su",
    dayid: 0
  },
  {
    day: "monday",
    initial: "Mo",
    dayid: 1
  },
  {
    day: "tuesday",
    initial: "Tu",
    dayid: 2
  },
  {
    day: "wednesday",
    initial: "We",
    dayid: 3
  },
  {
    day: "thursday",
    initial: "Th",
    dayid: 4
  },
  {
    day: "friday",
    initial: "Fr",
    dayid: 5
  },
  {
    day: "saturday",
    initial: "Sa",
    dayid: 6
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
    color: "#212121",
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
    fontFamily: "Sniglet"
  },
  dayTitle: {
    padding: theme.spacing(2),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 23
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#e65100",
    fontFamily: "Sniglet",
    fontSize: 18
  },
  expandIcons: {
    color: "#e65100"
  },
  rootAvatar: {
    margin: theme.spacing(2)
  },
  bigAvatar: {
    width: 80,
    height: 80,
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)",
    color: "#212121",
    fontFamily: "Sniglet",
    fontSize: 32
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  dayTitle: {
    padding: theme.spacing(2),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 30
  },
  separator: {
    flexGrow: 1
  }
});

class MessDepartmentDrawer extends Component {
  state = {
    day: "",
    dayid: null,
    initial: ""
  };

  changeDay = (input, dayid, initial) => e => {
    this.setState({
      day: `${input}`,
      dayid,
      initial
    });
  };

  render() {
    const { day, dayid, initial } = this.state;
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
            {day && dayid && initial ? (
              <div>
                <div className={this.props.classes.rootAvatar}>
                  <Grid container className={this.props.classes.grid}>
                    <Grid item>
                      <Avatar className={this.props.classes.bigAvatar}>
                        {initial}
                      </Avatar>
                    </Grid>
                    <Grid item className={this.props.classes.separator}>
                      <Typography className={this.props.classes.dayTitle}>
                        {day.toUpperCase()}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider className={this.props.classes.rootAvatar} />
                </div>
                <MessExpansionPanel day={day} dayid={dayid} />{" "}
              </div>
            ) : (
              <div id="notfound">
                <div className="notfound">
                  <div className="notfound-404">
                    <div></div>
                    <h1>&#10137;</h1>
                  </div>
                  <h2>Day</h2>
                  <p>Please Select a Day from the right drawer</p>
                </div>
              </div>
            )}
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
              {arr.map(({ day, initial, dayid }) => (
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title={day.charAt(0).toUpperCase() + day.slice(1)}
                  placement="left"
                  arrow
                  key={day}
                >
                  <ListItem
                    button
                    key={day}
                    onClick={this.changeDay(`${day}`, dayid, initial)}
                  >
                    <ListItemIcon>
                      <Avatar className={this.props.classes.departmentButtons}>
                        {initial}
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

export default withStyles(useStyles)(MessDepartmentDrawer);
