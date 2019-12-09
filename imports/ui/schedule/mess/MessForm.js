import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = theme => ({
  root: {
    flex: 1,
  },
  grid: {
    flex: 1,
    alignItems:"center"
  },
  margin: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  title: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#000"
  },
  submit: {
    margin: theme.spacing(1),
    fontFamily: "Sniglet",
    color: "#e65100"
  },
  helpbutton: {
    color: "#e65100",
  }
 
});

class MessForm extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>

        

        <Grid container className={this.props.classes.grid}>

        <Grid item>

        <Typography className={this.props.classes.title}>
          Please Add Food Items Here:
        </Typography>

        </Grid>

        <Grid item>
          
          <Tooltip disableFocusListener disableTouchListener title="Separate Every Food Item with a Comma(,)">
          <IconButton aria-label="delete" className={this.props.classes.helpbutton}>
            <HelpIcon />
          </IconButton>
          </Tooltip>

        </Grid>

        </Grid>

      <FormControl fullWidth className={this.props.classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Food Items</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            labelWidth={80}
          />
        </FormControl>
        
        <Button variant="outlined" className={this.props.classes.submit} type="submit">
          Submit
        </Button>
      </div>
    );
  }
}

export default compose(withStyles(useStyles))(MessForm);
