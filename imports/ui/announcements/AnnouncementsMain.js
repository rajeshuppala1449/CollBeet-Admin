import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "91vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(1)
  },
  footer: {
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
  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />

        <Container
          component="main"
          className={this.props.classes.main}
          maxWidth="sm"
        >
          Insert The Messages Here
        </Container>

        <footer className={this.props.classes.footer}>
          <Grid container className={this.props.classes.grid}>
            <Grid item className={this.props.classes.griditem}>
              <CssTextField
                label="Enter Announcements Here"
                variant="outlined"
                fullWidth
                id="validation-outlined-input"
              />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className={this.props.classes.submitButton}
              >
                <SendIcon />
              </Button>
            </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default withStyles(useStyles)(AnnouncementWindow);
