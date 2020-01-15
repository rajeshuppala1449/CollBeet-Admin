import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import SchoolIcon from '@material-ui/icons/School';
import Divider from "@material-ui/core/Divider"

const useStyles = theme => ({
  rootAvatar: {
    margin: theme.spacing(2)
  },
  grid: {
    flex: 1,
    alignItems: "center"
  },
  bigAvatar: {
    width: 80,
    height: 80,
    background: "linear-gradient(45deg, #ffc107 90%, #ff9800 30%)"
  },
  branchTitle: {
    marginLeft: theme.spacing(1),
    fontFamily: "Open Sans",
    color: "#e65100",
    fontSize: 30
  },
  separator: {
    flexGrow: 1
  },
  navAvatar: {
    color: "#000000",
    width: 50,
    height: 50
  }
});

class InfoWindow extends Component {
  render() {
    return (
      <div className={this.props.classes.rootAvatar}>
        <Grid container className={this.props.classes.grid}>
          <Grid item>
            <Avatar
              alt="locations-big-avatar"
              className={this.props.classes.bigAvatar}
            >
              <SchoolIcon className={this.props.classes.navAvatar} />
            </Avatar>
          </Grid>
          <Grid item className={this.props.classes.separator}>
            <Typography className={this.props.classes.branchTitle}>
              College Information
            </Typography>
          </Grid>
        </Grid>
        <Divider className={this.props.classes.rootAvatar} />
      </div>
    );
  }
}

export default compose(withStyles(useStyles))(InfoWindow);
