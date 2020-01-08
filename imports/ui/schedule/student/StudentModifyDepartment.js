import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import compose from "recompose/compose";
import { Button, Divider } from "@material-ui/core";

const useStyles = theme => ({
  fieldContext: {
    fontFamily: "Open Sans"
  },
  deleteDeptTitle: {
    fontFamily: "Open Sans",
    color: "#a64452"
  },
  warningContext: {
    fontFamily: "Open Sans",
    color: "#a64452",
    margin: theme.spacing(1)
  },
  deleteDeptbutton: {
    padding: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#a64452"
  },
  warningDialogButton: {
    fontFamily: "Sniglet",
    color: "#a64452"
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
  gridCheckList: {
    flex: 1,
    alignItems: "center"
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
  button: {
    padding: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  dividerClass: {
    margin: theme.spacing(2)
  }
});

class ModifyDepartmentDialog extends Component {
  state = {
    open: false
  };

  removeSemButton() {
    const { removeSemestersArr, handleDeptRemoveSemestersSubmit } = this.props;

    if (removeSemestersArr.length === 0) {
      return (
        <Button
          key="remove-button-disabled-md"
          variant="outlined"
          disabled={true}
          className={this.props.classes.button}
        >
          Select Semester to Remove
        </Button>
      );
    } else {
      return (
        <Button
          key="remove-button-md"
          variant="outlined"
          className={this.props.classes.button}
          onClick={handleDeptRemoveSemestersSubmit}
        >
          Remove
        </Button>
      );
    }
  }

  addSemButton() {
    const { addSemestersArr, handleDeptAddSemestersSubmit } = this.props;

    if (addSemestersArr.length === 0) {
      return (
        <Button
          key="remove-button-disabled-md"
          variant="outlined"
          disabled={true}
          className={this.props.classes.button}
        >
          Select Semester to Add
        </Button>
      );
    } else {
      return (
        <Button
          key="add-button-md"
          variant="outlined"
          className={this.props.classes.button}
          onClick={handleDeptAddSemestersSubmit}
        >
          Add
        </Button>
      );
    }
  }

  dialogHandleOpen = () => {
    this.setState({
      open: true
    });
  };

  dialogHandleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      modifyDeptOpen,
      modifyDeptHandleClose,
      activesem,
      addSem,
      removeSem,
      dept,
      handleDeleteDepartment
    } = this.props;

    const { open } = this.state;
    const { dialogHandleClose, dialogHandleOpen } = this;

    const allSemarray = [1, 2, 3, 4, 5, 6, 7, 8];
    const currentSemArray = activesem.map(el => el.semid);
    const remainingSemArray = allSemarray.filter(
      el => !currentSemArray.includes(el)
    );

    return (
      <React.Fragment>
        <Dialog
          open={modifyDeptOpen}
          onClose={modifyDeptHandleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography className={this.props.classes.dialogTitle}>
              Edit Department{" "}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={this.props.classes.fieldContext}>
              Add/Remove semesters or Delete department.
            </DialogContentText>

            {activesem.length != 0 ? (
              <React.Fragment>
                <Divider className={this.props.classes.dividerClass} />
                <Grid container className={this.props.classes.gridCheckList}>
                  <Grid item>
                    <Typography className={this.props.classes.fieldTitle}>
                      Remove Semesters:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl
                      component="fieldset"
                      className={this.props.classes.semChecklist}
                      key="removesemformcontrol"
                    >
                      <FormGroup key="sem-fg-sm" row>
                        {activesem.map(({ semid }) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="default"
                                onChange={removeSem(semid)}
                                className={this.props.classes.semCheckbox}
                                value={semid}
                                key={semid}
                              />
                            }
                            key={semid}
                            label={`Semester ${semid}`}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </React.Fragment>
            ) : (
              ""
            )}

            {activesem.length != 0 ? (
              <Grid
                container
                alignitems="flex-start"
                justify="flex-end"
                direction="row"
              >
                {this.removeSemButton()}
              </Grid>
            ) : (
              ""
            )}

            {remainingSemArray.length != 0 ? (
              <React.Fragment>
                <Divider className={this.props.classes.dividerClass} />
                <Grid container className={this.props.classes.gridCheckList}>
                  <Grid item>
                    <Typography className={this.props.classes.fieldTitle}>
                      Add Semesters:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl
                      component="fieldset"
                      className={this.props.classes.semChecklist}
                      key="addsemformcontrol"
                    >
                      <FormGroup key="asem-fg-sm" row>
                        {remainingSemArray.map(e => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="default"
                                onChange={addSem(e)}
                                className={this.props.classes.semCheckbox}
                                value={e}
                                key={e}
                              />
                            }
                            key={e}
                            label={`Semester ${e}`}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </React.Fragment>
            ) : (
              ""
            )}
            {remainingSemArray.length != 0 ? (
              <Grid
                container
                alignitems="flex-start"
                justify="flex-end"
                direction="row"
              >
                {this.addSemButton()}
              </Grid>
            ) : (
              ""
            )}

            <Divider className={this.props.classes.dividerClass} />

            <Grid container>
              <Typography className={this.props.classes.deleteDeptTitle}>
                <b>&#x26A0; Delete Department:</b>
              </Typography>
              <Typography className={this.props.classes.warningContext}>
                {" "}
                Pressing the following button will delete <b>{dept}</b>{" "}
                department permanently
              </Typography>
            </Grid>

            <Grid
              container
              alignitems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button
                key="delete-dept-button-md"
                variant="outlined"
                className={this.props.classes.deleteDeptbutton}
                onClick={dialogHandleOpen}
              >
                Delete Department
              </Button>
            </Grid>
          </DialogContent>
        </Dialog>

        <React.Fragment>
          <Dialog
            open={open}
            onClose={dialogHandleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
          >
            <DialogTitle id="alert-dialog-title">
              <Typography className={this.props.classes.dialogTitle}>
                &#x26A0; {"Are you sure?"} &#x26A0;
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Agreeing to this dialog will permanently delete <b>{dept}</b>{" "}
                department.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={dialogHandleClose}
                className={this.props.classes.warningDialogButton}
              >
                Disagree
              </Button>
              <Button
                onClick={handleDeleteDepartment}
                autoFocus
                className={this.props.classes.warningDialogButton}
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default compose(withStyles(useStyles))(ModifyDepartmentDialog);
