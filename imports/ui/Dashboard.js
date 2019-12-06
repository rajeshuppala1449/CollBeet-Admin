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
import App from "./App";

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
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
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
});

class Appbar extends Component {
  state = {
    open: false,
    step: 1,
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

  changeIndex1 = () => {
    this.setState({
      step: 1
    });
  };

  changeIndex2 = () => {
    this.setState({
      step: 2
    });
  };

  changeIndex3 = () => {
    this.setState({
      step: 3
    });
  };

  changeIndex4 = () => {
    this.setState({
      step: 4
    });
  };

  changeIndex5 = () => {
    this.setState({
      step: 5
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
    const { step } = this.state;

    return (
      <React.Fragment>
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
              <Typography
                variant="h6"
                noWrap
                className={this.props.classes.title}
              >
                CollBee Admin
              </Typography>
              <Button color="inherit">Login</Button>
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
            </div>
            <Divider />
            <List>
              <ListItem button onClick={this.changeIndex1}>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Student Schedule" />
              </ListItem>
              <ListItem button onClick={this.changeIndex2}>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary="Staff Schedule" />
              </ListItem>
              <ListItem button onClick={this.changeIndex3}>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Mess Schedule" />
              </ListItem>
              <ListItem button onClick={this.changeIndex4}>
                <ListItemIcon>
                  <NavigationIcon />
                </ListItemIcon>
                <ListItemText primary="Locations" />
              </ListItem>
              <ListItem button onClick={this.changeIndex5}>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="College Info" />
              </ListItem>
            </List>
          </Drawer>
          <main className={this.props.classes.content}>
            <div className={this.props.classes.toolbar} />
            <App
              step={step}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Appbar);
