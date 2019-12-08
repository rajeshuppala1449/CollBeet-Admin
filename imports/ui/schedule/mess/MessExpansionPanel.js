import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";
import compose from "recompose/compose";
import MessForm from "./MessForm"

const useStyles = theme => ({
    root: {
        flex: 1
    },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#e65100",
    fontFamily: "Sniglet",
    fontSize: 18
  },
  expandIcons: {
    color: "#e65100"
  }
});

class MessExpansionPanel extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>
              Breakfast
            </Typography>
            <FreeBreakfastIcon className={this.props.classes.expandIcons} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={this.props.classes.heading}>
              Lunch
            </Typography>
            <RestaurantOutlinedIcon
              className={this.props.classes.expandIcons}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={this.props.classes.heading}>
              Snack/Tea
            </Typography>
            <EmojiFoodBeverageOutlinedIcon
              className={this.props.classes.expandIcons}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={this.props.classes.heading}>
                Dinner
              </Typography>
              <NightsStayIcon className={this.props.classes.expandIcons} />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

            <Typography>
              Food Items:
            </Typography>

            <br />

             <MessForm />

            </ExpansionPanelDetails>
          </ExpansionPanel>
      </div>
    );
  }
}

export default compose(
  withStyles(useStyles)
)(MessExpansionPanel);
