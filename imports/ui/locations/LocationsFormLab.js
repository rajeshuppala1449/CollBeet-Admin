import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { array } from "../schedule/student/StudentDeptArray";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import compose from "recompose/compose";

import { Locations } from "../../api/locations.js";

const useStyles = theme => ({
  root: {
    flex: 1
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  textfield: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  title: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#242729"
  },
  _food: {
    margin: theme.spacing(1),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 20,
    alignItems: "right"
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  helpbutton: {
    color: "#e65100"
  },
  griditem: {
    flex: 1
  },
  submitButton: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  fieldTitle: {
    margin: theme.spacing(1),
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
  menu: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class LocationsFormLab extends Component {
  state = {
    responseText: "",
    open: false,
    deptAnchorEl: null,
    menuDept: "",
    menuDeptCode: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { responseText, menuDeptCode, menuDept } = this.state;
    Meteor.call(
      "locations.addlablocation",
      responseText,
      menuDeptCode,
      menuDept
    );

    this.setState({
      responseText: "",
      menuDept: "",
      menuDeptCode: ""
    });
  };

  handleDelete = _id => () => {
    event.preventDefault();

    const taskId = _id;
    Meteor.call("locations.removeresponse", taskId);
  };

  changeResponse = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  anchorRef = React.createRef(null);

  deptHandleClick = event => {
    this.setState({
      deptAnchorEl: event.target
    });
  };

  deptHandleClose = (dept, deptCode) => e => {
    this.setState({
      deptAnchorEl: null,
      menuDept: dept,
      menuDeptCode: deptCode
    });
  };

  addButton() {
    const { staffroom_data } = this.props;
    const { menuDeptCode, responseText } = this.state;

    const staffroom_deptId = staffroom_data
      .filter(function(d) {
        return d.deptcode === menuDeptCode;
      })
      .map(function(i) {
        return i._id;
      })[0];

    if (!menuDeptCode) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Please Select Department
        </Button>
      );
    } else if (!responseText) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Please Enter Response
        </Button>
      );
    } else if (staffroom_deptId) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Department Already Exists
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

  render() {
    const { staffroom_data } = this.props;
    const { anchorRef, deptHandleClick, deptHandleClose } = this;
    const { menuDept, open, deptAnchorEl } = this.state;

    return (
      <div className={this.props.classes.root}>
        {staffroom_data.length != 0 ? (
          <div>
            <Typography className={this.props.classes.title}>
              Current Response(s):
            </Typography>
            {staffroom_data.map(({ _id, responsetext, department }) => (
              <div key={_id}>
                <Grid container className={this.props.classes.grid}>
                  <Grid item className={this.props.classes.griditem}>
                    <Typography className={this.props.classes._food}>
                      {department}
                    </Typography>
                  </Grid>
                  <Grid item className={this.props.classes.griditem}>
                    <Typography className={this.props.classes._food}>
                      " <i>{responsetext}</i> "
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      className={this.props.classes.submitButton}
                      onClick={this.handleDelete(_id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        <Typography className={this.props.classes.title}>
          Please Add Response From Here:
        </Typography>

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
              {array.map(({ dept, deptCode }) => (
                <MenuItem
                  key={deptCode}
                  onClick={deptHandleClose(dept, deptCode)}
                  className={this.props.classes.menu}
                >
                  {dept}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>

        <TextField
          className={this.props.classes.textfield}
          label="Response"
          variant="outlined"
          fullWidth
          value={this.state.responseText}
          onChange={this.changeResponse("responseText")}
        />

        {this.addButton()}
      </div>
    );
  }
}

export default compose(
  withStyles(useStyles),
  withTracker(() => {
    Meteor.subscribe("locations-list");

    return {
      staffroom_data: Locations.find({ lab: { $eq: true } }).fetch()
    };
  })
)(LocationsFormLab);
