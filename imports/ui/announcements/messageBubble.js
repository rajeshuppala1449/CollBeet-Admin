import React, { Component } from "react";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = () => ({
  grid: {
    flex: 1,
    alignItems: "center"
  },
  griditem: {
    flex: 1
  },
  submitButton: {
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

class MessageBubble extends Component {

  handleDelete = event => {
    event.preventDefault();
    const { message, timestamp, data } = this.props;

    const messageId = data
      .filter(function(i) {
        return i.message === message && i.time === timestamp;
      })
      .map(function(i) {
        return i._id;
      })[0];

    Meteor.call("announcements.removeMessage", messageId);
  };


  render() {
    const { message, timestamp } = this.props;
    const friendlyTimestamp = moment(timestamp).format("LLLL");

    return (
      <div className={["message", "start", "end"].join(" ")}>
        <div className="timestamp">{friendlyTimestamp}</div>

        <Grid container className={this.props.classes.grid}>
          <Grid item className={this.props.classes.griditem}>
            <div className="bubble-container">
              <div className="bubble" title="Hello">
                {message}
              </div>
            </div>
          </Grid>
          <Grid item>
            <Tooltip title="Delete" aria-label="delete" arrow>
              <Button className={this.props.classes.submitButton} onClick={this.handleDelete}>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(MessageBubble);
