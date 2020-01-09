import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
    root: {
      display: "flex"
    },
})

class AnnouncementWindow extends Component {

    render(){
        return(
            <React.Fragment className={this.props.classes.root}>
                Hello
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(AnnouncementWindow);