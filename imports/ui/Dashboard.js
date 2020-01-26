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
import NavigationIcon from "@material-ui/icons/Navigation";
import SchoolIcon from "@material-ui/icons/School";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import WebIcon from "@material-ui/icons/Web";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDepartmentDrawer from "./schedule/student/StudentDepartmentDrawer";
import MessDepartmentDrawer from "./schedule/mess/MessDepartmentDrawer";
import AnnouncementWindow from "./announcements/AnnouncementsMain";
import LocationWindow from "./locations/LocationsMain";
import InfoWindow from "./info/InfoMain";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

import Snackbar from "@material-ui/core/Snackbar";
import WarningIcon from "@material-ui/icons/Warning";
import Slide from "@material-ui/core/Slide";
import CheckIcon from "@material-ui/icons/Check";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { Meteor } from "meteor/meteor";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#e65100"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e65100"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#e65100"
      }
    }
  }
})(TextField);

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #ef6c00 30%, #ffca28 90%)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    position: "fixed"
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
    color: "#242729"
  },
  title: {
    flexGrow: 1,
    color: "#242729",
    fontFamily: "Sniglet"
  },
  userButton: {
    color: "#242729"
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
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0)
  },
  listitem: {
    fontFamily: "Sniglet"
  },
  errdialog: {
    background: "#ffcb05",
    fontFamily: "Sniglet",
    color: "#242729"
  },
  chsuccessdialog: {
    background: "#81c784",
    fontFamily: "Sniglet",
    color: "#242729"
  },
  submitButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  dialogTitle: {
    fontFamily: "Open Sans",
    color: "#242729",
    fontSize: 25
  }
});

class Dashboard extends Component {
  state = {
    open: false,
    dialogopen: false,
    currentpassword: "",
    newpassword: "",
    errchpass: false,
    succhpass: false,
    Transition: SlideTransition,
    showcurrentpassword: false,
    shownewpassword: false
  };

  changeTexfieldData = input => e => {
    e.preventDefault();
    this.setState({
      [input]: e.target.value
    });
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

  handleDialogOpen = () => {
    this.setState({
      dialogopen: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      dialogopen: false
    });
  };

  handleFieldsChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  changeUserPassword = () => e => {
    e.preventDefault();

    const { currentpassword, newpassword } = this.state;
    const currentComponent = this;

    Accounts.changePassword(currentpassword, newpassword, function(err) {
      if (err) {
        currentComponent.setState({
          errchpass: true
        });
      } else {
        currentComponent.setState({
          succhpass: true,
          dialogopen: false,
          currentpassword: "",
          newpassword: ""
        });
      }
    });
  };

  logoutUser = () => e => {
    e.preventDefault();

    Meteor.logout();
  };

  handleErrChClose = () => {
    this.setState({
      errchpass: false
    });
  };

  handleSucChClose = () => {
    this.setState({
      succhpass: false
    });
  };

  handleClickShowCurrentPassword = () => {
    this.setState({
      showcurrentpassword: !this.state.showcurrentpassword
    });
  };

  handleClickShowNewPassword = () => {
    this.setState({
      shownewpassword: !this.state.shownewpassword
    });
  };

  resetButton() {
    const { newpassword, currentpassword } = this.state;

    if (newpassword && currentpassword) {
      return (
        <Button
          onClick={this.changeUserPassword()}
          variant="outlined"
          className={this.props.classes.submitButton}
        >
          Change
        </Button>
      );
    } else {
      return (
        <Button
          disabled
          variant="outlined"
          className={this.props.classes.submitButton}
        >
          Change
        </Button>
      );
    }
  }

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
                CollBeet
              </Typography>

              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Change Password"
                placement="bottom"
                arrow
              >
                <Button
                  color="inherit"
                  className={this.props.classes.userButton}
                  onClick={this.handleDialogOpen}
                >
                  <VpnKeyIcon />
                </Button>
              </Tooltip>

              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Logout"
                placement="bottom"
                arrow
              >
                <Button
                  color="inherit"
                  className={this.props.classes.userButton}
                  onClick={this.logoutUser()}
                >
                  <ExitToAppIcon />
                </Button>
              </Tooltip>
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
              <ListItem button component={Link} to="/mess">
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Mess Schedule" />
              </ListItem>
              <ListItem button component={Link} to="/announcements">
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary="Announcements" />
              </ListItem>
              <ListItem button component={Link} to="/locations">
                <ListItemIcon>
                  <NavigationIcon />
                </ListItemIcon>
                <ListItemText primary="Locations" />
              </ListItem>
              <ListItem button component={Link} to="/info">
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
              <Route path="/mess" component={MessDepartmentDrawer} />
              <Route path="/announcements" component={AnnouncementWindow} />
              <Route path="/locations" component={LocationWindow} />
              <Route path="/info" component={InfoWindow} />
            </Switch>
            <Dialog
              id="change-pass-dialog"
              open={this.state.dialogopen}
              onClose={this.handleDialogClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                <Typography className={this.props.classes.dialogTitle}>
                  Change Password
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To change password, please enter your current password and new
                  password and hit Submit.
                </DialogContentText>

                <CssTextField
                  autoFocus
                  margin="dense"
                  id="current-pass"
                  label="Current Password"
                  type={this.state.showcurrentpassword ? "text" : "password"}
                  fullWidth
                  variant="outlined"
                  onChange={this.changeTexfieldData("currentpassword")}
                  value={this.state.currentpassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowCurrentPassword}
                          edge="end"
                        >
                          {this.state.showcurrentpassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <CssTextField
                  autoFocus
                  margin="dense"
                  id="new-pass"
                  label="New Password"
                  type={this.state.shownewpassword ? "text" : "password"}
                  fullWidth
                  variant="outlined"
                  onChange={this.changeTexfieldData("newpassword")}
                  value={this.state.newpassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowNewPassword}
                          edge="end"
                        >
                          {this.state.shownewpassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <DialogActions>{this.resetButton()}</DialogActions>
              </DialogContent>
            </Dialog>

            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errchpass}
              autoHideDuration={6000}
              onClose={this.handleErrChClose}
              message="Incorrect Password. Try Again"
              TransitionComponent={this.state.Transition}
              ContentProps={{
                classes: {
                  root: this.props.classes.errdialog
                }
              }}
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleErrChClose}
                  >
                    <WarningIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />

            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.succhpass}
              autoHideDuration={6000}
              onClose={this.handleSucChClose}
              message="Password Changed Successfully"
              TransitionComponent={this.state.Transition}
              ContentProps={{
                classes: {
                  root: this.props.classes.chsuccessdialog
                }
              }}
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleSucChClose}
                  >
                    <CheckIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(useStyles)(Dashboard);
