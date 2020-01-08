import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Checkbox from "@material-ui/core/Checkbox";

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const dayarr = [
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
  dialogTitle: {
    fontFamily: "Open Sans",
    color: "#242729",
    fontSize: 25
  },
  fieldContext: {
    fontFamily: "Open Sans"
  },
  fieldTitle: {
    fontFamily: "Open Sans",
    color: "#242729"
  },
  dayTitle: {
    fontFamily: "Open Sans",
    color: "#242729",
    marginLeft: theme.spacing(2)
  },
  fieldText: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  griditem: {
    flex: 1
  },
  textfield: {
    margin: theme.spacing(1)
  },
  fieldButtonGroup: {
    margin: theme.spacing(1)
  },
  fieldButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  menu: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  timepicker: {
    margin: theme.spacing(1)
  },
  resetButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  submitButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  checkbox: {
    color: "#e65100",
    "&$checked": {
      color: "#e65100"
    }
  },
  checked: {}
});

class AddLectureDialog extends Component {
  state = {
    lectureName: "",
    teacherName: "",
    dayAnchorEl: null,
    dayid: null,
    day: "",
    semAnchorEl: null,
    semValue: null,
    startTime: null,
    endTime: null,
    breakValue: false
  };

  changeTexfieldData = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  anchorRef = React.createRef(null);

  dayHandleClick = event => {
    this.setState({
      dayAnchorEl: event.target
    });
  };

  dayHandleClose = (dayid, day) => e => {
    this.setState({
      dayAnchorEl: null,
      dayid: dayid,
      day: day
    });
  };

  semHandleClick = event => {
    this.setState({
      semAnchorEl: event.target
    });
  };

  semHandleClose = sem => event => {
    this.setState({
      semAnchorEl: null,
      semValue: sem
    });
  };

  changeStartTime = time => {
    this.setState({
      startTime: time.format()
    });
  };

  changeEndTime = time => {
    this.setState({
      endTime: time.format()
    });
  };

  changeBreakValueTrue = () => {
    this.setState({
      breakValue: true
    });
  };

  changeBreakValueFalse = () => {
    this.setState({
      breakValue: false
    });
  };

