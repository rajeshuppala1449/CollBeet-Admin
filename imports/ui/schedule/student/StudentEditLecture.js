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
import DialogActions from "@material-ui/core/DialogActions";

import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = theme => ({
  dialogTitle: {
    fontFamily: "Open Sans",
    color: "#242729",
    fontSize: 25
  },
  fieldContext: {
    fontFamily: "Open Sans",
    fontSize: 15
  },
  fieldTitle: {
    fontFamily: "Open Sans",
    color: "#242729"
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
  timepicker: {
    margin: theme.spacing(1)
  },
  submitButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class EditLectureDialog extends Component {
  editButton() {
    const {
      editBreakValue,
      editLectureName,
      editTeacherName,
      editStartTime,
      editEndTime
    } = this.props;

    if (editBreakValue === true) {
      if (!editStartTime || !editEndTime) {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            disabled={true}
          >
            {" "}
            Edit{" "}
          </Button>
        );
      } else {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            onClick={this.props.handleEditLect}
          >
            Edit
          </Button>
        );
      }
    } else {
      if (
        !editTeacherName ||
        !editLectureName ||
        !editStartTime ||
        !editEndTime
      ) {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            disabled={true}
          >
            {" "}
            Edit{" "}
          </Button>
        );
      } else {
        return (
          <Button
            variant="outlined"
            className={this.props.classes.submitButton}
            onClick={this.props.handleEditLect}
          >
            Edit
          </Button>
        );
      }
    }
  }

  render() {
    const {
      open,
      handleClose,
      dept,
      editBreakValue,
      editLectureName,
      editTeacherName,
      editStartTime,
      editEndTime,
      changeTexfieldData,
      changeStartTime,
      changeEndTime
    } = this.props;

    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography className={this.props.classes.dialogTitle}>
              Edit Lecture
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={this.props.classes.fieldContext}>
              You can edit lectures from here.
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

            {editBreakValue === false ? (
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
                    value={editLectureName}
                    onChange={changeTexfieldData("editLectureName")}
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}

            {editBreakValue === false ? (
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
                    value={editTeacherName}
                    onChange={changeTexfieldData("editTeacherName")}
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}

            <Grid container className={this.props.classes.grid}>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  Lecture Start Time:
                </Typography>
              </Grid>
              <Grid item>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <TimePicker
                    className={this.props.classes.timepicker}
                    value={editStartTime}
                    minutesStep={5}
                    onChange={changeStartTime}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>

            <Grid container className={this.props.classes.grid}>
              <Grid item>
                <Typography className={this.props.classes.fieldTitle}>
                  Lecture End Time:
                </Typography>
              </Grid>
              <Grid item>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <TimePicker
                    className={this.props.classes.timepicker}
                    value={editEndTime}
                    minutesStep={5}
                    onChange={changeEndTime}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>{this.editButton()}</DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(EditLectureDialog);
