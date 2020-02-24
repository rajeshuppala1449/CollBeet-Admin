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
import HodDetailsForm from "./InfoHodDetailsForm";
import FeeDetailsForm from "./InfoFeeStructure";
import CollegeClubsDetailsForm from "./InfoClubDetails"

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
                    title="Enter full name of your college in this field."
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
                    title="Official College Address to be entered here."
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
                    title="Official College Website to be entered here."
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
                    title="Main college phone number to be entered here. If Landline number, include area code."
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

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container className={this.props.classes.grid}>
                <Grid item>
                  <Typography className={this.props.classes.heading}>
                    Head Of Department Details
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Enter Head Of Department details. Details to be entered department wise."
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
              <HodDetailsForm />
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
                    Fee Structure
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Enter semester fees for students of every department."
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
              <FeeDetailsForm />
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
                    College Clubs
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    placement="right"
                    title="Enter details of various active clubs in your college."
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
              <CollegeClubsDetailsForm />
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </div>
      </div>
    );
  }
}

export default compose(withStyles(useStyles))(InfoWindow);
