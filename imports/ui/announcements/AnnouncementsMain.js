import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import MessageBubble from "./messageBubble";
import { Container } from "@material-ui/core";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import compose from "recompose/compose";

import { Announcements } from "../../api/announcement.js";

const useStyles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "91vh"
  },
  messageList: {
    flex: 1,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(10)
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(1)
  },
  footer: {
    position: "fixed",
    width: "95vw",
    bottom: theme.spacing(0),
    padding: theme.spacing(1),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  griditem: {
    flex: 1
  },
  submitButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  }
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#e65100"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e65100"
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#ffcb05"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e65100"
      }
    }
  }
})(TextField);

class AnnouncementWindow extends Component {
  state = {
    announcementMessage: ""
  };

  changeTexfieldData = input => e => {
    e.preventDefault();
    this.setState({
      [input]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { announcementMessage } = this.state;

    const time = new Date().getTime();
    Meteor.call("announcements.addMessage", announcementMessage, time);

    this.setState({
      announcementMessage: ""
    });
  };

  enterPressed = event => {
    var code = event.keyCode || event.which;
    const { announcementMessage } = this.state;
    if (code === 13) {
      if (announcementMessage) {
        event.preventDefault();
        const { announcementMessage } = this.state;

        const d1 = new Date();
        const time = d1.getTime();
        const onlyDate = d1.toDateString();
        Meteor.call("announcements.addMessage", announcementMessage, time, onlyDate);

        this.setState({
          announcementMessage: ""
        });
      }
    }
  };

  submitButton() {
    const { announcementMessage } = this.state;

    if (!announcementMessage) {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          disabled
        >
          <SendIcon />
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          className={this.props.classes.submitButton}
          onClick={this.handleSubmit}
        >
          <SendIcon />
        </Button>
      );
    }
  }

  messageList() {
    const data = this.props.announcements_data;

    if (data.length != 0) {
      return (
        <div>
          {data.map(({ _id, message, time }) => (
            <MessageBubble
              key={_id}
              message={message}
              timestamp={time}
              data={data}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div id="notfound3">
          <div className="notfound3">
            <div className="bee">
              <div className="bee__wing bee__wing--left"></div>
              <div className="bee__wing bee__wing--right"></div>
              <div className="bee__oval bee__oval--top"></div>
              <div className="bee__rect"></div>
              <div className="bee__rect"> </div>
              <div className="bee__oval bee__oval--bottom"></div>
            </div>
            <h2>Announcements</h2>
            <p>Please Enter Announcement Messages in textfield below.</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />

        <main>
          <Container className={this.props.classes.messageList}>
            {this.messageList()}
          </Container>
        </main>

        <footer className={this.props.classes.footer}>
          <Grid container className={this.props.classes.grid}>
            <Grid item className={this.props.classes.griditem}>
              <CssTextField
                label="Enter Announcements Here"
                variant="outlined"
                fullWidth
                id="validation-outlined-input"
                value={this.state.announcementMessage}
                onChange={this.changeTexfieldData("announcementMessage")}
                onKeyPress={this.enterPressed.bind(this)}
              />
            </Grid>
            <Grid item>{this.submitButton()}</Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default compose(
  withStyles(useStyles),
  withTracker(() => {
    Meteor.subscribe("announcements-message");

    return {
      announcements_data: Announcements.find({}, { sort: { time: -1 } }).fetch()
    };
  })
)(AnnouncementWindow);
