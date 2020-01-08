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

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import compose from "recompose/compose";

import { Student } from "../../../api/student.js";

const drawerWidth = 70;

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
  dialogTitle: {
    fontFamily: "Open Sans",
    color: "#242729",
    fontSize: 25
  },
  fieldTitle: {
    fontFamily: "Open Sans",
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
  semCheckbox: {
    color: "#e65100",
    "&$checked": {
      color: "#e65100"
    }
  },
  checked: {},
  menu: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class StudentDepartmentDrawer extends Component {
  state = {
    deptAnchorEl: null,
    open: false,
    disable: true,
    dept: "",
    path: "",
    deptcode: "",
    menuDept: "",
    semesters: [],
    menuPath: "",
    menuDeptCode: ""
  };

  anchorRef = React.createRef(null);

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  addSem = i => e => {
    const arr = this.state.semesters;

    if (arr.includes(i)) {
      var filteredAry = arr.filter(e => e !== i);

      this.setState({
        semesters: filteredAry,
        disable: false
      });
    } else {
      var addedAry = arr.concat(i);

      this.setState({
        semesters: addedAry,
        disable: false
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
      menuDept: "",
      semesters: [],
      disable: true
    });
  };

  changeDepartment = (dept, avpath, deptcode) => e => {
    this.setState({
      dept: dept,
      path: avpath,
      deptcode: deptcode
    });
  };

  deptHandleClick = event => {
    this.setState({
      deptAnchorEl: event.target
    });
  };

  deptHandleClose = (dept, path, deptCode) => e => {
    this.setState({
      deptAnchorEl: null,
      menuDept: dept,
      menuPath: path,
      menuDeptCode: deptCode
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { menuDept, menuPath, menuDeptCode, semesters } = this.state;
    Meteor.call("student.addDept", menuDept, menuPath, menuDeptCode, semesters);

    this.setState({
      open: false,
      menuDept: "",
      semesters: [],
      disable: true
    });
  };

  render() {
    const {
      handleClose,
      handleClickOpen,
      changeDepartment,
      deptHandleClick,
      deptHandleClose,
      anchorRef,
      handleSubmit
    } = this;
    const {
      open,
      dept,
      path,
      deptcode,
      deptAnchorEl,
      menuDept,
      menuDeptCode,
      disable
    } = this.state;
    const { student_schedule } = this.props;

    const menu_deptId = student_schedule
      .filter(function(d) {
        return d.dept === menuDept && d.deptcode === menuDeptCode;
      })
      .map(function(i) {
        return i._id;
      })[0];

    const active_sem_array = student_schedule
      .filter(function(d) {
        return d.dept === dept && d.deptcode === deptcode;
      })
      .map(function(i) {
        return i.activesem;
      })[0];

    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <CssBaseline />

          <main className={this.props.classes.content}>
            {dept && path ? (
              <StudentContent
                dept={dept}
                path={path}
                deptCode={deptcode}
                activesem={active_sem_array}
                studentSchedule={student_schedule}
              />
            ) : (
              <div id="notfound">
                <div className="notfound">
                  <div className="bee">
                    <div className="bee__wing bee__wing--left"></div>
                    <div className="bee__wing bee__wing--right"></div>
                    <div className="bee__oval bee__oval--top"></div>
                    <div className="bee__rect"></div>
                    <div className="bee__rect"> </div>
                    <div className="bee__oval bee__oval--bottom"></div>
                  </div>
                  <h2>Department</h2>
                  <p>
                    Please Select a Department or Add a Department from the
                    right drawer.
                  </p>
                </div>
              </div>
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                <Typography className={this.props.classes.dialogTitle}>
                  Add A Department{" "}
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText className={this.props.classes.fieldContext}>
                  Please select the department you want to add along with
                  current active semesters:
                </DialogContentText>
                <Grid container className={this.props.classes.grid}>
                  <Grid item>
                    <Typography className={this.props.classes.fieldTitle}>
                      Department:
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
                        {menuDept ? menuDept : "Select A Department"}
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
                      {array.map(({ dept, path, deptCode }) => (
                        <MenuItem
                          key={deptCode}
                          onClick={deptHandleClose(dept, path, deptCode)}
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
                              color="default"
                              onChange={this.addSem(1)}
                              className={this.props.classes.semCheckbox}
                              value={1}
                            />
                          }
                          label="Semester 1"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(2)}
                              className={this.props.classes.semCheckbox}
                              value={2}
                            />
                          }
                          label="Semester 2"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(3)}
                              className={this.props.classes.semCheckbox}
                              value={3}
                            />
                          }
                          label="Semester 3"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(4)}
                              className={this.props.classes.semCheckbox}
                              value={4}
                            />
                          }
                          label="Semester 4"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(5)}
                              className={this.props.classes.semCheckbox}
                              value={5}
                            />
                          }
                          label="Semester 5"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(6)}
                              className={this.props.classes.semCheckbox}
                              value={6}
                            />
                          }
                          label="Semester 6"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(7)}
                              className={this.props.classes.semCheckbox}
                              value={7}
                            />
                          }
                          label="Semester 7"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              onChange={this.addSem(8)}
                              className={this.props.classes.semCheckbox}
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
                {!menu_deptId ? (
                  <Button
                    variant="outlined"
                    className={this.props.classes.submitButton}
                    onClick={handleSubmit}
                    disabled={disable}
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    className={this.props.classes.submitButton}
                    disabled
                  >
                    Department Already Exists
                  </Button>
                )}
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
              {student_schedule.map(({ dept, avpath, deptcode }) => (
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
                    onClick={changeDepartment(dept, avpath, deptcode)}
                  >
                    <ListItemIcon>
                      <Avatar
                        src={avpath}
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

export default compose(
  withStyles(useStyles),
  withTracker(() => {
    Meteor.subscribe("student-schedule");

    return {
      student_schedule: Student.find({}).fetch()
    };
  })
)(StudentDepartmentDrawer);
