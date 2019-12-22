import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import { Mess } from "../../../api/mess.js";

const useStyles = theme => ({
  root: {
    flex: 1
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  form: {
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
    fontSize: 24,
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

class MessForm extends Component {
  state = {
    fooditems: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { day, dayid, type } = this.props;
    const fooditems = this.state.fooditems;
    Meteor.call("mess.addfood", day, dayid, type, fooditems);

    this.setState({
      fooditems: ""
    });
  };

  handleDelete = event => {
    event.preventDefault();
    const { mess_data, dayid, type } = this.props;

    const taskId = mess_data
      .filter(function(food) {
        return food.type === type && food.dayid === dayid;
      })
      .map(function(i) {
        return i._id;
      })[0];

    Meteor.call("mess.removefood", taskId);
  };

  changeFoodItems = (input, day, dayid, type) => e => {
    this.setState({
      [input]: e.target.value,
      dayid: dayid,
      day: day,
      type: type
    });
  };

  render() {
    const { dayid, type, mess_data } = this.props;

    const food = mess_data
      .filter(function(food) {
        return food.type === type && food.dayid === dayid;
      })
      .map(function(i) {
        return i.fooditems;
      })[0];

    return (
      <div className={this.props.classes.root}>
        {food ? (
          <Typography className={this.props.classes.title}>
            Current Food Items:
          </Typography>
        ) : (
          ""
        )}
        {food ? (
          <Typography className={this.props.classes._food}>{food}</Typography>
        ) : (
          ""
        )}

        <Grid container className={this.props.classes.grid}>
          <Grid item>
            {food ? (
              <Typography className={this.props.classes.title}>
                Please Change Food Items Here:
              </Typography>
            ) : (
              <Typography className={this.props.classes.title}>
                Please Add Food Items Here:
              </Typography>
            )}
          </Grid>

          <Grid item>
            <Tooltip
              disableFocusListener
              disableTouchListener
              title="Separate Every Food Item with a Comma(,)"
            >
              <IconButton
                aria-label="delete"
                className={this.props.classes.helpbutton}
              >
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>

        <TextField
          id={type}
          className={this.props.classes.form}
          label="Food Items"
          variant="outlined"
          fullWidth
          value={this.state.fooditems}
          onChange={this.changeFoodItems("fooditems")}
        />

        <Grid container className={this.props.classes.grid}>
          <Grid item>
            {this.state.fooditems ? (
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
            {food ? (
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
    Meteor.subscribe("mess-list");

    return {
      mess_data: Mess.find({}).fetch()
    };
  })
)(MessForm);
