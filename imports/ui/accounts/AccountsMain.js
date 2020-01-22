import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Meteor } from "meteor/meteor";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Made with "} <font color="#e65100">&hearts;</font>{" "}
      <Link color="inherit" href="https://dsckitrc.tech/">
        By DSC KITRC
      </Link>{" "}
    </Typography>
  );
}

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    width: 80,
    height: 80
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  subtext: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    fontFamily: "Open Sans"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  title: {
    color: "#242729",
    fontFamily: "Sniglet"
  },
  subtitle: {
    color: "#4285f4",
    fontFamily: "Sniglet"
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
      "&.Mui-focused fieldset": {
        borderColor: "#e65100"
      }
    }
  }
})(TextField);

class SignInSide extends Component {
  state = {
    username: "",
    password: ""
  };

  changeTexfieldData = input => e => {
    e.preventDefault();
    this.setState({
      [input]: e.target.value
    });
  };

  registerUser = () => e => {
    e.preventDefault();

    const { username, password } = this.state;

    Accounts.createUser({
      username: username,
      password: password
    });
  };

  loginUser = () => e => {
    e.preventDefault();

    const { username, password } = this.state;

    Meteor.loginWithPassword(username, password);
  };

  render() {
    const classes = this.props.classes;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            variant="square"
            alt="Logo"
            src="./logo.png"
            className={classes.avatar}
          ></Avatar>
          <Typography
            noWrap
            className={this.props.classes.title}
            component="h1"
            variant="h5"
          >
            CollBeet
          </Typography>
          <Typography noWrap className={this.props.classes.subtitle}>
            Admin
          </Typography>
          <div className={classes.form}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={this.changeTexfieldData("username")}
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.changeTexfieldData("password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              className={classes.submit}
              onClick={this.loginUser()}
            >
              Register
            </Button>
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignInSide);
