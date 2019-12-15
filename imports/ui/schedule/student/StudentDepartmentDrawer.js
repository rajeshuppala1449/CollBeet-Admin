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
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { array } from "./StudentDeptArray";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    dept: "Mechanical Engineering",
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
  gridCheckList: {
    flex: 1,
    alignItems: "center"
  },
  submitButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  semChecklist: {
    color: "#e65100",
    padding: theme.spacing(1)
  },
  menu: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class StudentDepartmentDrawer extends Component {
  state = {
    deptAnchorEl: null,
    open: false,
    dept: "Information Technology",
    path: "./studentDrawerIcons/it-logo.png",
    menuDept: "branch"
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

  changeDepartment = (dept, path) => e => {
    this.setState({
      dept: dept,
      path: path
    });
  };

  deptHandleClick = event => {
    this.setState({
      deptAnchorEl: event.target
    });
  };

  deptHandleClose = dept => e => {
    this.setState({
      deptAnchorEl: null,
      menuDept: dept
    });
  };

  render() {
    const {
      handleClose,
      handleClickOpen,
      changeDepartment,
      deptHandleClick,
      deptHandleClose,
      anchorRef
    } = this;
    const { open, dept, path, deptAnchorEl, menuDept } = this.state;

    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
            <StudentContent dept={dept} path={path} />

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
                  <Grid item>
                    <ButtonGroup
                      variant="outlined"
                      className={this.props.classes.fieldButtonGroup}
                      ref={anchorRef}
                      aria-label="split button"
                    >
                      <Button className={this.props.classes.fieldButton}>
                        {menuDept}
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
                        onClick={deptHandleClick}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    <Menu
                      id="simple-menu"
                      anchorEl={deptAnchorEl}
                      keepMounted
                      open={Boolean(deptAnchorEl)}
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                      }}
                    >
                      {array.map(({ dept, deptCode }) => (
                        <MenuItem
                          key={deptCode}
                          onClick={deptHandleClose(dept)}
                          className={this.props.classes.menu}
                        >
                          {dept}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Grid>
                </Grid>
                <Grid container className={this.props.classes.gridCheckList}>
                  <Grid item>
                    <Typography className={this.props.classes.fieldTitle}>
                      Active Semesters:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl
                      component="fieldset"
                      className={this.props.classes.semChecklist}
                    >
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("gilad")}
                              value={1}
                            />
                          }
                          label="Semester 1"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("jason")}
                              value={2}
                            />
                          }
                          label="Semester 2"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("antoine")}
                              value={3}
                            />
                          }
                          label="Semester 3"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("gilad")}
                              value={4}
                            />
                          }
                          label="Semester 4"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("gilad")}
                              value={5}
                            />
                          }
                          label="Semester 5"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("gilad")}
                              value={6}
                            />
                          }
                          label="Semester 6"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("gilad")}
                              value={7}
                            />
                          }
                          label="Semester 7"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              //onChange={handleChange("gilad")}
                              value={8}
                            />
                          }
                          label="Semester 8"
                        />
                      </FormGroup>
                    </FormControl>
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
                  <ListItem
                    button
                    key={dept}
                    onClick={changeDepartment(dept, path)}
                  >
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
