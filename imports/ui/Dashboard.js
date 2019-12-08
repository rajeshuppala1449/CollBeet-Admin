import React, { Component } from "react";
import clsx from "clsx";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NavigationIcon from "@material-ui/icons/Navigation";
import SchoolIcon from "@material-ui/icons/School";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDepartmentDrawer from "./schedule/student/StudentDepartmentDrawer";
import StaffDepartmentDrawer from "./schedule/staff/StaffDepartmentDrawer";
import MessDepartmentDrawer from "./schedule/mess/MessDepartmentDrawer";

const useStyles = theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #ef6c00 30%, #ffca28 90%)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    position: 'fixed',
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black"
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "Sniglet"
  },
  userButton: {
    color: "black"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: 240,
    background: "linear-gradient(45deg, #ff9200 30%, #ff9800 90%)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "linear-gradient(45deg, #ff9800 30%, #ffc107 90%)",
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
});

class Dashboard extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };

  handleFieldsChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { open } = this.state;
    const { handleDrawerOpen, handleDrawerClose } = this;
    const theme = useTheme;

    return (
      <Router>
        <div className={this.props.classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(this.props.classes.appBar, {
              [this.props.classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(this.props.classes.menuButton, {
                  [this.props.classes.hide]: open
                })}
              >
                <MenuIcon />
              </IconButton>
              <Avatar variant="square" alt="Logo" src="./logo.png"></Avatar>
              <Typography
                variant="h6"
                noWrap
                className={this.props.classes.title}
              >
                CollBee
              </Typography>
              <Button color="inherit" className={this.props.classes.userButton}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(this.props.classes.drawer, {
              [this.props.classes.drawerOpen]: open,
              [this.props.classes.drawerClose]: !open
            })}
            classes={{
              paper: clsx({
                [this.props.classes.drawerOpen]: open,
                [this.props.classes.drawerClose]: !open
              })
            }}
            open={open}
          >
            <div className={this.props.classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                className={this.props.classes.title}
              >
                Menu
              </Typography>
            </div>
            <Divider />
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Student Schedule" />
              </ListItem>
              <ListItem button component={Link} to="/staff">
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary="Staff Schedule" />
              </ListItem>
              <ListItem button component={Link} to="/mess">
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Mess Schedule" />
              </ListItem>
              <ListItem button component={Link} to="#">
                <ListItemIcon>
                  <NavigationIcon />
                </ListItemIcon>
                <ListItemText primary="Locations" />
              </ListItem>
              <ListItem button component={Link} to="#">
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="College Info" />
              </ListItem>
            </List>
          </Drawer>
          <main className={this.props.classes.content}>
            <div className={this.props.classes.toolbar} />
            <Switch>
              <Route path="/" exact component={StudentDepartmentDrawer} />
              <Route path="/staff" component={StaffDepartmentDrawer} />
              <Route path="/mess" component={MessDepartmentDrawer} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(useStyles)(Dashboard);
