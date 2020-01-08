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
  state = {
    disable: true,
    removeSemesters: [],
    addSemesters: []
  };

  removeSem = i => e => {
    const arr = this.state.removeSemesters;

    if (arr.includes(i)) {
      var filteredAry = arr.filter(e => e !== i);

      this.setState({
        removeSemesters: filteredAry,
        disable: false
      });
    } else {
      var addedAry = arr.concat(i);

      this.setState({
        removeSemesters: addedAry,
        disable: false
      });
    }
  };

  addSem = i => e => {
    const arr = this.state.addSemesters;

    if (arr.includes(i)) {
      var filteredAry = arr.filter(e => e !== i);

      this.setState({
        addSemesters: filteredAry,
        disable: false
      });
    } else {
      var addedAry = arr.concat(i);

      this.setState({
        addSemesters: addedAry,
        disable: false
      });
    }
  };

  render() {
    const { modifyDeptOpen, modifyDeptHandleClose, activesem } = this.props;

    const allSemarray = [1, 2, 3, 4, 5, 6, 7, 8];
    const currentSemArray = activesem.map(el => el.semid);
    const remainingSemArray = allSemarray.filter(
      el => !currentSemArray.includes(el)
    );

    console.log(this.state.addSemesters, this.state.removeSemesters);

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
              Add or remove semesters or delete department. Note: Page is set to refresh on closing of this Dialog.
            </DialogContentText>
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
                >
                  <FormGroup row>
                    {activesem.map(({ semid }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="default"
                            onChange={this.removeSem(semid)}
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
            <Grid
              container
              alignitems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button
                variant="outlined"
                className={this.props.classes.button}
              >
                Remove
              </Button>
            </Grid>

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
                >
                  <FormGroup row>
                    {remainingSemArray.map(e => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="default"
                            onChange={this.addSem(e)}
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
            <Grid
              container
              alignitems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button
                variant="outlined"
                className={this.props.classes.button}
              >
                Add
              </Button>
            </Grid>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default compose(withStyles(useStyles))(ModifyDepartmentDialog);