  clearValues = event => {
    event.preventDefault();

    this.setState({
      lectureName: "",
      teacherName: "",
      dayid: null,
      day: "",
      semValue: null,
      startTime: null,
      endTime: null,
      breakValue: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { deptCode } = this.props;
    const {
      semValue,
      dayid,
      lectureName,
      teacherName,
      startTime,
      endTime,
      breakValue
    } = this.state;
    Meteor.call(
      "student.addLecture",
      deptCode,
      semValue,
      dayid,
      lectureName,
      teacherName,
      startTime,
      endTime,
      breakValue
    );
  };

  addButton() {
    const {
      lectureName,
      teacherName,
      dayid,
      semValue,
      startTime,
      endTime,
      breakValue
    } = this.state;

    if (breakValue === true) {
      if (!semValue || !dayid || !startTime || !endTime) {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            disabled={true}
          >
            {" "}
            Add{" "}
          </Button>
        );
      } else {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            onClick={this.handleSubmit}
          >
            Add
          </Button>
        );
      }
    } else {
      if (
        !semValue ||
        !dayid ||
        !teacherName ||
        !lectureName ||
        !startTime ||
        !endTime
      ) {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            disabled={true}
          >
            {" "}
            Add{" "}
          </Button>
        );
      } else {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            onClick={this.handleSubmit}
          >
            Add
          </Button>
        );
      }
    }
  }

  resetButton() {
    const {
      lectureName,
      teacherName,
      dayid,
      semValue,
      startTime,
      endTime,
      breakValue
    } = this.state;

    if (
      semValue ||
      dayid ||
      teacherName ||
      lectureName ||
      startTime ||
      endTime ||
      breakValue === true
    ) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.resetButton}
          onClick={this.clearValues}
        >
          Reset
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.resetButton}
          disabled={true}
        >
          Reset
        </Button>
      );
    }
  }

  render() {
    const { open, handleClose, dept, activesem } = this.props;
    const {
      dayAnchorEl,
      day,
      semAnchorEl,
      semValue,
      startTime,
      endTime,
      breakValue
    } = this.state;
    const {
      anchorRef,
      dayHandleClick,
      dayHandleClose,
      semHandleClick,
      semHandleClose,
      changeStartTime,
      changeEndTime,
      changeBreakValueTrue,
      changeBreakValueFalse,
    } = this;

    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography className={this.props.classes.dialogTitle}>
              Add A Lecture
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={this.props.classes.fieldContext}>
              Please add lectures for {dept} branch, also include breaks:
            </DialogContentText>
            <Grid container className={this.props.classes.grid}>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  Branch Name:
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={this.props.classes.fieldText}>
                  {dept}
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={this.props.classes.grid}>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  Semester:
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
                    {semValue ? semValue : "Select A Semester"}
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
                    onClick={semHandleClick}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Menu
                  id="simple-menu"
                  anchorEl={semAnchorEl}
                  keepMounted
                  open={Boolean(semAnchorEl)}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  {activesem.map(({ semid }) => (
                    <MenuItem
                      key={semid}
                      onClick={semHandleClose(semid)}
                      className={this.props.classes.menu}
                    >
                      {semid}
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
              <Grid item>
                <Typography className={this.props.classes.dayTitle}>
                  Day:
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
                    {day ? day : "Select A Day"}
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
                    onClick={dayHandleClick}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Menu
                  id="simple-menu"
                  anchorEl={dayAnchorEl}
                  keepMounted
                  open={Boolean(dayAnchorEl)}
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
                  {dayarr.map(({ day, dayid }) => (
                    <MenuItem
                      key={dayid}
                      onClick={dayHandleClose(dayid, day)}
                      className={this.props.classes.menu}
                    >
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>

            <Grid container className={this.props.classes.grid}>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  Break:
                </Typography>
              </Grid>
              <Grid item>
                {breakValue === false ? (
                  <Checkbox
                    color="default"
                    checked={breakValue}
                    onChange={changeBreakValueTrue}
                    className={this.props.classes.checkbox}
                  />
                ) : (
                  <Checkbox
                    color="default"
                    checked={breakValue}
                    onChange={changeBreakValueFalse}
                    className={this.props.classes.checkbox}
                  />
                )}
              </Grid>
            </Grid>

            {breakValue === false ? (
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.fieldTitle}>
                    Subject Name:
                  </Typography>
                </Grid>
                <Grid item className={this.props.classes.griditem}>
                  <TextField
                    id="lecture-textfield"
                    fullWidth
                    className={this.props.classes.textfield}
                    variant="standard"
                    value={this.state.lectureName}
                    onChange={this.changeTexfieldData("lectureName")}
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}

            {breakValue === false ? (
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.fieldTitle}>
                    Teacher Name:
                  </Typography>
                </Grid>
                <Grid item className={this.props.classes.griditem}>
                  <TextField
                    id="teacher-textfield"
                    variant="standard"
                    fullWidth
                    className={this.props.classes.textfield}
                    value={this.state.teacherName}
                    onChange={this.changeTexfieldData("teacherName")}
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}

            <Grid container className={this.props.classes.grid}>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  Start Time:
                </Typography>
              </Grid>
              <Grid item>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <TimePicker
                    className={this.props.classes.timepicker}
                    value={startTime}
                    minutesStep={5}
                    onChange={changeStartTime}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  End Time:
                </Typography>
              </Grid>
              <Grid item>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <TimePicker
                    className={this.props.classes.timepicker}
                    value={endTime}
                    minutesStep={5}
                    onChange={changeEndTime}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            {this.resetButton()}
            {this.addButton()}
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(AddLectureDialog);
