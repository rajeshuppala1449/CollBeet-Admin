import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import SchoolIcon from "@material-ui/icons/School";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";

import InfoForm from "./InfoForm";

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
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#000000",
    fontFamily: "Sniglet",
    fontSize: 18
  },
  helpbutton: {
    color: "#e65100"
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

        <div className={this.props.classes.rootAvatar}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.heading}>
                    What's our college name?
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Imagine a student is asking you this question. Response should be similar to how you would answer him."
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <InfoForm responseid="college-name" />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.heading}>
                    What's our college address?
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Imagine a student is asking you this question. Response should be similar to how you would answer him."
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <InfoForm responseid="college-address" />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.heading}>
                    What's our college website?
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Imagine a student is asking you this question. Response should be similar to how you would answer him."
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <InfoForm responseid="college-website" />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.heading}>
                    What's our college phone number?
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Imagine a student is asking you this question. Response should be similar to how you would answer him."
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <InfoForm responseid="college-phoneno" />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(useStyles))(InfoWindow);
