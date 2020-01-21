import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import compose from "recompose/compose";

import { Info } from "../../api/info.js";

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
  }
});

class InfoForm extends Component {
  state = {
    responseText: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { responseid } = this.props;
    const responsetext = this.state.responseText;
    Meteor.call("info.addresponse", responseid, responsetext);

    this.setState({
      responseText: ""
    });
  };

  handleDelete = event => {
    event.preventDefault();
    const { cinfo_data, responseid } = this.props;

    const taskId = cinfo_data
      .filter(function(res) {
        return res.responseid === responseid;
      })
      .map(function(i) {
        return i._id;
      })[0];

    Meteor.call("info.removeresponse", taskId);
  };

  changeResponse = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { responseid, cinfo_data } = this.props;

    const response = cinfo_data
      .filter(function(res) {
        return res.responseid === responseid;
      })
      .map(function(i) {
        return i.responsetext;
      })[0];

    return (
      <div className={this.props.classes.root}>
        {response ? (
          <Typography className={this.props.classes.title}>
            Current Response:
          </Typography>
        ) : (
          ""
        )}

        {response ? (
          <Typography className={this.props.classes._food}>
            " <i>{response}</i> "
          </Typography>
        ) : (
          ""
        )}

        <Typography className={this.props.classes.title}>
          Please Change Response From Here:
        </Typography>

        <TextField
          className={this.props.classes.textfield}
          label="Response"
          variant="outlined"
          fullWidth
          value={this.state.responseText}
          onChange={this.changeResponse("responseText")}
        />

        <Grid container className={this.props.classes.grid}>
          <Grid item>
            {this.state.responseText ? (
              <Button
                variant="outlined"
                className={this.props.classes.button}
                onClick={this.handleSubmit}
              >
                Add
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={this.props.classes.button}
                disabled
              >
                Add
              </Button>
            )}
          </Grid>

          <Grid item>
            {response ? (
              <Button
                variant="outlined"
                className={this.props.classes.button}
                onClick={this.handleDelete}
              >
                Delete
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={this.props.classes.button}
                disabled
              >
                Delete
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withStyles(useStyles),
  withTracker(() => {
    Meteor.subscribe("info-list");

    return {
      cinfo_data: Info.find({}).fetch()
    };
  })
)(InfoForm);
