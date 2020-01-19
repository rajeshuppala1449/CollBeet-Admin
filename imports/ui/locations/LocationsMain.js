import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import NavigationIcon from "@material-ui/icons/Navigation";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";

import LocationForm from "./LocationsForm";
import LocationsFormStaffroom from "./LocationsFormStaffroom";
import LocationsFormLab from "./LocationsFormLab";

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
  fieldTitle: {
    fontFamily: "Open Sans",
    color: "#242729",
    fontSize: 18
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
    fontSize: 11,
    alignItems: "right"
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

class LocationWindow extends Component {
  render() {
    return (
      <div className={this.props.classes.rootAvatar}>
        <Grid container className={this.props.classes.grid}>
          <Grid item>
            <Avatar
              alt="locations-big-avatar"
              className={this.props.classes.bigAvatar}
            >
              <NavigationIcon className={this.props.classes.navAvatar} />
            </Avatar>
          </Grid>
          <Grid item className={this.props.classes.separator}>
            <Typography className={this.props.classes.branchTitle}>
              College Location's
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
                    Where can I find this Staffroom?
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
              <LocationsFormStaffroom />
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
                    Where can I find this Lab?
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
              <LocationsFormLab />
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
                    Where can I find Principal's Office?
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
              <LocationForm responseid="principal-office" />
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
                    Where can I find Administration Office?
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
              <LocationForm responseid="admin-office" />
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
                    Where can I find Cafeteria?
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
              <LocationForm responseid="cafe-teria" />
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
                    Where can I find Mess Hall?
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
              <LocationForm responseid="mess-hall" />
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
                    Where can I find Auditorium?
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
              <LocationForm responseid="audit-orium" />
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
                    Where can I find Security Cabin?
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
              <LocationForm responseid="security-cabin" />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(useStyles))(LocationWindow);
