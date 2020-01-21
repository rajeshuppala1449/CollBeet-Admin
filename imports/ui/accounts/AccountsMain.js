import React, { Component } from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Made with "} &hearts;{" "}
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
    height: 80,
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
    margin: theme.spacing(3, 0, 2)
  },
  title: {
    color: "#242729",
    fontFamily: "Sniglet"
  },
  subtitle: {
    color: "#4285f4",
    fontFamily: "Sniglet"
  },
});

class SignInSide extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar variant="square" alt="Logo" src="./logo.png" className={classes.avatar}></Avatar>
          <Typography noWrap className={this.props.classes.title} component="h1" variant="h5">
            CollBeet
          </Typography>
          <Typography noWrap className={this.props.classes.subtitle}>
            Admin
          </Typography>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography className={classes.subtext}>
            Register:
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignInSide);
