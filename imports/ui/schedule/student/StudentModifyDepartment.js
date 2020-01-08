import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import compose from "recompose/compose";
import { Button } from "@material-ui/core";

const useStyles = theme => ({
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
  }
});

class ModifyDepartmentDialog extends Component {
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

  render() {
    const {
      modifyDeptOpen,
      modifyDeptHandleClose,
      activesem,
      addSem,
      removeSem
    } = this.props;

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
              Add or remove semesters or delete department.
            </DialogContentText>

            {activesem.length != 0 ? (
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
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default compose(withStyles(useStyles))(ModifyDepartmentDialog);
