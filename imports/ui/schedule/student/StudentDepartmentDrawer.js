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
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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
  },
  dialogTitle: {
    fontFamily: "Sniglet",
    color: "#242729"
  },
  fieldContext: {
    fontFamily: "Open Sans"
  },
  fieldTitle: {
    fontFamily: "Sniglet",
    color: "#242729"
  },
  fieldButtonGroup: {
    margin: theme.spacing(1)
  },
  fieldButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  submitButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class StudentDepartmentDrawer extends Component {
  state = {
    open: false
  };

  anchorRef = React.createRef(null);

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  myRef = React.createRef();

  render() {
    const { handleClose, handleClickOpen } = this;
    const { open } = this.state;
    const { anchorRef } = this;

    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
            <StudentContent />

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle
                id="form-dialog-title"
                className={this.props.classes.fieldTitle}
              >
                Add A Branch:
              </DialogTitle>
              <DialogContent>
                <DialogContentText className={this.props.classes.fieldContext}>
                  Please select the branch you want to add along with current
                  active semesters:
                </DialogContentText>
                <Grid container className={this.props.classes.grid}>
                  <Grid item>
                    <Typography className={this.props.classes.fieldTitle}>
                      Branch:
                    </Typography>
                  </Grid>
                  <Grid>
                    <ButtonGroup
                      variant="outlined"
                      className={this.props.classes.fieldButtonGroup}
                      ref={anchorRef}
                      aria-label="split button"
                    >
                      <Button className={this.props.classes.fieldButton}>
                        branch
                      </Button>
                      <Button
                        aria-controls={open ? "split-button-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        className={this.props.classes.fieldButton}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        size="small"
                        // onClick={handleClick}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  className={this.props.classes.submitButton}
                  //onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
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
                <ListItem button key="plus" onClick={handleClickOpen}>
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
