import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
});

class MessForm extends Component {
  state = { values: [{ value: null }] };

  createUI() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <TextField id="standard-basic" label="Standard" />
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i].value = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState(prevState => ({
      values: [...prevState.values, { value: null }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.values.join(", "));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={this.props.classes.root}>
        {this.state.values.map((el, i) => (
          <div key={i}>
            <TextField id="standard-basic" label="Standard" />
            <input
              type="button"
              value="remove"
              onClick={() => this.removeClick(i)}
            />
          </div>
        ))}

        <input type="button" value="add more" onClick={() => this.addClick()} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default compose(
  withStyles(useStyles)
)(MessForm);