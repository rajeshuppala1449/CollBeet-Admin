import React, { Component } from "react";
import compose from "recompose/compose";

import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import Dashboard from "./Dashboard";
import UserLogin from "./accounts/AccountsLogin";
import AccountsLogin from "./accounts/AccountsLogin";
//import UserRegister from "./accounts/AccountsRegister";

class App extends Component {
  mountPage() {
    const userid = this.props.currentUser;

    if (userid) {
      return <Dashboard />;
    } else {
      Meteor.startup(() => {
        if (!Meteor.users.find().count()) {
          const user = {
            username: "admin",
            password: "admin"
          };

          Accounts.createUser(user);
        }
      });
      return <UserLogin />;
    }
  }

  render() {
    return <div>{this.mountPage()}</div>;
  }
}

export default compose(
  withTracker(() => {
    return {
      currentUser: Meteor.userId()
    };
  })
)(App);
