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
import { array } from "./InfoClubsArray";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import compose from "recompose/compose";

import { Info } from "../../api/info.js";
import { Divider } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    flex: 1
  },
  grid: {
    flex: 1,
    alignItems: "start"
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
    fontSize: 16,
    alignItems: "right"
  },
  clubdesc: {
    margin: theme.spacing(1),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 12,
    alignItems: "right"
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
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

class CollegeClubsDetailsForm extends Component {
  state = {
    open: false,
    deptAnchorEl: null,
    menuType: "",
    menuClubCode: "",
    clubName: "",
    clubLeaderName: "",
    clubLeaderContact: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      clubName,
      clubLeaderName,
      clubLeaderContact,
      menuClubCode,
      menuType
    } = this.state;

    Meteor.call(
      "info.addclub",
      clubName,
      clubLeaderName,
      clubLeaderContact,
      menuClubCode,
      menuType
    );

    this.setState({
      menuType: "",
      menuClubCode: "",
      clubName: "",
      clubLeaderName: "",
      clubLeaderContact: ""
    });
  };

  handleDelete = _id => () => {
    event.preventDefault();

    const taskId = _id;
    Meteor.call("info.removeresponse", taskId);
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

  deptHandleClose = (type, clubCode) => e => {
    this.setState({
      deptAnchorEl: null,
      menuType: type,
      menuClubCode: clubCode
    });
  };

  addButton() {
    const {
      menuClubCode,
      clubName,
      clubLeaderName,
      clubLeaderContact
    } = this.state;

    if (!menuClubCode) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Please Select Club Type
        </Button>
      );
    } else if (!clubName) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Please Enter Club Name
        </Button>
      );
    } else if (!clubLeaderName) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Please Enter Club Leader Name
        </Button>
      );
    } else if (!clubLeaderContact) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled={true}
        >
          Please Enter Club Leader Contact
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
    const { club_data } = this.props;
    const { anchorRef, deptHandleClick, deptHandleClose } = this;
    const { menuType, open, deptAnchorEl } = this.state;

    return (
      <div className={this.props.classes.root}>
        {club_data.length != 0 ? (
          <div>
            <Typography className={this.props.classes.title}>
              Current Response(s):
            </Typography>
            {club_data.map(
              ({
                _id,
                clubName,
                clubLeaderName,
                clubLeaderContact,
                clubType
              }) => (
                <div key={_id}>
                  <Grid container className={this.props.classes.grid}>
                    <Grid item className={this.props.classes.griditem}>
                      <Typography className={this.props.classes._food}>
                        {clubName}
                      </Typography>
                    </Grid>
                    <Grid item className={this.props.classes.griditem}>
                      <Typography className={this.props.classes._food}>
                        {clubLeaderName}
                      </Typography>
                    </Grid>
                    <Grid item className={this.props.classes.griditem}>
                      <Typography className={this.props.classes._food}>
                        {clubLeaderContact}
                      </Typography>
                    </Grid>
                    <Grid item className={this.props.classes.griditem}>
                      <Typography className={this.props.classes._food}>
                        {clubType}
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
                  <Divider />
                </div>
              )
            )}
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
              Club Type:
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
                {menuType ? menuType : "Select A Department"}
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
              {array.map(({ type, clubCode }) => (
                <MenuItem
                  key={clubCode}
                  onClick={deptHandleClose(type, clubCode)}
                  className={this.props.classes.menu}
                >
                  {type}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>

        <TextField
          className={this.props.classes.textfield}
          label="Club Name"
          variant="outlined"
          fullWidth
          value={this.state.clubName}
          onChange={this.changeResponse("clubName")}
        />

        <TextField
          className={this.props.classes.textfield}
          label="Club Leader Name"
          variant="outlined"
          fullWidth
          value={this.state.clubLeaderName}
          onChange={this.changeResponse("clubLeaderName")}
        />

        <TextField
          className={this.props.classes.textfield}
          label="Club Leader Contact"
          variant="outlined"
          fullWidth
          value={this.state.clubLeaderContact}
          onChange={this.changeResponse("clubLeaderContact")}
        />

        {this.addButton()}
      </div>
    );
  }
}

export default compose(
  withStyles(useStyles),
  withTracker(() => {
    Meteor.subscribe("info-list");

    return {
      club_data: Info.find({ clubdetail: { $eq: true } }).fetch()
    };
  })
)(CollegeClubsDetailsForm);
