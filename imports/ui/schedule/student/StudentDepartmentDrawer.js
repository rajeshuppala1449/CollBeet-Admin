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
import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 70;

const dayarr = [
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

const arr = [
  {
    dept: "Information Technology",
    path: "./it-logo.png"
  },
  {
    dept: "Electrical Engineering",
    path: "./electrical-logo.png"
  },
  {
    dept: "Computer Science",
    path: "./cs-logo.png"
  },
  {
    dept: "Mechnical Engineering",
    path: "./mechanical-logo.png"
  },
  {
    dept: "Civil Enginnering",
    path: "./civil-logo.png"
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
  },
  rootAvatar: {
    margin: theme.spacing(2)
  },
  bigAvatar: {
    width: 80,
    height: 80,
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)"
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  branchTitle: {
    padding: theme.spacing(2),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 30
  },
  separator: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  menu: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class StudentDepartmentDrawer extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.target
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { handleClick, handleClose } = this;
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
            <div className={this.props.classes.rootAvatar}>
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src="./it-logo.png"
                    className={this.props.classes.bigAvatar}
                  />
                </Grid>
                <Grid item className={this.props.classes.separator}>
                  <Typography className={this.props.classes.branchTitle}>
                    Information Technology
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={this.props.classes.button}
                    onClick={handleClick}
                  >
                    Semester
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    {dayarr.map(({ day }) => (
                      <MenuItem
                        key={day}
                        onClick={handleClose}
                        className={this.props.classes.menu}
                      >
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={this.props.classes.button}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Day
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    {dayarr.map(({ day }) => (
                      <MenuItem
                        key={day}
                        onClick={handleClose}
                        className={this.props.classes.menu}
                      >
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
              </Grid>
              <Divider className={this.props.classes.rootAvatar} />
            </div>
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
